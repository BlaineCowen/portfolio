"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

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
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "projects")}
              className="text-sm font-medium text-neutral-600 hover:text-black transition-colors"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className="text-sm font-medium text-neutral-600 hover:text-black transition-colors"
            >
              Contact
            </a>
          </div>
          <Button
            variant="outline"
            asChild
            className="border-neutral-200 hover:bg-neutral-100 transition-all duration-300"
          >
            <a
              href="https://github.com/BlaineCowen"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
}
