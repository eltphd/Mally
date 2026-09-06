import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Measurement Ally',
    short_name: 'MALLY',
    description: 'Community impact. Funder-ready evidence.',
    start_url: '/',
    display: 'browser',
    background_color: '#1B2A4A',
    theme_color: '#1B2A4A',
    icons: [{ src: '/icon.png', sizes: '512x512', type: 'image/png' }],
  };
}
