import { guides } from '../data/guides';
import GuideCard from '../components/GuideCard';

export default function GuidesPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Buyer&apos;s Guides
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Expert advice and comprehensive guides to help you make informed purchasing decisions.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </div>
    </div>
  );
} 