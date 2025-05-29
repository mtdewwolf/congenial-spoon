# My Two ¢ - Product Comparison & Buyer's Guide

A modern affiliate marketing website built with Next.js, TypeScript, and Tailwind CSS. The platform helps users make informed purchasing decisions through detailed product comparisons and expert reviews.

## Features

- 🛍️ Product comparisons and buyer's guides
- 🔍 Detailed product information with pros and cons
- ⭐ Product ratings and reviews
- 🏷️ Amazon affiliate integration
- 📱 Responsive design
- 🚀 Fast loading times
- 🔒 SEO optimized

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **UI Components**: Headless UI
- **Icons**: Heroicons

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/my-two-cents.git
   cd my-two-cents
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/my_two_cents"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. Set up the database:
   ```bash
   npx prisma db push
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
my-two-cents/
├── app/                    # Next.js app directory
│   ├── categories/        # Category pages
│   ├── products/         # Product pages
│   └── page.tsx          # Home page
├── components/            # React components
├── prisma/               # Database schema and migrations
├── public/               # Static assets
└── styles/              # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [Headless UI](https://headlessui.dev/)
- [Heroicons](https://heroicons.com/) 