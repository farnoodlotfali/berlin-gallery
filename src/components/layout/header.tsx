import { MenuIcon } from "lucide-react";
import Image from "next/image";

import NavLink from "@/components/nav-link";
import { Container } from "@/components/ui/container";

const LINKS = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const Header = () => {
  return (
    <header className="">
      <Container className="flex h-[80px] items-center">
        <MenuIcon className="mr-auto cursor-pointer md:hidden" />
        <div className="logo">
          <Image
            src="/next.svg"
            alt="logo"
            sizes="100vw"
            style={{
              width: "auto",
              height: 20,
            }}
            width={580}
            height={250}
          />
        </div>
        <div className="ml-10 hidden grow items-center gap-8 md:flex">
          {LINKS.map((li) => {
            return (
              <NavLink href={li.link} key={li.link}>
                {li.title}
              </NavLink>
            );
          })}
        </div>
      </Container>
    </header>
  );
};

export default Header;
