import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/20/solid';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

const products = {
  'wireless-noise-cancelling-headphones': {
    id: '1',
    name: 'Wireless Noise-Cancelling Headphones',
    description: 'Premium wireless headphones with active noise cancellation and 30-hour battery life.',
    price: 299.99,
    rating: 4.5,
    reviewCount: 128,
    image: '/images/headphones.jpg',
    category: 'Electronics',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Bluetooth 5.0',
      'Built-in microphone',
      'Touch controls',
    ],
    specifications: {
      'Battery Life': '30 hours',
      'Bluetooth Version': '5.0',
      'Weight': '250g',
      'Driver Size': '40mm',
      'Frequency Response': '20Hz - 20kHz',
    },
  },
  'smartphone-pro-max': {
    id: '2',
    name: 'Smartphone Pro Max',
    description: 'Latest smartphone with advanced camera system and powerful processor.',
    price: 999.99,
    rating: 4.8,
    reviewCount: 256,
    image: '/images/smartphone.jpg',
    category: 'Electronics',
    features: [
      '6.7-inch Super Retina XDR display',
      'Triple camera system',
      'A15 Bionic chip',
      '5G capable',
      'Face ID',
    ],
    specifications: {
      'Display': '6.7-inch Super Retina XDR',
      'Processor': 'A15 Bionic',
      'Storage': '128GB/256GB/512GB',
      'Camera': 'Triple 12MP',
      'Battery': '4352mAh',
    },
  },
};

export default function ProductPage({ params }: ProductPageProps) {
  const product = products[params.slug as keyof typeof products];

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-2">
              <li>
                <div className="flex items-center">
                  <Link href="/categories" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                    Categories
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-gray-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                  <Link
                    href={`/categories/${product.category.toLowerCase().replace(' & ', '-')}`}
                    className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-900"
                  >
                    {product.category}
                  </Link>
                </div>
              </li>
            </ol>
          </nav>

          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{product.name}</h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((star) => (
                  <StarIcon
                    key={star}
                    className={`h-5 w-5 flex-shrink-0 ${
                      product.rating > star ? 'text-yellow-400' : 'text-gray-200'
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="ml-2 text-sm text-gray-500">{product.reviewCount} reviews</p>
            </div>

            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">{product.description}</p>
            </div>

            <div className="mt-6 flex items-center">
              <p className="text-2xl font-medium text-gray-900">${product.price.toFixed(2)}</p>
            </div>
          </section>
        </div>

        {/* Product image */}
        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
            <Image
              src={product.image}
              alt={product.name}
              width={1000}
              height={1000}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product features */}
        <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
          <section aria-labelledby="features-heading">
            <h2 id="features-heading" className="text-lg font-medium text-gray-900">
              Features
            </h2>
            <div className="mt-4 space-y-6">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                {product.features.map((feature) => (
                  <li key={feature} className="text-gray-500">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section aria-labelledby="specifications-heading" className="mt-10">
            <h2 id="specifications-heading" className="text-lg font-medium text-gray-900">
              Specifications
            </h2>
            <div className="mt-4 space-y-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key}>
                    <dt className="text-sm font-medium text-gray-500">{key}</dt>
                    <dd className="mt-1 text-sm text-gray-900">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 