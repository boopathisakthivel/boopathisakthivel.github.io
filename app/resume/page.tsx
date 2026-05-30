'use client';

import { useEffect } from 'react';
import { Mail, Linkedin, Github, MapPin, Printer } from 'lucide-react';

export default function ResumePage() {
  useEffect(() => {
    document.title = 'Boopathi Sakthivel — Resume';
  }, []);

  return (
    <>
      {/* ── Floating action bar (screen-only) ─────────────────── */}
      <div className="fixed right-5 top-5 z-50 flex items-center gap-2 print:hidden">
        <a
          href="/"
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm hover:bg-gray-50 transition-colors"
        >
          ← Back
        </a>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 active:scale-95 transition-all"
        >
          <Printer size={14} />
          Print / Save PDF
        </button>
      </div>

      {/* ── PDF-viewer shell ────────────────────────────────────── */}
      <div className="min-h-screen bg-gray-200 py-14 px-4 print:p-0 print:bg-white">
        <main className="resume-page mx-auto max-w-[850px] bg-white px-12 py-10 text-gray-900 font-sans text-[13.5px] leading-relaxed shadow-2xl print:shadow-none print:max-w-full print:px-0 print:py-0">
        {/* ── Header ─────────────────────────────────────────────── */}
        <header className="border-b-2 border-indigo-600 pb-4 mb-5">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Boopathi Sakthivel</h1>
          <p className="mt-0.5 text-[14px] font-semibold text-indigo-600">
            Lead Software Engineer · AI Platform Engineering · Enterprise Systems
          </p>
          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-xs text-gray-500">
            <span className="flex items-center gap-1"><MapPin size={11} /> Bengaluru, India</span>
            <a href="mailto:boopathisakthivel.in@gmail.com" className="flex items-center gap-1 hover:text-indigo-600">
              <Mail size={11} /> boopathisakthivel.in@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/boopathisakthivel" className="flex items-center gap-1 hover:text-indigo-600">
              <Linkedin size={11} /> linkedin.com/in/boopathisakthivel
            </a>
            <a href="https://github.com/boopathisakthivel" className="flex items-center gap-1 hover:text-indigo-600">
              <Github size={11} /> github.com/boopathisakthivel
            </a>
          </div>
        </header>

        {/* ── Summary ────────────────────────────────────────────── */}
        <section className="mb-5">
          <h2 className="resume-section-title">Summary</h2>
          <p className="text-gray-700">
            Lead Software Engineer with 14+ years of experience building enterprise platforms across banking, commerce, and AI systems.
            Currently focused on GenAI platform engineering and developer experience tooling — including RAG integrations,
            multi-agent orchestration, MCP tooling, and AI-augmented SDLC workflows. Prior experience spans six years of progression from
            developer to team lead at Skava (e-commerce), product engineering at Intuit via Cognizant, senior engineering at JPMorgan Chase,
            and early systems contributions dating to 2009.
            Experienced across frontend, backend, platform engineering, and enterprise integration with strong focus on scalable design,
            developer enablement, and regulated environments.
          </p>
        </section>

        {/* ── Core Competencies ──────────────────────────────────── */}
        <section className="mb-5">
          <h2 className="resume-section-title">Core Competencies</h2>
          <div className="grid grid-cols-3 gap-x-4 gap-y-1 text-gray-700">
            {[
              'Platform Architecture',
              'RAG Systems Design',
              'Multi-Agent Orchestration',
              'MCP (Model Context Protocol)',
              'Technical Strategy & Vision',
              'Engineering Standards Setting',
              'Python / FastAPI / LangChain',
              'Java / Spring Boot',
              'JavaScript / TypeScript',
              'Microservices & REST APIs',
              'Team Lead & Mentoring',
              'Regulated Financial Systems',
            ].map((c) => (
              <div key={c} className="flex items-center gap-1.5 text-[12.5px]">
                <span className="h-1.5 w-1.5 flex-none rounded-full bg-indigo-500" />
                {c}
              </div>
            ))}
          </div>
        </section>

        {/* ── Professional Experience ────────────────────────────── */}
        <section className="mb-5">
          <h2 className="resume-section-title">Professional Experience</h2>

          <ResumeRole
            title="Lead Software Engineer — AI Platform"
            company="Wells Fargo"
            period="Apr 2024 — Present"
            location="Bengaluru, India"
            bullets={[
                'Designing GenAI platform capabilities and developer experience tooling for internal engineering platforms — RAG integrations, evaluation harnesses, and governed LLM patterns for AI-augmented SDLC workflows.',
                'Established reusable GenAI engineering patterns: MCP-tool integration approaches, A2A orchestration framework, and LLM evaluation workflows adopted across multiple engineering teams.',
                'Designed Agent-to-Agent (A2A) orchestration enabling deterministic, auditable multi-step AI workflow automation in regulated banking environments.',
                'Led technical direction for internal AI developer platform adoption; key technical reviewer and architecture escalation point.',
                'Mentoring senior engineers on AI system design, platform engineering practices, and production LLM evaluation.',
            ]}
              tags={['RAG', 'Multi-Agent', 'MCP', 'Python', 'Java', 'TypeScript', 'Developer Platforms']}
          />

          <ResumeRole
            title="Software Developer III"
            company="JPMorgan Chase & Co."
            period="Jan 2020 — Apr 2024"
            location="Bengaluru, India"
            bullets={[
                'Owned system design and API contracts for high-throughput banking services supporting product, compliance, and risk workflows.',
                'Defined data models and integration patterns adopted across multiple engineering teams; drove API governance and contract consistency.',
                'Improved service reliability, observability, and operational resilience across distributed microservices.',
                'Served as technical escalation for cross-team architecture and integration decisions in a global engineering organisation.',
              ]}
              tags={['Java', 'Spring Boot', 'Microservices', 'API Governance', 'System Design']}
          />

          <ResumeRole
            title="Associate — Product Developer"
            company="Cognizant · Client: Intuit"
            period="Sep 2018 — Dec 2019"
            location="India"
            bullets={[
              'Full-stack product engineering on Intuit product workflows (TurboTax / QuickBooks ecosystem).',
              'Contributed to architectural decisions with onshore product and design leads.',
              'Established code review standards and quality practices improving team output velocity.',
            ]}
            tags={['Java', 'JavaScript', 'Full Stack', 'Fintech', 'Product Engineering']}
          />

          <ResumeRole
            title="Lead Developer (Developer → Integration Lead → Team Lead)"
            company="Skava"
            period="Sep 2012 — Aug 2018"
            location="Chennai, India"
            bullets={[
              'Six-year progression from Software Developer to Component Lead, Integration Lead, and Team Lead on a global e-commerce platform.',
              'Owned architecture and delivery of core commerce platform modules used by major global retail brands.',
              'Defined integration patterns and component API contracts across multiple product releases.',
              'Built and mentored a team of engineers; drove technical hiring, onboarding, and career development.',
              'Represented engineering in cross-functional planning with product, QA, and enterprise clients.',
            ]}
            tags={['JavaScript', 'Node.js', 'Java', 'Platform Engineering', 'Team Lead']}
          />
        </section>

        {/* ── Pre-Career ─────────────────────────────────────────── */}
        <section className="mb-5">
          <h2 className="resume-section-title">Early Engineering Experience</h2>

          <ResumeRole
            title="Software Engineering Intern"
            company="INPOTech"
            period="Nov 2011 — Jul 2012"
            location="Coimbatore, India"
            bullets={[
              'First industry exposure at a Coimbatore product startup — shipped features in a production codebase and gained grounding in professional engineering practices.',
            ]}
            tags={['Java', 'Web Development']}
          />

          <div className="mb-4">
            <div className="flex flex-wrap items-baseline justify-between gap-x-2">
              <span className="font-semibold text-gray-800">Student Developer — College Examination Department</span>
              <span className="text-xs text-gray-400 italic">2009 — 2011</span>
            </div>
            <p className="mt-1 text-gray-600 text-[12.5px]">
              During Master&apos;s programme, built exam scheduling, student record management, and result-processing software used by the institution — first end-to-end systems ownership experience.
            </p>
          </div>
        </section>

        {/* ── Skills ─────────────────────────────────────────────── */}
        <section className="mb-5">
          <h2 className="resume-section-title">Technical Skills</h2>
          <div className="space-y-1.5 text-[12.5px]">
            <SkillRow label="Languages" value="Python · Java · JavaScript / TypeScript" />
            <SkillRow label="AI / ML" value="RAG · Multi-Agent Systems · MCP · LangChain · LlamaIndex · FastAPI · Vector DBs · Prompt Engineering · LLM Evaluation" />
            <SkillRow label="Frameworks" value="Spring Boot · React · Next.js · Node.js · FastAPI" />
            <SkillRow label="Architecture" value="Microservices · REST & GraphQL APIs · Event-Driven Systems · Platform Engineering" />
            <SkillRow label="Cloud & DevOps" value="AWS · GCP · CI/CD · Docker · Kubernetes" />
            <SkillRow label="Leadership" value="Technical Strategy · Engineering Standards · Team Lead · Mentoring · Cross-functional Influence" />
          </div>
        </section>

        {/* ── Education ──────────────────────────────────────────── */}
        <section className="mb-2">
          <h2 className="resume-section-title">Education</h2>
          <div className="space-y-2">
            <div className="flex flex-wrap items-baseline justify-between gap-x-2">
              <span className="font-semibold text-gray-800">M.Phil in Computer Science</span>
              <span className="text-xs text-gray-400">2015 — 2017</span>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                <span className="font-semibold text-gray-800">Master of Computer Applications (MCA)</span>
              <span className="text-xs text-gray-400">2009 — 2012</span>
            </div>
          </div>
        </section>
        </main>
      </div>

      <style jsx global>{`
        @media print {
          body { background: white !important; margin: 0 !important; }
          .resume-page {
            padding: 0 !important;
            max-width: 100% !important;
            font-size: 12px !important;
            box-shadow: none !important;
          }
          .min-h-screen {
            padding: 0 !important;
            background: white !important;
          }
          @page {
            margin: 1.8cm 2cm;
            size: A4;
          }
        }
        .resume-section-title {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #4338ca;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 3px;
          margin-bottom: 10px;
        }
      `}</style>
    </>
  );
}

function ResumeRole({
  title,
  company,
  period,
  location,
  bullets,
  tags,
}: {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
}) {
  return (
    <div className="mb-5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-2">
        <span className="font-semibold text-gray-900">{title}</span>
        <span className="text-xs text-gray-400">{period}</span>
      </div>
      <div className="flex flex-wrap items-center gap-x-3 text-xs text-gray-500 mb-1.5">
        <span className="font-medium text-indigo-700">{company}</span>
        <span>{location}</span>
      </div>
      <ul className="space-y-1 text-gray-700">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-[12.5px]">
            <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-indigo-500" />
            {b}
          </li>
        ))}
      </ul>
      <div className="mt-2 flex flex-wrap gap-1">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded bg-indigo-50 px-1.5 py-0.5 text-[11px] font-medium text-indigo-700 border border-indigo-100"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function SkillRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <span className="w-28 flex-none font-semibold text-gray-700">{label}</span>
      <span className="text-gray-600">{value}</span>
    </div>
  );
}
