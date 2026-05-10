'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SectionHeading } from '@/components/section-heading';

type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  current?: boolean;
  description: string;
  highlights: string[];
  tags: string[];
};

const ROLES: Role[] = [
  {
    company: 'Wells Fargo',
    title: 'Lead Software Engineer — AI Platform',
    period: 'Apr 2024 — Present',
    location: 'Bengaluru, India',
    current: true,
    description: 'Leading GenAI platform architecture and developer experience tooling for internal engineering platforms — RAG integrations, agent orchestration, MCP tooling patterns, and AI-augmented SDLC workflows.',
    highlights: [
      'Designed reusable RAG and AI workflow patterns for internal developer tooling, adopted across multiple engineering teams',
      'Standardised MCP integration approaches enabling governed LLM access across internal platforms',
      'Built auditable A2A orchestration workflows improving AI-augmented SDLC developer experience',
    ],
    tags: ['RAG', 'Multi-Agent', 'MCP', 'Platform Architecture', 'GenAI', 'Java', 'TypeScript'],
  },
  {
    company: 'JPMorgan Chase & Co.',
    title: 'Software Developer III',
    period: 'Jan 2020 — Apr 2024',
    location: 'Bengaluru, India',
    description: 'Owned high-throughput banking services and cross-team integration contracts supporting product, compliance, and risk workflows — with focus on API governance, resiliency, and observability.',
    highlights: [
      'Defined API and data contracts adopted across product, risk & compliance teams',
      'Improved service reliability, observability, and operational resilience for microservices',
      'Led integration ownership and troubleshooting across distributed banking systems',
    ],
    tags: ['Java', 'Spring Boot', 'Microservices', 'System Design', 'API Contracts', 'Reliability'],
  },
  {
    company: 'Cognizant · Client: Intuit',
    title: 'Associate — Product Developer',
    period: 'Sep 2018 — Dec 2019',
    location: 'India',
    description: 'Full-stack product engineering for Intuit (TurboTax / QuickBooks ecosystem) via Cognizant — focused on feature delivery, quality, and architecture.',
    highlights: [
      'Led full-stack feature delivery on Intuit product workflows',
      'Introduced code-review and quality practices across the team',
    ],
    tags: ['Java', 'JavaScript', 'Full Stack', 'Fintech', 'Product Engineering'],
  },
  {
    company: 'Skava',
    title: 'Lead Developer (Developer → Team Lead)',
    period: 'Sep 2012 — Aug 2018',
    location: 'Chennai, India',
    description: '6-year progression on a global commerce platform — component & integration ownership.',
    highlights: [
      'Owned core commerce modules used by global retailers',
      'Led integrations, mentoring and hiring',
      'Defined component contracts across releases',
    ],
    tags: ['JavaScript', 'Node.js', 'Java', 'Platform Engineering', 'Team Leadership', 'Commerce'],
  },
  {
    company: 'INPOTech',
    title: 'Software Engineering Intern',
    period: 'Nov 2011 — Jul 2012',
    location: 'Coimbatore, India',
    description: 'Internship at Coimbatore product startup — first production engineering experience.',
    highlights: [
      'Shipped features in a small product team',
      'Learned production engineering practices',
    ],
    tags: ['Java', 'Web Development', 'Product Startup', 'Coimbatore'],
  },
  {
    company: 'College Examination Department',
    title: 'Student Developer (Academic Contribution)',
    period: '2009 — 2011',
    location: 'College, India',
    description: 'Student developer — built exam scheduling and result-processing tools used by the college.',
    highlights: [
      'Delivered exam scheduling and student record tools',
      'First end-to-end systems ownership',
    ],
    tags: ['Systems Design', 'Java', 'Academic', 'Early Career'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              Engineering{' '}
              <span className="text-gradient">career history</span>
            </>
          }
          description="From college-era systems contributions and a Coimbatore startup, through six years at Skava and global financial institutions, to architecting AI platforms at Wells Fargo — consistent progression toward architectural ownership and technical leadership."
        />

        <div className="relative mx-auto max-w-5xl">
          <div
            aria-hidden
            className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-ai-purple via-ai-blue to-ai-cyan opacity-60 md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-10">
            {ROLES.map((role, i) => {
              const isLeft = i % 2 === 1;
              return (
              <motion.div
                key={`${role.company}-${role.period}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="relative md:grid md:grid-cols-2 md:gap-12"
              >
                <div className="absolute left-4 top-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-ai-gradient ring-4 ring-background md:left-1/2">
                  <div className="absolute inset-0 animate-ping rounded-full bg-ai-purple opacity-40" />
                </div>

                {!isLeft && <div className="hidden md:block" />}

                <div className={`ml-10 md:ml-0 ${isLeft ? 'md:pr-2' : 'md:pl-2'}`}>
                  <Card className="p-6 transition-all hover:-translate-y-1 hover:border-white/20">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      {role.current && (
                        <Badge variant="gradient" className="text-[10px]">
                          Current
                        </Badge>
                      )}
                      <span className="font-mono text-xs text-muted-foreground">
                        {role.period}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-semibold tracking-tight">
                      {role.title}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5 font-medium text-foreground/80">
                        <Briefcase className="h-3.5 w-3.5 text-ai-purple" />
                        {role.company}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-ai-cyan" />
                        {role.location}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {role.description}
                    </p>

                    {role.highlights.length > 0 && (
                      <ul className="mt-4 space-y-1.5">
                        {role.highlights.map((h, hi) => (
                          <li
                            key={hi}
                            className="flex items-start gap-2 text-sm text-foreground/85"
                          >
                            <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-ai-cyan" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {role.tags.map((t) => (
                        <Badge key={t} variant="secondary" className="text-[11px]">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
