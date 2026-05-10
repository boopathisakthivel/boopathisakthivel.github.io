'use client';

import { motion } from 'framer-motion';
import {
  Telescope,
  Layers3,
  BrainCircuit,
  Users2,
  CheckCircle2,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SectionHeading } from '@/components/section-heading';

type Pillar = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  evidence: string;
  status: 'Proven' | 'Leading' | 'Advancing';
  accent: string;
  iconColor: string;
};

const PILLARS: Pillar[] = [
  {
    icon: Telescope,
    title: 'Technical Vision',
    evidence: 'Driving reusable GenAI platform patterns, engineering standards, and AI integration approaches across multiple engineering teams at Wells Fargo.',
    status: 'Proven',
    accent: 'from-fuchsia-500/15 to-purple-500/15',
    iconColor: 'text-fuchsia-400',
  },
  {
    icon: Layers3,
    title: 'Platform Architecture',
    evidence: 'Designed reusable RAG, MCP-tool, and A2A orchestration patterns adopted across multiple engineering teams.',
    status: 'Proven',
    accent: 'from-purple-500/15 to-blue-500/15',
    iconColor: 'text-purple-400',
  },
  {
    icon: BrainCircuit,
    title: 'AI Systems Depth',
    evidence: 'Production RAG pipelines, multi-agent frameworks, LLM eval harnesses in regulated banking.',
    status: 'Proven',
    accent: 'from-blue-500/15 to-cyan-500/15',
    iconColor: 'text-blue-400',
  },
  {
    icon: Users2,
    title: 'Team Amplification',
    evidence: '6-year lead arc: Component Lead → Integration Lead → Team Lead at Skava. Mentoring senior engineers and setting standards at Wells Fargo.',
    status: 'Proven',
    accent: 'from-cyan-500/15 to-emerald-500/15',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Zap,
    title: 'Product Sense',
    evidence: 'Translating deep platform engineering into tools developers actually adopt — internal DX tooling, API-first design, and zero-to-one builder instinct.',
    status: 'Advancing',
    accent: 'from-fuchsia-500/15 to-cyan-500/15',
    iconColor: 'text-fuchsia-300',
  },
];

const STATUS_STYLE: Record<Pillar['status'], string> = {
  Proven: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
  Leading: 'bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/25',
  Advancing: 'bg-amber-500/15 text-amber-400 border-amber-500/25',
};

const JOURNEY = [
  { year: '2009–11', label: 'Systems Builder', sub: 'College exam systems' },
  { year: '2011–12', label: 'Industry Intern', sub: 'Coimbatore startup' },
  { year: '2012–18', label: 'Developer → Lead', sub: 'Skava (6 yrs)' },
  { year: '2018–20', label: 'Product Dev', sub: 'Cognizant' },
  { year: '2020–24', label: 'Senior Engineer', sub: 'JPMorgan Chase' },
  { year: '2024–Now', label: 'AI Platform Engineering', sub: 'Wells Fargo', current: true },
  { year: '→ Now', label: 'Builder Mode', sub: 'GenAI × Enterprise', target: true },
];

export function PeReadiness() {
  return (
    <section id="pe-readiness" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Engineering Philosophy"
          title={
            <>
              How I build —{' '}
              <span className="text-gradient">and why it scales</span>
            </>
          }
          description="14 years of deliberate progression across platform engineering, AI systems, and cross-team influence — with evidence at every level. Now extending into builder and product space."
        />

        {/* Journey strip */}
        <div className="mx-auto mb-16 max-w-5xl overflow-x-auto">
          <div className="flex min-w-max items-center gap-0 pt-6 pb-2">
            {JOURNEY.map((step, i) => (
              <div key={step.year} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex flex-col items-center"
                >
                  <div
                    className={`relative flex h-10 w-10 items-center justify-center rounded-full ring-2 ${
                      step.target
                        ? 'bg-ai-gradient ring-fuchsia-400/60 shadow-lg shadow-fuchsia-500/30'
                        : step.current
                        ? 'bg-ai-gradient ring-cyan-400/60 shadow-lg shadow-cyan-500/20'
                        : 'bg-white/[0.06] ring-white/10'
                    }`}
                  >
                    {step.target ? (
                      <Zap className="h-4 w-4 text-white" />
                    ) : step.current ? (
                      <TrendingUp className="h-4 w-4 text-white" />
                    ) : (
                      <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                    )}
                    {step.current && (
                      <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-background animate-ping opacity-75" />
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <div
                      className={`text-[11px] font-semibold ${
                        step.target ? 'text-fuchsia-400' : step.current ? 'text-cyan-400' : 'text-foreground/70'
                      }`}
                    >
                      {step.label}
                    </div>
                    <div className="text-[10px] text-muted-foreground">{step.year}</div>
                    <div className="text-[10px] text-muted-foreground/60">{step.sub}</div>
                  </div>
                </motion.div>
                {i < JOURNEY.length - 1 && (
                  <div
                    className={`mx-1 h-px w-10 sm:w-14 ${
                      i < JOURNEY.length - 2 ? 'bg-white/10' : 'bg-gradient-to-r from-white/10 to-fuchsia-500/40'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* PE pillars grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Card
                  className={`h-full bg-gradient-to-br p-5 transition-all hover:-translate-y-1 hover:border-white/20 ${pillar.accent}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-black/20 ring-1 ring-white/10">
                      <Icon className={`h-5 w-5 ${pillar.iconColor}`} />
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${STATUS_STYLE[pillar.status]}`}
                    >
                      {pillar.status}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {pillar.evidence}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
