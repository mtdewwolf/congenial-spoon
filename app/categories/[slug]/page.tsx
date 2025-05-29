import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

const categories = {
  electronics: {
    name: 'Electronics',
    description: 'Find the best gadgets and electronic devices',
    products: [
      {
        id: '1',
        name: 'Wireless Noise-Cancelling Headphones',
        description: 'Premium wireless headphones with active noise cancellation and 30-hour battery life.',
        price: 299.99,
        rating: 4.5,
        reviewCount: 128,
        image: '/images/headphones.jpg',
        category: 'Electronics',
        href: '/products/wireless-noise-cancelling-headphones',
      },
      {
        id: '2',
        name: 'Smartphone Pro Max',
        description: 'Latest smartphone with advanced camera system and powerful processor.',
        price: 999.99,
        rating: 4.8,
        reviewCount: 256,
        image: '/images/smartphone.jpg',
        category: 'Electronics',
        href: '/products/smartphone-pro-max',
      },
    ],
  },
  home: {
    name: 'Home & Kitchen',
    description: 'Essential appliances and home goods',
    products: [
      {
        id: '3',
        name: 'Smart Air Purifier',
        description: 'HEPA air purifier with smart features and air quality monitoring.',
        price: 199.99,
        rating: 4.6,
        reviewCount: 89,
        image: '/images/air-purifier.jpg',
        category: 'Home & Kitchen',
        href: '/products/smart-air-purifier',
      },
      {
        id: '4',
        name: 'Professional Coffee Maker',
        description: 'Programmable coffee maker with thermal carafe and strength control.',
        price: 149.99,
        rating: 4.7,
        reviewCount: 112,
        image: '/images/coffee-maker.jpg',
        category: 'Home & Kitchen',
        href: '/products/professional-coffee-maker',
      },
    ],
  },
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories[params.slug as keyof typeof categories];

  if (!category) {
    notFound();
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{category.name}</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">{category.description}</p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {category.products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
} 