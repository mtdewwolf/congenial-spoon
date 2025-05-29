export interface Guide {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
}

export const guides: Guide[] = [
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
    slug: 'camping-gear',
    title: 'Essential Camping Gear for Beginners',
    description: 'Everything you need to know about camping equipment for your first outdoor adventure',
    image: '/images/camping-guide.jpg',
    category: 'Outdoor & Sports',
    readTime: '12 min read',
  },
  {
    slug: 'coffee-makers',
    title: 'Best Coffee Makers for Home Use',
    description: 'Find the perfect coffee maker to brew your favorite cup of joe',
    image: '/images/coffee-maker-guide.jpg',
    category: 'Home & Kitchen',
    readTime: '8 min read',
  },
  {
    slug: 'skincare',
    title: 'Skincare Routine Essentials',
    description: 'Build an effective skincare routine with the right products',
    image: '/images/skincare-guide.jpg',
    category: 'Beauty & Personal Care',
    readTime: '10 min read',
  },
  {
    slug: 'gaming-laptops',
    title: 'Gaming Laptop Buying Guide',
    description: 'Choose the best gaming laptop for your needs and budget',
    image: '/images/gaming-laptop-guide.jpg',
    category: 'Electronics',
    readTime: '12 min read',
  },
]; 