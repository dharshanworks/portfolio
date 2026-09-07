import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { RotateCw, Sparkles, Compass, MousePointerClick } from 'lucide-react';
import { techStrip, skillsData } from '../data/portfolio';

interface Skills3DProps {
  onSelectSkill: (skill: string) => void;
  selectedSkill: string | null;
  isDarkMode?: boolean;
}

// Flat list of top skills for the 3D globe
const sphereSkills = Array.from(
  new Set([
    ...techStrip,
    ...skillsData.flatMap((c) => c.skills)
  ])
).slice(0, 24);

export function Skills3D({ onSelectSkill, selectedSkill, isDarkMode = true }: Skills3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isRotating, setIsRotating] = useState(true);
  const isRotatingRef = useRef(isRotating);

  useEffect(() => {
    isRotatingRef.current = isRotating;
  }, [isRotating]);

  // Store internal Three.js references
  const threeRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    group: THREE.Group;
    sprites: { sprite: THREE.Sprite; skill: string; baseScale: THREE.Vector3 }[];
    animationFrameId: number;
    raycaster: THREE.Raycaster;
    mouse: THREE.Vector2;
  } | null>(null);

  // Generate canvas texture for a skill badge
  const createSkillBadgeTexture = useCallback((skillName: string, isDark: boolean, isSelected: boolean) => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 80;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Pill background
    const radius = 38;
    ctx.beginPath();
    ctx.roundRect(8, 8, canvas.width - 16, canvas.height - 16, radius);

    if (isSelected) {
      ctx.fillStyle = '#6366f1';
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 4;
      ctx.stroke();
    } else if (isDark) {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.5)';
      ctx.lineWidth = 3;
      ctx.stroke();
    } else {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.4)';
      ctx.lineWidth = 3;
      ctx.stroke();
    }

    // Glowing dot
    ctx.beginPath();
    ctx.arc(36, 40, 6, 0, Math.PI * 2);
    ctx.fillStyle = isSelected ? '#ffffff' : '#38bdf8';
    ctx.fill();

    // Skill text
    ctx.fillStyle = isSelected ? '#ffffff' : (isDark ? '#f8fafc' : '#0f172a');
    ctx.font = 'bold 26px Outfit, sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(skillName, 54, 40);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const width = container.clientWidth;
    const height = container.clientHeight;
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 240;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Master Group
    const group = new THREE.Group();
    scene.add(group);

    // Inner Glowing Wireframe Sphere (Icosahedron)
    const sphereRadius = 85;
    const innerGeo = new THREE.IcosahedronGeometry(sphereRadius * 0.65, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: isDarkMode ? 0x6366f1 : 0x818cf8,
      wireframe: true,
      transparent: true,
      opacity: isDarkMode ? 0.22 : 0.18,
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerSphere);

    // Core central glowing star particle
    const coreGeo = new THREE.SphereGeometry(12, 16, 16);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.6,
      wireframe: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // Orbiting Rings
    const ringGeo = new THREE.TorusGeometry(sphereRadius * 0.95, 0.4, 8, 80);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.25,
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    ring2.rotation.y = Math.PI / 4;
    group.add(ring2);

    // Background Particle Field
    const particlesCount = 120;
    const particlesGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 350;
      positions[i + 1] = (Math.random() - 0.5) * 350;
      positions[i + 2] = (Math.random() - 0.5) * 350;
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMat = new THREE.PointsMaterial({
      color: isDarkMode ? 0xc4b5fd : 0x6366f1,
      size: 1.8,
      transparent: true,
      opacity: 0.5,
    });
    const particles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particles);

    // Distribute Skills around Fibonacci Sphere
    const spritesList: { sprite: THREE.Sprite; skill: string; baseScale: THREE.Vector3 }[] = [];
    const count = sphereSkills.length;

    sphereSkills.forEach((skill, i) => {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      const x = sphereRadius * Math.cos(theta) * Math.sin(phi);
      const y = sphereRadius * Math.sin(theta) * Math.sin(phi);
      const z = sphereRadius * Math.cos(phi);

      const texture = createSkillBadgeTexture(skill, isDarkMode, skill === selectedSkill);
      if (!texture) return;

      const spriteMat = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        depthWrite: false,
      });

      const sprite = new THREE.Sprite(spriteMat);
      sprite.position.set(x, y, z);
      // aspect ratio: 256 / 80 = 3.2
      const baseScale = new THREE.Vector3(26, 8.125, 1);
      sprite.scale.copy(baseScale);

      // Store user data
      sprite.userData = { skill };

      group.add(sprite);
      spritesList.push({ sprite, skill, baseScale });
    });

    // Raycaster & Mouse setup
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-1000, -1000);

    threeRef.current = {
      scene,
      camera,
      renderer,
      group,
      sprites: spritesList,
      animationFrameId: 0,
      raycaster,
      mouse,
    };

    // Drag & Momentum interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotationVelocity = { x: 0.001, y: 0.003 };

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      previousMousePosition = { x: clientX, y: clientY };
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      // Update normalized mouse coordinates for raycasting
      mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;

      if (isDragging) {
        const deltaX = clientX - previousMousePosition.x;
        const deltaY = clientY - previousMousePosition.y;

        rotationVelocity = {
          x: deltaY * 0.005,
          y: deltaX * 0.005,
        };

        group.rotation.x += rotationVelocity.x;
        group.rotation.y += rotationVelocity.y;

        previousMousePosition = { x: clientX, y: clientY };
      }
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    domElement.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // Click on sprite to select skill
    const onCanvasClick = () => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(spritesList.map((s) => s.sprite));
      if (intersects.length > 0) {
        const hit = intersects[0].object as THREE.Sprite;
        const skill = hit.userData.skill as string;
        if (skill) {
          onSelectSkill(skill);
        }
      }
    };
    domElement.addEventListener('click', onCanvasClick);

    // Animation Loop
    let lastHovered: THREE.Sprite | null = null;

    const animate = () => {
      // Auto-rotation when not dragging
      if (!isDragging && isRotatingRef.current) {
        group.rotation.y += rotationVelocity.y;
        group.rotation.x += rotationVelocity.x;

        // Apply friction to return to subtle drift
        rotationVelocity.x += (0.0005 - rotationVelocity.x) * 0.03;
        rotationVelocity.y += (0.0025 - rotationVelocity.y) * 0.03;
      }

      // Rotate internal elements in counter directions for dynamic effect
      innerSphere.rotation.y -= 0.004;
      coreMesh.rotation.x += 0.008;
      ring1.rotation.z += 0.003;
      ring2.rotation.z -= 0.003;
      particles.rotation.y += 0.0003;

      // Raycasting for hover
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(spritesList.map((s) => s.sprite));

      if (intersects.length > 0) {
        const hoveredObject = intersects[0].object as THREE.Sprite;
        if (hoveredObject !== lastHovered) {
          if (lastHovered) {
            const found = spritesList.find((s) => s.sprite === lastHovered);
            if (found) lastHovered.scale.copy(found.baseScale);
          }
          lastHovered = hoveredObject;
          const found = spritesList.find((s) => s.sprite === hoveredObject);
          if (found) {
            hoveredObject.scale.set(found.baseScale.x * 1.35, found.baseScale.y * 1.35, 1);
            setHoveredSkill(found.skill);
            domElement.style.cursor = 'pointer';
          }
        }
      } else {
        if (lastHovered) {
          const found = spritesList.find((s) => s.sprite === lastHovered);
          if (found) lastHovered.scale.copy(found.baseScale);
          lastHovered = null;
          setHoveredSkill(null);
          domElement.style.cursor = 'grab';
        }
      }

      renderer.render(scene, camera);
      threeRef.current!.animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (threeRef.current) {
        cancelAnimationFrame(threeRef.current.animationFrameId);
      }
      window.removeEventListener('resize', handleResize);
      domElement.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      domElement.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
      domElement.removeEventListener('click', onCanvasClick);

      // Dispose Three.js objects
      innerGeo.dispose();
      innerMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();

      spritesList.forEach(({ sprite }) => {
        if (sprite.material.map) sprite.material.map.dispose();
        sprite.material.dispose();
      });

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [createSkillBadgeTexture, isDarkMode, onSelectSkill, selectedSkill]);

  const handleResetCamera = () => {
    if (threeRef.current) {
      threeRef.current.group.rotation.set(0, 0, 0);
    }
  };

  return (
    <div className="relative w-full h-[450px] sm:h-[520px] rounded-3xl overflow-hidden glass-card border border-slate-200/80 dark:border-slate-800/80 bg-slate-900/10 dark:bg-slate-950/40 backdrop-blur-md shadow-2xl flex items-center justify-center">
      {/* 3D Canvas mount point */}
      <div 
        ref={containerRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />

      {/* Top Floating Control Bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/60 dark:border-slate-800/60 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm">
          <Sparkles size={14} className="text-primary" />
          <span>Interactive 3D Skill Constellation</span>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={() => setIsRotating((prev) => !prev)}
            className={`p-2 rounded-xl backdrop-blur-md border transition-all text-xs font-medium flex items-center gap-1.5 shadow-sm ${
              isRotating
                ? 'bg-primary/10 border-primary/30 text-primary'
                : 'bg-white/80 dark:bg-slate-900/80 border-slate-200/60 dark:border-slate-800/60 text-slate-500'
            }`}
            title={isRotating ? 'Pause auto-spin' : 'Resume auto-spin'}
          >
            <RotateCw size={14} className={isRotating ? 'animate-spin' : ''} style={{ animationDuration: '6s' }} />
            <span className="hidden sm:inline">{isRotating ? 'Spinning' : 'Paused'}</span>
          </button>

          <button
            onClick={handleResetCamera}
            className="p-2 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors shadow-sm"
            title="Reset position"
          >
            <Compass size={14} />
          </button>
        </div>
      </div>

      {/* Bottom Interactive Prompt & Hover Indicator */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row items-center justify-between gap-2 pointer-events-none">
        <div className="flex items-center gap-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/60 dark:border-slate-800/60 text-[11px] text-slate-500 dark:text-slate-400 shadow-sm">
          <MousePointerClick size={13} className="text-primary" />
          <span>Click & Drag to rotate • Click any badge to filter projects</span>
        </div>

        {hoveredSkill && (
          <div className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-primary/30 animate-scale-up pointer-events-auto">
            {hoveredSkill}
          </div>
        )}
      </div>
    </div>
  );
}
