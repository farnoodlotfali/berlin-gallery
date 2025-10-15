"use client";

import { useMemo, useState } from "react";

import Masonry from "@/components/masonry";
import { SelectBox } from "@/components/select-box";
import { Container } from "@/components/ui/container";
import { CATEGORY_TYPE } from "@/consts/category-type";
import { PROJECT_NAME } from "@/consts/project-name";
import { IMAGES } from "@/lib/images";

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
      <div className="mt-10 flex gap-5">
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
    </Container>
  );
};

export default HomeScreen;
