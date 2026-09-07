import { useState, useCallback, type ReactNode } from 'react';
import { CheckCircle2, Info, Copy, X } from 'lucide-react';
import { ToastContext, type ToastMessage } from '../context/ToastContext';
import { useToast } from '../hooks/useToast';

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const toast = useCallback(({ type, title, description }: Omit<ToastMessage, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, type, title, description }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, toast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export function Toast() {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div 
      aria-live="polite" 
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full px-4 sm:px-0"
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          role="status"
          className="pointer-events-auto flex items-start gap-3 p-4 rounded-xl shadow-xl border bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white transition-all duration-300"
        >
          <div className="shrink-0 mt-0.5">
            {t.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
            {t.type === 'copy' && <Copy className="w-5 h-5 text-indigo-500" />}
            {t.type === 'info' && <Info className="w-5 h-5 text-blue-500" />}
          </div>

          <div className="flex-1 text-sm">
            <p className="font-semibold text-slate-900 dark:text-slate-100">{t.title}</p>
            {t.description && (
              <p className="text-slate-600 dark:text-slate-400 text-xs mt-0.5">{t.description}</p>
            )}
          </div>

          <button
            onClick={() => removeToast(t.id)}
            className="shrink-0 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-md transition-colors"
            aria-label="Dismiss notification"
          >
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}

