'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Guide } from '../data/guides';

interface GuideCardProps {
  guide: Guide;
}

export default function GuideCard({ guide }: GuideCardProps) {
  return (
    <article className="flex flex-col items-start">
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
  );
} 