import React from 'react';

interface GuidesLayoutProps {
  children: React.ReactNode;
}

export default function GuidesLayout({ children }: GuidesLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
} 