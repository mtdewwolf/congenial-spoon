import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About My Two ¢
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're dedicated to helping you make informed purchasing decisions through detailed product comparisons and expert buyer's guides.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At My Two ¢, we believe that every purchase decision deserves careful consideration. Our mission is to provide comprehensive, unbiased product comparisons and detailed buyer's guides to help you find the best products that meet your needs and budget.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: 'Expert Reviews',
                description: 'Our team of experts thoroughly tests and reviews products to provide you with accurate, detailed information.',
              },
              {
                title: 'Unbiased Comparisons',
                description: 'We compare products objectively, focusing on features, performance, and value to help you make the right choice.',
              },
              {
                title: 'Comprehensive Guides',
                description: 'Our buyer's guides cover everything you need to know about specific product categories, from basic features to advanced considerations.',
              },
            ].map((feature) => (
              <div key={feature.title} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">{feature.title}</dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto mt-32 max-w-2xl sm:mt-40 lg:mt-48 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Process</h2>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-3">
            {[
              {
                title: 'Research',
                description: 'We start by researching the market to identify the best products in each category.',
                image: '/images/research.jpg',
              },
              {
                title: 'Testing',
                description: 'Our team thoroughly tests each product to evaluate its performance and features.',
                image: '/images/testing.jpg',
              },
              {
                title: 'Analysis',
                description: 'We analyze the data and create detailed comparisons and guides to help you make informed decisions.',
                image: '/images/analysis.jpg',
              },
            ].map((step) => (
              <div key={step.title} className="relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={500}
                    height={300}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <span className="absolute inset-0" />
                  {step.title}
                </h3>
                <p className="text-base font-semibold text-gray-900">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-32 max-w-2xl sm:mt-40 lg:mt-48 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have questions or suggestions? We'd love to hear from you. Reach out to us at{' '}
            <a href="mailto:contact@mytwocents.com" className="text-primary hover:text-primary/90">
              contact@mytwocents.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 