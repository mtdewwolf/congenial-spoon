import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Find the Best Products with Expert Reviews
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover detailed product comparisons and buyer's guides to make informed purchasing decisions.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/categories"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Browse Categories
              </Link>
              <Link href="/guides" className="text-sm font-semibold leading-6 text-gray-900">
                View Buyer's Guides <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured categories section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Categories</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Explore our most popular product categories
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {[
            {
              title: 'Electronics',
              description: 'Find the best gadgets and electronic devices',
              image: '/images/electronics.jpg',
              href: '/categories/electronics',
            },
            {
              title: 'Home & Kitchen',
              description: 'Essential appliances and home goods',
              image: '/images/home.jpg',
              href: '/categories/home',
            },
            {
              title: 'Outdoor & Sports',
              description: 'Gear for your active lifestyle',
              image: '/images/outdoor.jpg',
              href: '/categories/outdoor',
            },
          ].map((category) => (
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
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 