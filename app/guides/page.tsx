import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const guides = [
  {
    slug: 'air-purifier',
    title: 'How to Choose the Best Air Purifier',
    description: 'A comprehensive guide to selecting the perfect air purifier for your home',
    image: '/images/air-purifier-guide.jpg',
    category: 'Home & Kitchen',
    readTime: '10 min read',
  },
  {
    slug: 'wireless-earbuds',
    title: 'Top 10 Wireless Earbuds of 2024',
    description: 'Compare the best wireless earbuds for sound quality, comfort, and features',
    image: '/images/earbuds-guide.jpg',
    category: 'Electronics',
    readTime: '15 min read',
  },
  {
    title: 'Essential Camping Gear for Beginners',
    description: 'Everything you need to know about camping equipment for your first outdoor adventure',
    image: '/images/camping-guide.jpg',
    href: '/guides/camping-gear',
    category: 'Outdoor & Sports',
    readTime: '12 min read',
  },
  {
    title: 'Best Coffee Makers for Home Use',
    description: 'Find the perfect coffee maker to brew your favorite cup of joe',
    image: '/images/coffee-maker-guide.jpg',
    href: '/guides/coffee-makers',
    category: 'Home & Kitchen',
    readTime: '8 min read',
  },
  {
    title: 'Skincare Routine Essentials',
    description: 'Build an effective skincare routine with the right products',
    image: '/images/skincare-guide.jpg',
    href: '/guides/skincare',
    category: 'Beauty & Personal Care',
    readTime: '10 min read',
  },
  {
    title: 'Gaming Laptop Buying Guide',
    description: 'Choose the best gaming laptop for your needs and budget',
    image: '/images/gaming-laptop-guide.jpg',
    href: '/guides/gaming-laptops',
    category: 'Electronics',
    readTime: '12 min read',
  },
];

export default function GuidesPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Buyer's Guides
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Expert advice and comprehensive guides to help you make informed purchasing decisions.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="flex flex-col items-start"
            >
              <div className="relative w-full">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  width={800}
                  height={400}
                  className="aspect-[2/1] w-full rounded-2xl object-cover"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <Link
                    href={`/categories/${guide.category.toLowerCase().replace(' & ', '-')}`}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {guide.category}
                  </Link>
                  <span className="text-gray-500">{guide.readTime}</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/guides/${guide.slug}`}>
                      <span className="absolute inset-0" />
                      {guide.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {guide.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 