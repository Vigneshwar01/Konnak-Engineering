export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="max-w-6xl mx-auto px-4 flex justify-center items-center text-gray-600 text-sm">
        <div>
          © {new Date().getFullYear()} Konnak Engineering. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
