'use client';

import { motion } from 'framer-motion';
import { Brain, Building2, Layers, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/section-heading';

const HIGHLIGHTS = [
  {
    icon: Brain,
    title: 'AI Platform Architecture',
    description: 'RAG platforms · Agent orchestration · MCP patterns',
    accent: 'from-fuchsia-500/20 to-purple-500/20',
    iconColor: 'text-fuchsia-400',
  },
  {
    icon: Building2,
    title: 'Financial Services Domain',
    description: '14+ years in banking — resilient, auditable systems',
    accent: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: Layers,
    title: 'Systems Thinking at Scale',
    description: 'Systems thinking: data, services, UI — API & contracts',
    accent: 'from-cyan-500/20 to-emerald-500/20',
    iconColor: 'text-cyan-400',
  },
  {
    icon: TrendingUp,
    title: 'Architecture Leadership',
    description: 'Platform scope: technical strategy, standards, and engineering enablement',
    accent: 'from-purple-500/20 to-fuchsia-500/20',
    iconColor: 'text-purple-400',
  },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              Enterprise platform engineering,{' '}
              <span className="text-gradient">AI systems depth</span>
            </>
          }
          description="Lead Software Engineer with 14+ years of experience building enterprise platforms across banking, commerce, and AI systems. Currently focused on GenAI platform architecture and developer experience tooling — RAG integrations, multi-agent orchestration, MCP tooling, and AI-augmented SDLC workflows. Experience spans frontend systems, backend services, developer platforms, and GenAI architectures — with a strong focus on scalable design, regulated environments, and engineering enablement."
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <Card className="h-full p-6 flex flex-col gap-5">
              {/* Role */}
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Current Role</div>
                <div className="font-display text-lg font-semibold text-foreground">Lead Software Engineer</div>
                <div className="text-sm text-muted-foreground">Wells Fargo · AI Platform · Bengaluru</div>
              </div>

              {/* Domains */}
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Domains</div>
                <div className="flex flex-wrap gap-1.5">
                  {['GenAI / RAG', 'Multi-Agent', 'MCP', 'Banking', 'Platform Arch'].map((d) => (
                    <span key={d} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-xs text-foreground/80">{d}</span>
                  ))}
                </div>
              </div>

              {/* Timeline snapshot */}
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Journey</div>
                <div className="space-y-1.5 text-xs text-muted-foreground">
                  {[
                    { y: '2009–11', t: 'College exam systems (first ownership)' },
                    { y: '2011–12', t: 'Startup internship · Coimbatore' },
                    { y: '2012–18', t: 'Skava · Dev → Team Lead' },
                    { y: '2020–24', t: 'JPMorgan Chase · Sr. Engineer' },
                    { y: '2024 →', t: 'Wells Fargo · AI Platform' },
                  ].map(({ y, t }) => (
                    <div key={y} className="flex items-start gap-2">
                      <span className="w-14 flex-none font-mono text-[10px] text-muted-foreground/60 pt-0.5">{y}</span>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Open to */}
              <div className="mt-auto rounded-lg border border-fuchsia-500/20 bg-fuchsia-500/5 px-4 py-3">
                <div className="text-[10px] uppercase tracking-widest text-fuchsia-400/70 mb-0.5">Open To</div>
                <div className="font-display font-semibold text-gradient">Staff+ / Platform Architecture</div>
                <div className="text-xs text-muted-foreground mt-0.5">Architecture ownership · Engineering enablement</div>
              </div>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="group h-full p-6 transition-all hover:-translate-y-1 hover:border-white/20">
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${h.accent} ring-1 ring-white/10`}
                  >
                    <h.icon className={`h-6 w-6 ${h.iconColor}`} />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-semibold tracking-tight">
                    {h.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {h.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {[
            { value: '14+', label: 'Years of Experience' },
            { value: '5', label: 'Companies' },
            { value: '4', label: 'Leadership Roles' },
            { value: '10+', label: 'Enterprise Systems' },
          ].map((s) => (
            <Card key={s.label} className="p-6 text-center">
              <div className="font-display text-3xl font-bold sm:text-4xl">
                <span className="text-gradient">{s.value}</span>
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
