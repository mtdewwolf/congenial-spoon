'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface GuidePageProps {
  params: {
    slug: string;
  };
}

interface GuideContent {
  type: 'section';
  title: string;
  content: string | string[];
}

interface Guide {
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  content: GuideContent[];
}

const guides: Record<string, Guide> = {
  'air-purifier': {
    title: 'How to Choose the Best Air Purifier',
    description: 'A comprehensive guide to selecting the perfect air purifier for your home',
    image: '/images/air-purifier-guide.jpg',
    category: 'Home & Kitchen',
    readTime: '10 min read',
    author: {
      name: 'John Smith',
      role: 'Home Appliances Expert',
      image: '/images/author.jpg',
    },
    content: [
      {
        type: 'section',
        title: 'Introduction',
        content: 'Choosing the right air purifier can significantly improve your indoor air quality and overall health. This guide will help you understand the key factors to consider when selecting an air purifier.',
      },
      {
        type: 'section',
        title: 'Key Factors to Consider',
        content: [
          'Room Size: Consider the square footage of the room where you will use the air purifier.',
          'Filter Type: HEPA filters are most effective at removing airborne particles.',
          'Noise Level: Look for models with quiet operation, especially for bedrooms.',
          'Energy Efficiency: Check the energy rating to ensure cost-effective operation.',
          'Maintenance: Consider filter replacement costs and frequency.',
        ],
      },
      {
        type: 'section',
        title: 'Types of Air Purifiers',
        content: [
          'HEPA Air Purifiers: Best for removing dust, pollen, and pet dander.',
          'Activated Carbon Filters: Effective for removing odors and chemicals.',
          'UV Air Purifiers: Can kill bacteria and viruses.',
          'Ionic Air Purifiers: Use charged particles to remove pollutants.',
        ],
      },
      {
        type: 'section',
        title: 'Top Features to Look For',
        content: [
          'Air Quality Sensors: Automatically adjust purification levels.',
          'Filter Replacement Indicators: Alert you when filters need changing.',
          'Multiple Fan Speeds: Allow for different purification levels.',
          'Timer Function: Schedule operation for energy savings.',
          'Smart Connectivity: Control via smartphone app.',
        ],
      },
    ],
  },
  'wireless-earbuds': {
    title: 'Top 10 Wireless Earbuds of 2024',
    description: 'Compare the best wireless earbuds for sound quality, comfort, and features',
    image: '/images/earbuds-guide.jpg',
    category: 'Electronics',
    readTime: '15 min read',
    author: {
      name: 'Sarah Johnson',
      role: 'Audio Technology Specialist',
      image: '/images/author.jpg',
    },
    content: [
      {
        type: 'section',
        title: 'Introduction',
        content: 'Wireless earbuds have become essential accessories for music lovers and professionals alike. This guide will help you find the perfect pair for your needs.',
      },
      {
        type: 'section',
        title: 'Key Features to Consider',
        content: [
          'Sound Quality: Look for high-quality drivers and codec support.',
          'Battery Life: Consider both earbud and case battery capacity.',
          'Comfort: Ensure a secure and comfortable fit for long listening sessions.',
          'Noise Cancellation: Active noise cancellation for better sound isolation.',
          'Water Resistance: IP rating for sweat and water protection.',
        ],
      },
      {
        type: 'section',
        title: 'Top Picks',
        content: [
          'Premium Option: Best overall sound quality and features.',
          'Budget Option: Great value for money.',
          'Sports Option: Secure fit and water resistance.',
          'Work Option: Excellent call quality and noise cancellation.',
        ],
      },
      {
        type: 'section',
        title: 'Buying Tips',
        content: [
          'Test the fit before purchasing if possible.',
          'Check compatibility with your devices.',
          'Consider your primary use case.',
          'Read reviews from trusted sources.',
          'Look for warranty and return policies.',
        ],
      },
    ],
  },
};

export default function GuidePage({ params }: GuidePageProps) {
  const guide = guides[params.slug as keyof typeof guides];

  if (!guide) {
    notFound();
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mt-8">
            <div className="flex items-center space-x-4">
              <Link
                href={`/categories/${guide.category.toLowerCase().replace(' & ', '-')}`}
                className="text-sm font-medium text-primary hover:text-primary/90"
              >
                {guide.category}
              </Link>
              <span className="text-sm text-gray-500">{guide.readTime}</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {guide.title}
            </h1>
            <p className="mt-4 text-lg text-gray-500">{guide.description}</p>
          </div>

          {/* Author */}
          <div className="mt-8 flex items-center">
            <Image
              src={guide.author.image}
              alt={guide.author.name}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full"
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{guide.author.name}</p>
              <p className="text-sm text-gray-500">{guide.author.role}</p>
            </div>
          </div>

          {/* Featured image */}
          <div className="mt-8">
            <Image
              src={guide.image}
              alt={guide.title}
              width={1200}
              height={600}
              className="aspect-[2/1] w-full rounded-2xl object-cover"
            />
          </div>

          {/* Content */}
          <div className="mt-8 prose prose-lg prose-primary mx-auto">
            {guide.content.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                {Array.isArray(section.content) ? (
                  <ul className="mt-4 space-y-2">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 text-gray-600">{section.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 