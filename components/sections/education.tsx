'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/section-heading';

const EDUCATION = [
  {
    degree: 'M.Phil in Computer Science',
    period: '2015 — 2017',
    description:
      'Advanced postgraduate study in computer science focused on software architecture, applied computing, and engineering foundations alongside ongoing industry experience.',
  },
  {
    degree: 'Master of Computer Applications (MCA)',
    period: '2009 — 2012',
    description:
      "Master's-level programme covering software engineering, systems programming, databases, and enterprise application development. During this period, contributed real software to the college examination department — building exam scheduling, student record management, and result-processing tools used by the institution. The first end-to-end systems ownership experience that shaped a 14-year engineering career.",
  },
];

export function Education() {
  return (
    <section id="education" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Education"
          title={
            <>
              Academic <span className="text-gradient">foundation</span>
            </>
          }
          description="Formal training in computer science and programming — anchored by real systems work during college that set the stage for 14+ years of engineering practice."
        />

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {EDUCATION.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Card className="h-full p-6 transition-all hover:-translate-y-1 hover:border-white/20">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-blue-500/20 ring-1 ring-white/10">
                  <GraduationCap className="h-6 w-6 text-fuchsia-300" />
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {e.period}
                </div>
                <h3 className="mt-1 font-display text-lg font-semibold tracking-tight">
                  {e.degree}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {e.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
