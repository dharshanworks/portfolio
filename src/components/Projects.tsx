import { Section } from './Section';
import { projectsData } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
