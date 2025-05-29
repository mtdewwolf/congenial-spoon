import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    title: 'Electronics',
    description: 'Find the best gadgets and electronic devices',
    image: '/images/electronics.jpg',
    href: '/categories/electronics',
    subcategories: ['Headphones', 'Smartphones', 'Laptops', 'Tablets'],
  },
  {
    title: 'Home & Kitchen',
    description: 'Essential appliances and home goods',
    image: '/images/home.jpg',
    href: '/categories/home',
    subcategories: ['Air Purifiers', 'Coffee Makers', 'Blenders', 'Cookware'],
  },
  {
    title: 'Outdoor & Sports',
    description: 'Gear for your active lifestyle',
    image: '/images/outdoor.jpg',
    href: '/categories/outdoor',
    subcategories: ['Camping Gear', 'Fitness Equipment', 'Sports Equipment', 'Outdoor Clothing'],
  },
  {
    title: 'Beauty & Personal Care',
    description: 'Products for your self-care routine',
    image: '/images/beauty.jpg',
    href: '/categories/beauty',
    subcategories: ['Skincare', 'Haircare', 'Makeup', 'Fragrances'],
  },
  {
    title: 'Toys & Games',
    description: 'Entertainment for all ages',
    image: '/images/toys.jpg',
    href: '/categories/toys',
    subcategories: ['Board Games', 'Educational Toys', 'Outdoor Toys', 'Video Games'],
  },
  {
    title: 'Books & Media',
    description: 'Expand your knowledge and entertainment',
    image: '/images/books.jpg',
    href: '/categories/books',
    subcategories: ['Fiction', 'Non-Fiction', 'E-books', 'Audiobooks'],
  },
];

export default function CategoriesPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Product Categories</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Browse our comprehensive collection of product categories
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {categories.map((category) => (
            <article key={category.title} className="flex flex-col items-start">
              <div className="relative w-full">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={500}
                  height={300}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <Link
                    href={category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {category.title}
                  </Link>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={category.href}>
                      <span className="absolute inset-0" />
                      {category.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{category.description}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-900">Popular Subcategories:</h4>
                    <ul className="mt-2 space-y-1">
                      {category.subcategories.map((subcategory) => (
                        <li key={subcategory} className="text-sm text-gray-600">
                          {subcategory}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 