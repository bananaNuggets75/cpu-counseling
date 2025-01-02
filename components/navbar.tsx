import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">CounselingPlatform</Link>
        </div>
        <div className="space-x-6">
          <Link href="/">
            <a className="hover:text-gray-200">Home</a>
          </Link>
          <Link href="/about">
            <a className="hover:text-gray-200">About</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
