import Image from "next/image";

import { Container } from "@/components/ui/container";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="flex min-h-dvh py-6 items-center justify-center">
      <Container>
        <div className="mx-auto w-full max-w-2xl rounded-sm bg-blue-100 px-9 py-14">
          <h1 className="text-2xl font-semibold text-nowrap md:text-5xl">ADRIAN TALVA</h1>
          <div className="mt-6 flex sm:flex-row flex-col gap-5">
            <div className="relative h-60 min-w-40">
              <Image src="/4.webp" alt="img" fill loading="eager" priority />
            </div>
            <div className="flex flex-col gap-4">
              <p>
                Born and raised in Reno, Nevada. It all begins with an idea. Maybe you want to
                launch a business.
              </p>
              <p>
                Maybe you want to turn a hobby into something more. Or maybe you have a creative
                project to share with the world.
              </p>
              <p>Whatever it is, the way you tell your story online can make all the difference.</p>

              <Link className="underline" href='/contact' >Get in Touch</Link>
            </div>
          </div>
        </div>
        {/* <div className="relative grid grid-cols-4 overflow-visible py-5 sm:py-14">
        <div className="xs:mt-32 relative order-2 col-span-4 md:mt-0 lg:col-span-3">
          <Image
            src="/4.webp"
            alt="img"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={100}
            height={250}
            loading="eager"
            priority
          />
        </div>
        <div className="xs:absolute xs:top-0 xs:right-2.5 relative top-9 right-0 z-40 order-1 w-fit col-span-4 max-w-fit overflow-visible bg-blue-100 p-8 md:max-w-[630px] md:p-16 lg:top-52">
          <h1 className="text-2xl font-semibold text-nowrap md:text-5xl">ADRIAN TALVA</h1>
          <p className="mt-8">
            Born and raised in Reno, Nevada. It all begins with an idea. Maybe you want to launch a
            business. Maybe you want to turn a hobby into something more. Or maybe you have a
            creative project to share with the world. Whatever it is, the way you tell your story
            online can make all the difference.
          </p>
        </div>
      </div> */}
      </Container>
    </div>
  );
};

export default AboutPage;
