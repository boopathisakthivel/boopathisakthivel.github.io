'use client';

import { motion } from 'framer-motion';
import { Brain, Building2, Layers, Lightbulb, Mail, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/section-heading';

type Article = {
  title: string;
  summary: string;
  topic: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  iconColor: string;
  tag: string;
};

const ARTICLES: Article[] = [
  {
    title: 'Why RAG is a Product Problem, Not a Retrieval Problem',
    summary:
      'Retrieval quality is ultimately a UX and product design challenge. The vector search is the easy part — getting the right chunk to the right user in the right context is where most enterprise RAG systems fail.',
    topic: 'AI Systems · RAG',
    icon: Brain,
    accent: 'from-fuchsia-500/15 to-purple-500/15',
    iconColor: 'text-fuchsia-400',
    tag: 'AI Platform',
  },
  {
    title: 'The MCP Pattern Nobody Talks About',
    summary:
      'Everyone is building MCP tool servers. Few are thinking about governance at the tool-contract layer — auth boundaries, schema enforcement, and rate-limiting as first-class concerns.',
    topic: 'GenAI · Architecture',
    icon: Layers,
    accent: 'from-purple-500/15 to-blue-500/15',
    iconColor: 'text-purple-400',
    tag: 'Platform Engineering',
  },
  {
    title: 'What Banking Taught Me About AI Reliability',
    summary:
      'Regulated environments are a forcing function for good engineering. Constraints around audit, compliance, and explainability in banking translate directly into better AI system design patterns.',
    topic: 'Engineering · GenAI',
    icon: Building2,
    accent: 'from-blue-500/15 to-cyan-500/15',
    iconColor: 'text-blue-400',
    tag: 'Financial Services',
  },
  {
    title: 'From Lead to Principal: What Actually Changes',
    summary:
      'It is not about technical depth — you already have that. It is about decision scope, the radius of your influence, and how you make other engineers better without being in every room.',
    topic: 'Engineering Leadership',
    icon: TrendingUp,
    accent: 'from-cyan-500/15 to-emerald-500/15',
    iconColor: 'text-cyan-400',
    tag: 'Leadership',
  },
];

export function Writing() {
  return (
    <section id="writing" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Thinking"
          title={
            <>
              Perspectives on AI,{' '}
              <span className="text-gradient">platforms &amp; engineering</span>
            </>
          }
          description="Ideas and theses on building AI systems at enterprise scale, platform architecture, and the engineering leadership journey — things I believe and am writing about."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {ARTICLES.map((article, i) => {
            const Icon = article.icon;
            return (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card
                  className={`group flex h-full flex-col bg-gradient-to-br p-6 transition-all hover:-translate-y-1 hover:border-white/20 ${article.accent}`}
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-black/20 ring-1 ring-white/10">
                      <Icon className={`h-5 w-5 ${article.iconColor}`} />
                    </div>
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {article.tag}
                    </span>
                  </div>

                  <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60 mb-2">
                    {article.topic}
                  </div>

                  <h3 className="font-display text-base font-semibold leading-snug tracking-tight sm:text-lg">
                    {article.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {article.summary}
                  </p>

                  <div className="mt-5 border-t border-white/[0.06] pt-4 flex items-center gap-2">
                    <Lightbulb className="h-3.5 w-3.5 text-muted-foreground/40" />
                    <span className="text-xs text-muted-foreground/50 italic">Perspective · writing in progress</span>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 text-center"
        >
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            These perspectives are shaping into longer essays on enterprise AI, platform engineering, and the Principal → Founder journey.{' '}
            <a
              href="mailto:boopathisakthivel.in@gmail.com"
              className="inline-flex items-center gap-1 font-medium text-foreground/80 underline underline-offset-4 hover:text-foreground"
            >
              <Mail className="inline h-3.5 w-3.5" />
              {' '}I&apos;d love to talk if any of these resonate.
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
