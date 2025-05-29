'use client';

import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/20/solid';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  href: string;
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  rating,
  reviewCount,
  image,
  category,
  href,
}: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${price.toFixed(2)}</p>
      </div>
      <div className="mt-2 flex items-center">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((star) => (
            <StarIcon
              key={star}
              className={`h-4 w-4 flex-shrink-0 ${
                rating > star ? 'text-yellow-400' : 'text-gray-200'
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="ml-2 text-sm text-gray-500">{reviewCount} reviews</p>
      </div>
      <p className="mt-2 text-sm text-gray-500 line-clamp-2">{description}</p>
    </div>
  );
} 