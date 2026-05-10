'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Bot, Brain, Building2, Search, Wrench } from 'lucide-react';
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
    category: 'GenAI · RAG',
    description:
      'Production-grade Retrieval-Augmented Generation platform for banking knowledge workflows — combining hybrid retrieval, evaluation harnesses, and guardrails for regulated content.',
    outcomes: [
      'Scaled retrieval over millions of internal documents',
      'Reduced grounding errors via hybrid search and re-ranking',
      'Standardised evaluation across multiple LLM backends',
    ],
    tags: ['RAG', 'Vector Search', 'LLM Eval', 'Java', 'Python'],
    icon: Brain,
    accent: 'from-fuchsia-500/20 to-purple-500/20',
  },
  {
    title: 'Multi-Agent Workflow Orchestrator',
    category: 'GenAI · Agents',
    description:
      'Agent-to-agent (A2A) orchestration framework with planner / executor / critic loops, tool routing, and observability — used to automate multi-step internal workflows.',
    outcomes: [
      'Encoded SOPs as agent graphs with deterministic fallbacks',
      'Pluggable tool registry for safe enterprise integrations',
      'Transparent traces for debugging and audit',
    ],
    tags: ['Multi-Agent', 'A2A', 'ADK', 'Orchestration', 'Observability'],
    icon: Bot,
    accent: 'from-purple-500/20 to-blue-500/20',
  },
  {
    title: 'MCP Tool Suite for Enterprise Apps',
    category: 'GenAI · Tooling',
    description:
      'Set of Model Context Protocol (MCP) servers exposing internal data sources and back-office systems as first-class tools for any MCP-compatible LLM client.',
    outcomes: [
      'Standardised LLM access to enterprise systems via MCP',
      'Built reusable patterns for auth, schema and rate-limiting',
      'Cut integration time for new agent use-cases significantly',
    ],
    tags: ['MCP', 'Tools', 'TypeScript', 'API Design', 'Integrations'],
    icon: Wrench,
    accent: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'High-Throughput Banking Services',
    category: 'Financial Services',
    description:
      'Mission-critical microservices powering banking customer journeys at JPMorgan Chase — owning components, integrations, and scale across regions.',
    outcomes: [
      'Owned end-to-end design for key components',
      'Improved reliability and observability across services',
      'Drove API and data contracts for cross-team integrations',
    ],
    tags: ['Java', 'Spring Boot', 'Microservices', 'REST', 'Reliability'],
    icon: Building2,
    accent: 'from-cyan-500/20 to-emerald-500/20',
  },
  {
    title: 'Commerce Platform Modules',
    category: 'Commerce · Leadership',
    description:
      'Owned modules of the Skava commerce platform serving global retail brands — progressed from developer to component, integration and team lead across releases.',
    outcomes: [
      'Delivered platform features used by Tier-1 retailers',
      'Led integrations with partner systems and clients',
      'Mentored engineers and set delivery practices',
    ],
    tags: ['JavaScript', 'Node.js', 'Java', 'Commerce', 'Leadership'],
    icon: Search,
    accent: 'from-emerald-500/20 to-cyan-500/20',
  },
  {
    title: 'AI Chatbot & Knowledge Apps',
    category: 'GenAI · Knowledge',
    description:
      'Earlier work on chatbot and documentation experiences — including a Dialogflow-powered AI Chatbot and a static knowledge portal with full-text search.',
    outcomes: [
      'Built NLU-driven chatbot for support workflows',
      'Designed search index with stemmed token store',
      'Hands-on experience that informs current GenAI work',
    ],
    tags: ['NLU', 'Dialogflow', 'Search', 'JavaScript'],
    icon: Brain,
    accent: 'from-fuchsia-500/20 to-blue-500/20',
    link: {
      label: 'GitHub',
      href: 'https://github.com/boopathisakthivel',
    },
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
          description="A snapshot of GenAI, platform and financial-services work — focused on production-grade systems, not toys."
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
