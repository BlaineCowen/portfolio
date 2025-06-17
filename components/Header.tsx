"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold">Portfolio</span>
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-neutral-600 hover:text-black transition-colors"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium text-neutral-600 hover:text-black transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-neutral-600 hover:text-black transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-neutral-600 hover:text-black transition-colors"
            >
              Contact
            </Link>
          </div>
          <Button
            variant="outline"
            asChild
            className="border-neutral-200 hover:bg-neutral-100 transition-all duration-300"
          >
            <Link href="https://github.com/your-gh" target="_blank">
              GitHub
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
