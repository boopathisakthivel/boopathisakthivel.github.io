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
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SectionHeading } from '@/components/section-heading';

type Skill = { name: string; level: number };
type SkillGroup = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  accent: string;
  skills: Skill[];
};

const TOP_SKILLS = [
  'Retrieval-Augmented Generation (RAG)',
  'A2A (Agent-to-Agent)',
  'ADK (Agent Development Kit)',
  'Multi-Agent Systems',
  'MCP Tools',
  'Scalable AI Solutions',
];

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'GenAI & Agents',
    icon: Brain,
    description: 'LLM applications, retrieval, and agentic workflows',
    accent: 'from-fuchsia-500/20 to-purple-500/20',
    skills: [
      { name: 'Retrieval-Augmented Generation', level: 95 },
      { name: 'Multi-Agent Systems', level: 90 },
      { name: 'MCP (Model Context Protocol)', level: 88 },
      { name: 'A2A & Agent Development Kit', level: 85 },
      { name: 'Prompt Engineering', level: 90 },
      { name: 'Vector Databases', level: 85 },
    ],
  },
  {
    title: 'Languages & Frameworks',
    icon: Code2,
    description: 'Polyglot full-stack engineering',
    accent: 'from-blue-500/20 to-cyan-500/20',
    skills: [
      { name: 'JavaScript / TypeScript', level: 95 },
      { name: 'Java', level: 92 },
      { name: 'Python', level: 85 },
      { name: 'React / Next.js', level: 90 },
      { name: 'Node.js', level: 90 },
      { name: 'Spring Boot', level: 85 },
    ],
  },
  {
    title: 'Platform & Data',
    icon: Server,
    description: 'Enterprise systems, APIs, data pipelines',
    accent: 'from-cyan-500/20 to-emerald-500/20',
    skills: [
      { name: 'Microservices Architecture', level: 90 },
      { name: 'REST & GraphQL APIs', level: 92 },
      { name: 'SQL & NoSQL Databases', level: 88 },
      { name: 'Event-Driven Systems', level: 85 },
      { name: 'CI/CD & DevOps', level: 82 },
      { name: 'Cloud (AWS / GCP)', level: 80 },
    ],
  },
  {
    title: 'Leadership',
    icon: Users,
    description: 'From component lead to team lead',
    accent: 'from-purple-500/20 to-fuchsia-500/20',
    skills: [
      { name: 'Team Leadership', level: 90 },
      { name: 'Integration Lead', level: 92 },
      { name: 'Component Ownership', level: 95 },
      { name: 'Mentoring & Coaching', level: 88 },
      { name: 'Cross-functional Collaboration', level: 90 },
      { name: 'Technical Strategy', level: 85 },
    ],
  },
];

const TECH_TAGS = [
  { name: 'LLMs', icon: Brain },
  { name: 'RAG', icon: Database },
  { name: 'Agents', icon: Bot },
  { name: 'MCP', icon: Wrench },
  { name: 'LangChain', icon: Layers },
  { name: 'Java', icon: Cpu },
  { name: 'JavaScript', icon: Code2 },
  { name: 'Spring Boot', icon: Server },
  { name: 'React', icon: Code2 },
  { name: 'Node.js', icon: Server },
  { name: 'Python', icon: Code2 },
  { name: 'AWS', icon: Cloud },
  { name: 'Microservices', icon: Layers },
  { name: 'REST APIs', icon: Server },
  { name: 'Vector DB', icon: Database },
];

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-foreground/90">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-ai-gradient"
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              Built for <span className="text-gradient">AI at scale</span>
            </>
          }
          description="A blend of GenAI specialisation, full-stack depth, and the leadership chops to ship in regulated enterprise environments."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Top Skills
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {TOP_SKILLS.map((s) => (
              <Badge key={s} variant="gradient" className="px-4 py-2 text-sm">
                {s}
              </Badge>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: gi * 0.08 }}
            >
              <Card className="h-full p-7">
                <div className="mb-6 flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${group.accent} ring-1 ring-white/10`}
                  >
                    <group.icon className="h-6 w-6 text-white/90" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight">
                      {group.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {group.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  {group.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      delay={i * 0.06 + 0.1}
                    />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Tech Stack
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {TECH_TAGS.map((t) => (
              <div
                key={t.name}
                className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-white/25 hover:bg-white/[0.06]"
              >
                <t.icon className="h-3.5 w-3.5 text-ai-cyan transition-colors group-hover:text-ai-purple" />
                {t.name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
