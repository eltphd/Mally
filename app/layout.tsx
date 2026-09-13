import type { Metadata } from 'next';
import { Archivo, IBM_Plex_Mono, Newsreader } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

// Self-hosted by next/font at build time; font-display: swap on every face.
const newsreader = Newsreader({
  subsets: ['latin'],
  weight: 'variable',
  style: 'normal',
  axes: ['opsz'],
  variable: '--font-newsreader',
  display: 'swap',
});
// The italic face serves the italic phrase in headlines; not preloaded so the
// roman face and body font reach the first paint sooner.
const newsreaderItalic = localFont({
  src: './fonts/newsreader-italic.woff2',
  style: 'italic',
  weight: '200 800',
  display: 'swap',
  preload: false,
  variable: '--font-newsreader-italic',
});

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-archivo',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Measurement Ally — Community Impact. Funder-Ready Evidence.',
  description:
    'Measurement Ally translates what you do into the language that sustains it — rigorous, human, funder-ready evidence built from the data you already have.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-venture="ma" className={`${newsreader.variable} ${newsreaderItalic.variable} ${archivo.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
