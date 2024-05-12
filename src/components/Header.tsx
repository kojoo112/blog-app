import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between px-3 py-5">
      <Link href="/">
        <h1 className="text-2xl font-bold">고졍의 deVLog</h1>
      </Link>
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
