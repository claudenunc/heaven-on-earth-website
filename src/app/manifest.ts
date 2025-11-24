import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Heaven on Earth - Transform Humanity Through Consciousness',
    short_name: 'Heaven on Earth',
    description: 'Free mental health support, alternative education, and tools to build Heaven on Earth. Join the movement.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1a365d',
    theme_color: '#d4af37',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
