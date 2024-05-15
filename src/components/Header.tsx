import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between px-3 py-5">
      <Link href="/">
        <h1 className="text-xs font-bold lg:text-2xl">고졍의 deVLog</h1>
      </Link>
      <nav className="flex gap-4 text-xs lg:text-md">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
