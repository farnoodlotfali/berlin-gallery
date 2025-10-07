import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";

const AboutPage = () => {
  return (
    <div className="flex min-h-dvh items-center justify-center py-6">
      <Container>
        <div className="mx-auto w-full max-w-2xl rounded-sm bg-blue-100 px-9 py-14">
          <h1 className="text-2xl font-semibold text-nowrap md:text-5xl">ADRIAN TALVA</h1>
          <div className="mt-6 flex flex-col gap-5 sm:flex-row">
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

              <Link className="underline" href="/contact">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
