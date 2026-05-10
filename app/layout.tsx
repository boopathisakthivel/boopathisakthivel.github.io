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
  title: 'Boopathi Sakthivel — AI Application Engineering | Principal Engineer',
  description:
    '14+ years building enterprise-grade software solutions. Specialising in RAG, multi-agent systems, MCP tools, and scalable AI applications across financial services.',
  keywords: [
    'Boopathi Sakthivel',
    'Principal Engineer',
    'AI Engineering',
    'RAG',
    'Multi-Agent Systems',
    'MCP',
    'GenAI',
    'Wells Fargo',
    'JPMorgan Chase',
    'Financial Services',
  ],
  authors: [{ name: 'Boopathi Sakthivel' }],
  creator: 'Boopathi Sakthivel',
  metadataBase: new URL('https://boopathisakthivel.github.io'),
  openGraph: {
    title: 'Boopathi Sakthivel — AI Application Engineering',
    description:
      '14+ years building enterprise-grade software solutions. RAG, multi-agent systems, MCP tools, and scalable AI applications.',
    type: 'website',
    url: 'https://boopathisakthivel.github.io',
    siteName: 'Boopathi Sakthivel',
  },
  icons: {
    icon: '/favicon.svg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boopathi Sakthivel — AI Application Engineering',
    description:
      'Principal Engineer (target) building RAG, multi-agent systems, and scalable AI for financial services.',
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
