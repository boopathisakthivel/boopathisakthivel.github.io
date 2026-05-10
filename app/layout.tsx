import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Boopathi Sakthivel — AI Platform Engineering | Lead Software Engineer',
  description:
    '14+ years building enterprise software across banking and commerce. Specialising in GenAI systems, RAG, multi-agent orchestration, and AI-augmented platform engineering.',
  keywords: [
    'Boopathi Sakthivel',
    'Lead Software Engineer',
    'AI Platform Engineering',
    'GenAI',
    'RAG',
    'Multi-Agent Systems',
    'MCP',
    'Wells Fargo',
    'JPMorgan Chase',
    'Financial Services',
    'Staff Engineer',
    'Platform Architecture',
  ],
  authors: [{ name: 'Boopathi Sakthivel' }],
  creator: 'Boopathi Sakthivel',
  metadataBase: new URL('https://boopathisakthivel.github.io'),
  openGraph: {
    title: 'Boopathi Sakthivel — AI Platform Engineering',
    description:
      '14+ years building enterprise software across banking and commerce. GenAI systems, RAG, multi-agent orchestration, and scalable AI platform patterns.',
    type: 'website',
    url: 'https://boopathisakthivel.github.io',
    siteName: 'Boopathi Sakthivel',
  },
  icons: {
    icon: '/favicon.svg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boopathi Sakthivel — AI Platform Engineering',
    description:
      'Lead Software Engineer building GenAI systems, RAG platforms, and multi-agent workflows for financial services. Targeting Staff+ / Principal Engineering.',
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0a14',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans">{children}</body>
    </html>
  );
}
