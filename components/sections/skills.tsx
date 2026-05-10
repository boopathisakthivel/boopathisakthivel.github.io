'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Bot,
  Wrench,
  Code2,
  Server,
  Users,
  Database,
  Layers,
  Cpu,
  Cloud,
  Zap,
  GitBranch,
  Target,
  Lightbulb,
  Network,
} from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { Card } from '@/components/ui/card';

type SkillDomain = {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  iconColor: string;
  featured: string[];
  tags: string[];
};

const DOMAINS: SkillDomain[] = [
  {
    title: 'GenAI & AI Systems',
    subtitle: 'Primary focus area',
    icon: Brain,
    accent: 'from-fuchsia-500/20 to-purple-500/20',
    iconColor: 'text-fuchsia-400',
    featured: [
      'Retrieval-Augmented Generation (RAG)',
      'Multi-Agent Orchestration (A2A)',
      'Model Context Protocol (MCP)',
      'LLM Evaluation & Guardrails',
      'Vector Search & Embeddings',
    ],
    tags: ['LangChain', 'LlamaIndex', 'Agents', 'Prompt Eng', 'Vector DB', 'FastAPI'],
  },
  {
    title: 'Python & Engineering',
    subtitle: 'Core language — AI backends',
    icon: Code2,
    accent: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
    featured: [
      'Python · FastAPI · LangChain',
      'Java · Spring Boot',
      'TypeScript · React / Next.js',
      'Microservices & REST APIs',
      'Cloud (AWS · GCP)',
    ],
    tags: ['Python', 'Java', 'TypeScript', 'FastAPI', 'React', 'Spring Boot', 'AWS'],
  },
  {
    title: 'Leadership & Strategy',
    subtitle: 'Platform architecture & leadership',
    icon: Target,
    accent: 'from-purple-500/20 to-fuchsia-500/20',
    iconColor: 'text-purple-400',
    featured: [
      'Platform Architecture & Vision',
      'Engineering Standards Setting',
      'Cross-team Technical Influence',
      'Mentoring Senior Engineers',
      'Integration Lead · Team Lead',
    ],
    tags: ['Technical Strategy', 'Architecture', 'Standards', 'Mentoring', 'Delivery'],
  },
];

const QUICK_CHIPS = [
  { label: 'RAG', icon: Brain },
  { label: 'Agents', icon: Bot },
  { label: 'MCP', icon: Wrench },
  { label: 'Python', icon: Code2 },
  { label: 'LangChain', icon: Layers },
  { label: 'Java', icon: Cpu },
  { label: 'APIs', icon: Server },
  { label: 'Microservices', icon: Network },
  { label: 'Vector DB', icon: Database },
  { label: 'CI/CD', icon: GitBranch },
  { label: 'AWS', icon: Cloud },
  { label: 'GenAI', icon: Zap },
  { label: 'Platform', icon: Lightbulb },
  { label: 'Leadership', icon: Users },
];

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              Platform &{' '}
              <span className="text-gradient">AI Engineering</span>
            </>
          }
          description="Enterprise AI platforms · Regulated banking systems · Architecture leadership"
        />

        {/* 3-column domain cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {DOMAINS.map((domain, di) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: di * 0.1 }}
              >
                <Card className={`h-full bg-gradient-to-br p-6 ${domain.accent}`}>
                  {/* Header */}
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-black/20 ring-1 ring-white/10">
                      <Icon className={`h-6 w-6 ${domain.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold tracking-tight leading-tight">
                        {domain.title}
                      </h3>
                      <p className="text-[11px] text-muted-foreground">{domain.subtitle}</p>
                    </div>
                  </div>

                  {/* Competency list */}
                  <ul className="mb-4 space-y-1.5">
                    {domain.featured.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[13px] text-foreground/85">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-ai-cyan" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Tag chips */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.07]">
                    {domain.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/[0.06] px-2.5 py-0.5 text-[11px] font-medium text-foreground/70 border border-white/[0.08]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Quick-scan chip cloud */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <div className="mb-4 text-center text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            Tech Stack
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {QUICK_CHIPS.map((c) => {
              const CIcon = c.icon;
              return (
                <div
                  key={c.label}
                  className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-foreground/75 transition-colors hover:border-white/25 hover:text-foreground"
                >
                  <CIcon className="h-3.5 w-3.5 text-ai-cyan group-hover:text-ai-purple transition-colors" />
                  {c.label}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

