import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-10">
      <div className="container flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div className="text-sm text-muted-foreground">
          <span className="font-display font-semibold text-foreground/90">
            Boopathi Sakthivel
          </span>{' '}
          · AI Platform Engineering · Enterprise Systems ·{' '}
          <span suppressHydrationWarning>{new Date().getFullYear()}</span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/boopathisakthivel"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 bg-white/[0.03] p-2 text-muted-foreground transition-colors hover:border-white/25 hover:text-foreground"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://github.com/boopathisakthivel"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/10 bg-white/[0.03] p-2 text-muted-foreground transition-colors hover:border-white/25 hover:text-foreground"
          >
            <Github size={16} />
          </a>
          <a
            href="mailto:boopathisakthivel.in@gmail.com"
            aria-label="Email"
            className="rounded-full border border-white/10 bg-white/[0.03] p-2 text-muted-foreground transition-colors hover:border-white/25 hover:text-foreground"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
