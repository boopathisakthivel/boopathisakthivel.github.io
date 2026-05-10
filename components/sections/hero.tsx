'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles, Github, Linkedin, MapPin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-20"
    >
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 flex justify-center"
          >
            <Badge variant="soft" className="gap-2 px-4 py-1.5 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for Staff+ / Platform Architecture Roles
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Boopathi <span className="text-gradient-animated">Sakthivel</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Enterprise AI Platform Engineering · GenAI Systems · RAG · Multi-Agent Workflows
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-4 font-display text-lg font-medium text-foreground/90 sm:text-xl"
          >
            Designing the infrastructure that makes AI systems trustworthy at enterprise scale.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-2 text-sm text-muted-foreground/70"
          >
            14+ years · Banking · GenAI · Platform Architecture
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5">
              <Sparkles size={14} className="text-ai-purple" />
              Lead Software Engineer · Wells Fargo
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} className="text-ai-cyan" />
              Bengaluru, India
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap"
          >
            <Button asChild size="lg">
              <a href="#projects">
                View Projects <ArrowRight size={18} />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#writing">
                <Sparkles size={18} /> Read My Thinking
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="/resume/" target="_blank" rel="noreferrer">
                <Download size={18} /> Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <a
              href="https://www.linkedin.com/in/boopathisakthivel"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-muted-foreground transition-colors hover:border-white/25 hover:text-foreground"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/boopathisakthivel"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-muted-foreground transition-colors hover:border-white/25 hover:text-foreground"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:boopathisakthivel.in@gmail.com"
              aria-label="Email"
              className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-muted-foreground transition-colors hover:border-white/25 hover:text-foreground"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        >
          <div className="flex flex-col items-center gap-2 text-xs text-muted-foreground">
            <span>Scroll to explore</span>
            <div className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
