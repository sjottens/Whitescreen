// app/page.tsx - English homepage at root /
// Wraps the homepage with Header/Footer layout

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
export { metadata } from '@/app/(website)/page';

// Import the actual homepage content component
import HomePageContent from '@/app/(website)/page';

export default function RootPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header locale="en" />
      <main id="main-content" className="flex-1 w-full">
        <HomePageContent />
      </main>
      <Footer locale="en" />
    </div>
  );
}


