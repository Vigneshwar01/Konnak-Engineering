import Link from "next/link";

export default function Footer() {
    return (
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          
          <div>
            © {new Date().getFullYear()} Konnak Engineering. All rights reserved.
          </div>
  
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/#whoare" className="hover:text-gray-900 transition">About</Link>
            <Link href="/#whatwedo" className="hover:text-gray-900 transition">Projects</Link>
            <Link href="/#contact" className="hover:text-gray-900 transition">Contact</Link>
          </div>
        </div>
      </footer>
    );
  }
  