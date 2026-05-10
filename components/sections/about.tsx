'use client';

import { motion } from 'framer-motion';
import { Brain, Building2, Layers, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/section-heading';

const HIGHLIGHTS = [
  {
    icon: Brain,
    title: 'AI Application Development',
    description:
      'Designing and shipping production-grade RAG pipelines, multi-agent workflows, and MCP-tool integrations that turn LLMs into reliable enterprise systems.',
    accent: 'from-fuchsia-500/20 to-purple-500/20',
    iconColor: 'text-fuchsia-400',
  },
  {
    icon: Building2,
    title: 'Financial Services Domain',
    description:
      'Decade-plus career across global banking — Wells Fargo and JPMorgan Chase — translating regulatory, risk and high-throughput requirements into resilient software.',
    accent: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: Layers,
    title: 'Full-Stack Engineering',
    description:
      'Polyglot engineer fluent in Java and JavaScript ecosystems, comfortable owning architecture from data layer to UI for high-scale enterprise applications.',
    accent: 'from-cyan-500/20 to-emerald-500/20',
    iconColor: 'text-cyan-400',
  },
  {
    icon: TrendingUp,
    title: 'Engineering Leadership',
    description:
      'Career arc from developer to component lead, integration lead and team lead — coaching engineers, owning delivery, and driving technical direction.',
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
              Engineer turned <span className="text-gradient">AI builder</span>
            </>
          }
          description="13+ years building enterprise-grade software in financial services — now focused on shipping AI applications that combine reasoning, retrieval, and tool use at scale."
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <Card className="h-full p-8">
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  I&apos;m a Lead Software Engineer at{' '}
                  <span className="font-medium text-foreground">Wells Fargo</span>{' '}
                  with over a decade of experience designing and delivering
                  enterprise software at global financial institutions.
                </p>
                <p>
                  My current focus is the intersection of{' '}
                  <span className="font-medium text-foreground">
                    GenAI engineering and platform engineering
                  </span>{' '}
                  — building Retrieval-Augmented Generation systems, multi-agent
                  workflows, and MCP-based tool integrations that bring LLM
                  capabilities into regulated, high-stakes environments.
                </p>
                <p>
                  Across stints at Wells Fargo, JPMorgan Chase, Cognizant and
                  Skava, I&apos;ve grown from developer to lead — owning
                  components, integrations and ultimately full delivery streams
                  for some of the largest enterprises in banking and commerce.
                </p>
                <p className="text-foreground">
                  Targeting <span className="text-gradient font-medium">Principal Engineer</span> roles where I can shape AI platform strategy and ship production-grade GenAI systems.
                </p>
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
            { value: '13+', label: 'Years of Experience' },
            { value: '5', label: 'Companies' },
            { value: '4', label: 'Leadership Roles' },
            { value: '∞', label: 'Lines of Code' },
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
