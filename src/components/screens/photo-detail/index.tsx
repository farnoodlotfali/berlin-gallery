"use client";

import { useCallback } from "react";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IMAGES } from "@/lib/images";
import { IPhoto } from "@/types/photo";

import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import NextPrevEl from "@/components/next-prev-el";

const PhotoScreen = ({ photo }: { photo: IPhoto }) => {
  const router = useRouter();

  const stopContext = useCallback((e: React.MouseEvent) => e.preventDefault(), []);
  const stopDrag = useCallback((e: React.DragEvent) => e.preventDefault(), []);

  if (!photo) return notFound();

  const recommended = IMAGES.filter(
    (img) => img.id !== photo.id && img.category === photo.category && img.project === photo.project
  );

  return (
    <Container className="pt-10 pb-16">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="relative">
          <NextPrevEl className="mdNextElSwiper" variant="next" />
          <NextPrevEl className="mdPrevElSwiper" variant="prev" />
          <Swiper
            autoHeight={true}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            navigation={{
              enabled: true,
              nextEl: ".mdNextElSwiper",
              prevEl: ".mdPrevElSwiper",
              disabledClass: "opacity-50 pointer-events-none",
            }}
            modules={[Navigation]}
            className="h-auto w-auto max-w-xl select-none"
          >
            {photo.dimension.map((dimension) => (
              <SwiperSlide key={dimension}>
                <img
                  onContextMenu={stopContext}
                  onDragStart={stopDrag}
                  alt={photo.name}
                  src={photo.src.src}
                  className="h-full w-full"
                  style={{
                    aspectRatio: dimension.replaceAll("*", "/"),
                  }}
                />

                <div className="absolute inset-x-0 top-0 flex gap-2 p-3 text-white sm:p-4">
                  <div className="inline-block rounded bg-black px-2 py-1 leading-tight font-medium">
                    {dimension}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex h-full flex-col">
          <div className="mb-10 grid gap-8">
            <h1 className="text-2xl font-bold">{photo.name}</h1>

            <div className="flex flex-col gap-1">
              <span className="font-bold">Description</span>
              <p>{photo.description}</p>
              <span className="mt-4 text-sm font-medium">
                © Hooman Visuals. All Rights Reserved.
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-bold">Project Name</span>
              <span>{photo.project}</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-bold">Dimension</span>
              <div className="flex gap-1">
                {photo.dimension.map((dimension) => (
                  <span
                    key={dimension}
                    className="rounded bg-black px-2 py-1 text-sm font-medium text-white"
                  >
                    {dimension}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-bold">Total Price</span>
              <span>CA$ {photo.price}</span>
            </div>
          </div>
          <Button
            className="mt-10 h-[48px] w-full text-base md:mt-28"
            onClick={() => window.open(photo.purchaseLink, "_blank")}
          >
            BUY NOW
          </Button>
        </div>
      </div>

      {recommended.length > 0 && (
        <div className="relative mt-20 md:mt-28">
          <NextPrevEl className="seeAlsoNextElSwiper" variant="next" />
          <NextPrevEl className="seeAlsoPrevElSwiper" variant="prev" />
          <div className="mb-5 text-xl font-bold">See Also</div>
          <Swiper
            className="h-auto w-auto max-w-screen select-none"
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            navigation={{
              enabled: true,
              nextEl: ".seeAlsoNextElSwiper",
              prevEl: ".seeAlsoPrevElSwiper",
              disabledClass: "opacity-50 pointer-events-none",
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

              650: {
                slidesPerView: 3,
                spaceBetween: 20,
              },

              1000: {
                slidesPerView: 4.5,
                spaceBetween: 10,
              },
            }}
            modules={[Navigation]}
          >
            {recommended.map((img) => (
              <SwiperSlide key={img.id}>
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
                      placeholder={"blur"}
                    />
                  </div>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </Container>
  );
};

export default PhotoScreen;
