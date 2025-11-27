import Image from "next/image";

import DigitalPhotosSection from "./digital-photos-section";
import PresetsSection from "./presets-section";
import { Container } from "@/components/ui/container";

const HomeScreen = () => {
  return (
    <>
      <div className="xs:h-[300px] relative h-[200px] w-full select-none md:h-[550px]">
        <Image
          src="/banners/banner3.jpg"
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
            maxHeight: 60,
            objectFit: "contain",
          }}
          className="absolute top-1/2 left-1/2 z-20 h-auto min-w-[150px] -translate-x-1/2 -translate-y-1/2"
          width={100}
          height={250}
          loading="eager"
          priority
        />
      </div>

      <Container className="pb-10">
        <PresetsSection />

        <DigitalPhotosSection />
      </Container>
    </>
  );
};

export default HomeScreen;
