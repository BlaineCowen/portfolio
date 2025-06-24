"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  tags: string[];
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  demoUrl,
  githubUrl,
  tags,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col bg-white border-neutral-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
          priority
        />
      </div>
      <CardHeader className="space-y-2">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-neutral-600 leading-relaxed">
          {description}
        </p>
      </CardContent>
      <CardFooter className="flex gap-4 pt-4">
        {demoUrl && (
          <Button asChild className="bg-black text-white hover:bg-neutral-800">
            <Link href={demoUrl} target="_blank">
              Live Demo
            </Link>
          </Button>
        )}
        {githubUrl && (
          <Button
            asChild
            variant="outline"
            className="border-neutral-200 hover:bg-neutral-100"
          >
            <Link href={githubUrl} target="_blank">
              GitHub
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
