import { Link } from "@nextui-org/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-4">
        {children}
      </main>
      <footer className="w-full flex flex-col items-center justify-center py-3 text-gray-700 text-center" style={{ background: '#FFF8DC' }}>
        <div className="text-lg font-bold" style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '20px' }}>
         {siteConfig.name}
        </div>
        <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', marginBottom: '20px', padding: '0 20px', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: '#333', textDecoration: 'none' }}>Home</Link>
          <Link href="/party-and-events" style={{ color: '#333', textDecoration: 'none' }}>Party and Events</Link>
          <Link href="/book-rooms" style={{ color: '#333', textDecoration: 'none' }}>Book Rooms</Link>
          <Link href="/contact" style={{ color: '#333', textDecoration: 'none' }}>Contact us</Link>
          <Link href="/about" style={{ color: '#333', textDecoration: 'none' }}>About</Link>
        </nav>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Apple Rosa. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
