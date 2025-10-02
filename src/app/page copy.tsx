"use client";

import { SheetDemo } from "@/components/app-sidebar";
import ColumnImages from "@/components/column-images";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
const spacing = "gap-8";

export default function Home() {
  return (
    <div className="p-10">
      <Button>Click me</Button>

      <div className={cn("grid grid-cols-4", spacing)}>
        <ColumnImages spacing={spacing} images={IMAGES.filter((_, i) => i % 4 === 0)} />
        <ColumnImages spacing={spacing} images={IMAGES.filter((_, i) => i % 4 === 1)} />
        <ColumnImages spacing={spacing} images={IMAGES.filter((_, i) => i % 4 === 2)} />
        <ColumnImages spacing={spacing} images={IMAGES.filter((_, i) => i % 4 === 3)} />
      </div>

      <SheetDemo />
    </div>
  );
}
