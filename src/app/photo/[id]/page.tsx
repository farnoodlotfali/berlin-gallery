"use client";

import { use, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Zoom from "react-medium-image-zoom";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Container } from "@/components/ui/container";
import { IMAGES } from "@/lib/images";

export default function PhotoPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);

  const stopContext = useCallback((e: React.MouseEvent) => e.preventDefault(), []);
  const stopDrag = useCallback((e: React.DragEvent) => e.preventDefault(), []);

  const photo = IMAGES.find((img) => String(img.id) === id)!;
  console.log(photo);

  // if (!photo) return notFound();

  const recommended = IMAGES.filter(
    (img) => img.id !== photo.id && img.category === photo.category && img.project === photo.project
  );

  return (
    <Container className="pt-10 pb-16">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="relative mx-auto select-none">
          <Zoom>
            <Image
              onContextMenu={stopContext}
              onDragStart={stopDrag}
              alt={photo.name}
              src={photo.src}
              quality={100}
              sizes="100vw"
              className="h-auto max-h-[80vh] w-full object-contain"
              priority
            />
          </Zoom>
        </div>

        <div className="flex h-full flex-col">
          <div className="grid gap-8">
            <h1 className="text-2xl font-bold">{photo.name}</h1>

            <div className="flex flex-col gap-1">
              <span className="font-bold">Description</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque magnam eum nam,
                nihil ratione iste quo debitis iure reiciendis delectus dolore sapiente eligendi
                dolor vitae quasi dicta facilis minima nesciunt.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-bold">Project Name</span>
              <span>{photo.project}</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-bold">Dimension</span>
              <span>{photo.dimension}</span>
            </div>
          </div>
          <Button className="mt-10 h-[48px] w-full text-base lg:mt-auto">BUY NOW</Button>
        </div>
      </div>

      {recommended.length > 0 && (
        <div className="mt-20 md:mt-48">
          <div className="mb-5 text-xl font-bold">See Also</div>
          <Carousel
            className="[&_.embla__viewport]:overflow-visible"
            opts={{ align: "start", loop: true }}
          >
            <CarouselContent>
              {recommended.map((img) => (
                <CarouselItem
                  key={img.id}
                  className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <button
                    onClick={() => router.push(`/photo/${img.id}`)}
                    className="group block w-full select-none"
                    onContextMenu={stopContext}
                  >
                    <div className="bg-muted relative h-40 max-h-48 w-full overflow-hidden rounded-md md:h-48 md:max-h-56 lg:h-56 lg:max-h-60">
                      <Image
                        alt={img.name}
                        src={img.src}
                        fill
                        sizes="(min-width:1280px) 20vw, (min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
                        className="object-contain"
                        quality={90}
                        draggable={false}
                        onDragStart={stopDrag}
                      />
                    </div>
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-background/80 hover:bg-background focus-visible:ring-ring top-1/2 left-2 z-10 h-11 w-11 -translate-y-1/2 rounded-full border shadow-md backdrop-blur focus-visible:ring-2 focus-visible:outline-none md:left-3" />
            <CarouselNext className="bg-background/80 hover:bg-background focus-visible:ring-ring top-1/2 right-2 z-10 h-11 w-11 -translate-y-1/2 rounded-full border shadow-md backdrop-blur focus-visible:ring-2 focus-visible:outline-none md:right-3" />
          </Carousel>
        </div>
      )}
    </Container>
  );
}
