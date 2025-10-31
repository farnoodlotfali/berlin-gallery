"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Masonry from "@/components/masonry";
import { SelectBox } from "@/components/select-box";
import { Container } from "@/components/ui/container";
import { CATEGORY_TYPE } from "@/consts/category-type";
import { PROJECT_NAME } from "@/consts/project-name";
import { IMAGES } from "@/lib/images";
import { PRESETS } from "@/lib/presets";

const HomeScreen = () => {
  const [project, setProject] = useState("");
  const [category, setCategory] = useState("");

  const images = useMemo(() => {
    return IMAGES.filter(
      (img) =>
        (category ? img.category === category : true) && (project ? img.project === project : true)
    );
  }, [project, category]);

  return (
    <Container className="pb-10">
      <div className="xs:h-[300px] relative h-[200px] w-full select-none md:h-[650px]">
        <Image
          src="/banner.jpg"
          alt="banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <Image
          src="/logo3.png"
          alt="logo"
          sizes="100vw"
          style={{
            width: "33%",
            height: "auto",
          }}
          className="absolute top-1/2 left-1/2 z-20 h-auto min-w-[150px] -translate-x-1/2 -translate-y-1/2 object-contain"
          width={100}
          height={250}
          loading="eager"
          priority
        />
      </div>

      {/* presets */}
      <div className="mt-28">
        <h2 className="mb-10 text-center text-2xl font-bold sm:text-4xl">Presets</h2>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
          {PRESETS.map((preset) => (
            <Link
              key={preset.id}
              href={`/preset/${preset.id}`}
              className="transition-all duration-300 hover:scale-105"
            >
              <Image
                src={preset.src}
                alt="preset1"
                width={preset.src.width}
                height={preset.src.height}
                className="h-full max-h-[350px] w-full object-contain"
                placeholder="blur"
                quality={90}
              />

              <div className="mt-2 flex flex-col items-center justify-center gap-1">
                <h3 className="max-w-56 text-center text-lg font-bold">{preset.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* digital photos */}
      <div className="mt-28">
        <h2 className="mb-10 text-center text-2xl font-bold sm:text-4xl">Digital Photos</h2>
        <div className="flex gap-5">
          <SelectBox
            value={project || undefined}
            setValue={setProject}
            data={PROJECT_NAME}
            placeholder="Project"
          />
          <SelectBox
            value={category || undefined}
            setValue={setCategory}
            data={CATEGORY_TYPE}
            placeholder="Category"
          />
        </div>

        <div className="mt-8">
          <Masonry items={images} />
        </div>
      </div>
    </Container>
  );
};

export default HomeScreen;
