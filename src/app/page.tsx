"use client";

import Image from "next/image";

import { SheetDemo } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type MasonryItem = {
  src: string;
};

function Masonry({ items, className }: { items: MasonryItem[]; className?: string }) {
  return (
    <div
      className={cn(
        "xs:columns-2 gap-6 sm:columns-2 md:columns-3 lg:columns-4",
        "[column-fill:balance]",
        className
      )}
    >
      {items.map((item, i) => (
        <div
          key={i}
          className="border-border bg-muted/30 mb-6 overflow-hidden shadow-sm not-last-of-type:break-inside-avoid"
        >
          <Image
            style={{
              width: "100%",
              height: "auto",
            }}
            alt="car"
            src={item.src}
            placeholder="blur"
            quality={100}
            sizes="100vw"
          />
        </div>
      ))}
    </div>
  );
}

const image_length = 34;

const IMAGES = (() => {
  const arr = [];

  for (let i = 1; i < image_length; i++) {
    arr.push({
      src: require(`../../public/cars/car (${i}).jpg`),
    });
  }
  return arr;
})();

export default function Home() {
  return (
    <Container className="py-10">
      <Button>Click me</Button>

      <div className={cn("mt-8")}>
        <Masonry items={IMAGES} />
      </div>

      <SheetDemo />
    </Container>
  );
}
