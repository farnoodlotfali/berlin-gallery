"use client";

import { useMemo, useState } from "react";

import Masonry from "@/components/masonry";
import { Container } from "@/components/ui/container";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CATEGORY_TYPE } from "@/consts/category-type";
import { PROJECT_NAME } from "@/consts/project-name";
import { IMAGES } from "@/lib/images";

const SelectBox = ({
  value,
  setValue,
  data,
}: {
  value: string | undefined;
  setValue: (val: string) => void;
  data: object;
}) => {
  return (
    <Select value={value} onValueChange={(v) => setValue(v === "all" ? "" : v)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Project" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        {Object.values(data).map((item) => {
          return (
            <SelectItem value={item} key={item}>
              {item}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default function Home() {
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
      <div className="mt-10 flex gap-5">
        <SelectBox value={project || undefined} setValue={setProject} data={PROJECT_NAME} />
        <SelectBox value={category || undefined} setValue={setCategory} data={CATEGORY_TYPE} />
      </div>
      <div className="mt-8">
        <Masonry items={images} />
      </div>
    </Container>
  );
}
