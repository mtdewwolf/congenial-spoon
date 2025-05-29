import { Metadata } from 'next';

interface GenerateMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function generateMetadata({
  title,
  description,
  path,
  image,
}: GenerateMetadataOptions): Metadata {
  const siteUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
  const fullUrl = `${siteUrl}${path}`;
  const defaultImage = `${siteUrl}/images/og-image.jpg`;

  return {
    title: `${title} | My Two ¢`,
    description,
    openGraph: {
      title: `${title} | My Two ¢`,
      description,
      url: fullUrl,
      siteName: 'My Two ¢',
      images: [
        {
          url: image || defaultImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | My Two ¢`,
      description,
      images: [image || defaultImage],
    },
    alternates: {
      canonical: fullUrl,
    },
  };
} 