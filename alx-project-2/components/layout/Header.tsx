// components/layout/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex space-x-4">
        <Link href="/"><span>Home</span></Link>
        <Link href="/home"><span>Page: Home</span></Link>
        <Link href="/about"><span>About</span></Link>
      </nav>
    </header>
  );
};

export default Header;
