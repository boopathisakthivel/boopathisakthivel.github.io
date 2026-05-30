'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Bot, Brain, Building2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SectionHeading } from '@/components/section-heading';

type Project = {
  title: string;
  category: string;
  description: string;
  outcomes: string[];
  tags: string[];
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  link?: { label: string; href: string };
};

const PROJECTS: Project[] = [
  {
    title: 'Enterprise RAG Platform',
    category: 'GenAI · AI Platform Engineering',
    description: 'RAG-powered developer tooling for internal engineering platforms — governed LLM integrations, evaluation pipelines, and reusable patterns for AI-augmented SDLC workflows.',
    outcomes: [
      'Evaluation harnesses and guardrails for governed LLM grounding',
      'Reusable RAG patterns enabling consistent AI integration across teams',
    ],
    tags: ['RAG', 'Vector Search', 'LLM Eval', 'Java', 'Python'],
    icon: Brain,
    accent: 'from-fuchsia-500/20 to-purple-500/20',
  },
  {
    title: 'Multi-Agent Workflow Orchestrator',
    category: 'GenAI · Agent Systems',
    description: 'Agent orchestration framework with planner/executor/critic loops, observability, and governance for enterprise AI workflows.',
    outcomes: [
      'Agent graphs with deterministic fallbacks and audit logging',
      'Pluggable, governed tool registry with schema enforcement',
    ],
    tags: ['Multi-Agent', 'A2A', 'Orchestration', 'Observability'],
    icon: Bot,
    accent: 'from-purple-500/20 to-blue-500/20',
  },
  {
    title: 'High-Throughput Banking Services',
    category: 'Financial Services · Platform Engineering',
    description: 'Mission-critical microservices for banking customer journeys — owning component design, API contracts, and cross-team integrations at JPMorgan Chase.',
    outcomes: [
      'Owned end-to-end design and API contracts for key service components',
      'Improved reliability and observability across distributed banking services',
    ],
    tags: ['Java', 'Spring Boot', 'Microservices', 'API Design', 'Reliability'],
    icon: Building2,
    accent: 'from-cyan-500/20 to-emerald-500/20',
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title={
            <>
              Selected <span className="text-gradient">work</span>
            </>
          }
          description="Open source tooling, GenAI platforms, financial services engineering, and enterprise systems — all production-grade."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
            >
              <Card className="group flex h-full flex-col p-6 transition-all hover:-translate-y-1 hover:border-white/20">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${p.accent} ring-1 ring-white/10`}
                  >
                    <p.icon className="h-5 w-5 text-white/90" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    {p.category}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {p.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {p.outcomes.map((o) => (
                    <li
                      key={o}
                      className="flex items-start gap-2 text-sm text-foreground/85"
                    >
                      <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-ai-cyan" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="text-[11px]">
                      {t}
                    </Badge>
                  ))}
                </div>

                {p.link && (
                  <div className="mt-5 border-t border-white/[0.06] pt-4">
                    <a
                      href={p.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/90 hover:text-foreground"
                    >
                      {p.link.label}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/boopathisakthivel"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2 text-sm font-medium text-foreground/90 transition-colors hover:border-white/25 hover:bg-white/[0.06]"
          >
            See more on GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
