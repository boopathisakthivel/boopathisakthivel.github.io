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
    title: 'Lead Software Engineer',
    period: 'Apr 2024 — Present',
    location: 'Bengaluru, India',
    current: true,
    description:
      'Leading AI application engineering for enterprise banking platforms — designing RAG systems, multi-agent workflows and MCP-based tool integrations on top of regulated infrastructure.',
    highlights: [
      'Architecting RAG and multi-agent solutions for banking workflows',
      'Driving GenAI platform patterns and MCP-tool standards across teams',
      'Mentoring engineers on LLM application development and evaluation',
    ],
    tags: ['RAG', 'Multi-Agent', 'MCP', 'Enterprise AI', 'Java', 'JavaScript'],
  },
  {
    company: 'JPMorgan Chase & Co.',
    title: 'Software Developer III',
    period: 'Jan 2020 — Apr 2024',
    location: 'Bengaluru, India',
    description:
      'Built and scaled mission-critical financial services applications — owning components and integrations across modern web and Java backends in a global engineering organisation.',
    highlights: [
      'Delivered features on high-throughput banking systems used by millions',
      'Owned end-to-end design for key components and service integrations',
      'Collaborated with global teams across product, risk and compliance',
    ],
    tags: ['Java', 'Spring Boot', 'JavaScript', 'Microservices', 'REST APIs'],
  },
  {
    company: 'Cognizant',
    title: 'Associate — Product Developer',
    period: 'Sep 2018 — Dec 2019',
    location: 'India',
    description:
      'Worked as a product developer on enterprise client engagements, contributing to full-stack delivery for large global customers.',
    highlights: [
      'Implemented features across full-stack web applications',
      'Collaborated with onshore product and design teams',
      'Improved code quality and review practices on the team',
    ],
    tags: ['Java', 'JavaScript', 'Full Stack', 'Enterprise'],
  },
  {
    company: 'Skava',
    title: 'Lead Developer',
    period: 'Sep 2012 — Aug 2018',
    location: 'Chennai, India',
    description:
      'Grew from developer to component lead, integration lead and team lead — owning increasing scope on commerce platform components used by global retail brands.',
    highlights: [
      'Progression: Developer → Component Lead → Integration Lead → Team Lead',
      'Owned modules of the Skava commerce platform across releases',
      'Led a small team and mentored junior engineers',
    ],
    tags: ['JavaScript', 'Node.js', 'Java', 'Commerce', 'Leadership'],
  },
  {
    company: 'INPOTech',
    title: 'Intern',
    period: 'Nov 2011 — Jul 2012',
    location: 'India',
    description:
      'First professional engineering experience — building software fundamentals and shipping features as part of a small product team.',
    highlights: [
      'Contributed to in-house product development',
      'Learned production engineering practices on a small team',
    ],
    tags: ['Java', 'Web', 'Foundations'],
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
              13+ years across{' '}
              <span className="text-gradient">global engineering</span>
            </>
          }
          description="A career spanning product, commerce and financial services — with steady progression from developer into engineering leadership."
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
