'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/section-heading';

const CONTACTS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'boopathisakthivel.in@gmail.com',
    href: 'mailto:boopathisakthivel.in@gmail.com',
    accent: 'from-fuchsia-500/20 to-purple-500/20',
    iconColor: 'text-fuchsia-300',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/boopathisakthivel',
    href: 'https://www.linkedin.com/in/boopathisakthivel',
    accent: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-300',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/boopathisakthivel',
    href: 'https://github.com/boopathisakthivel',
    accent: 'from-cyan-500/20 to-emerald-500/20',
    iconColor: 'text-cyan-300',
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something{' '}
              <span className="text-gradient">intelligent</span>
            </>
          }
          description="Open to Staff+ Engineering, AI Platform Architecture, and Technical Leadership opportunities — reach out via email or LinkedIn."
        />

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <Card className="h-full p-8">
              <h3 className="font-display text-2xl font-semibold tracking-tight">
                Get in touch
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                The fastest way to reach me is over email or LinkedIn. I usually
                respond within a business day.
              </p>

              <div className="mt-6 space-y-3">
                {CONTACTS.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.04]"
                  >
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br ${c.accent} ring-1 ring-white/10`}
                    >
                      <c.icon className={`h-5 w-5 ${c.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">
                        {c.label}
                      </div>
                      <div className="text-sm font-medium text-foreground/90">
                        {c.value}
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </a>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <a href="mailto:boopathisakthivel.in@gmail.com">
                    <Mail size={16} /> Email Boopathi
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href="https://www.linkedin.com/in/boopathisakthivel"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin size={16} /> LinkedIn
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="h-full p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 ring-1 ring-white/10">
                <MapPin className="h-6 w-6 text-cyan-300" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
                Based in Bengaluru
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Embassy Tech Village, Devarabeesanahalli
                <br />
                Bengaluru, Karnataka, India
              </p>

              <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Open to
                </div>
                <ul className="mt-2 space-y-1.5 text-sm text-foreground/85">
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-ai-purple" />
                    Principal Engineer roles
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-ai-blue" />
                    AI Platform Leadership
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-ai-cyan" />
                    GenAI engagements
                  </li>
                </ul>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
