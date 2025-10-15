import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import me2 from "../../../../public/me2.jpg";

const AboutScreen = () => {
  return (
    <div className="flex min-h-dvh items-center justify-center py-6">
      <Container>
        <div className="mx-auto w-full max-w-2xl rounded-sm bg-blue-100 px-4 py-6 sm:px-9 sm:py-14">
          <h1 className="xs:text-3xl text-2xl font-semibold uppercase md:text-5xl">
            Hooman Shahidi
          </h1>
          <div className="mt-6 flex flex-col gap-5 sm:flex-row">
            <Image
              className="h-[260px] w-auto object-cover"
              width={190}
              height={260}
              alt="Hooman Shahidi img"
              src={me2}
              placeholder="blur"
              quality={100}
              sizes="100vw"
              loading="eager"
            />

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

export default AboutScreen;
