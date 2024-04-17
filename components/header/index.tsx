import TopBar from "./top-bar";
import Link from "next/link";
import { getLinks } from "@/lib/api";
import HamburgerMenu from "./hamburger-menu";

export default async function Header() {
  const linkData = await getLinks();
  const reverseLinks = linkData.reverse();

  return (
    <>
      <TopBar />
      <header className="text-white bg-accent-1 border-b border-accent-2 z-10 sticky top-0">
        <div className="bg-custom-blue">
          <div className="flex justify-between items-center px-4 md:px-20 py-4">
            <HamburgerMenu />
            <nav id="menu" className="md:flex hidden md:w-auto overflow-x-hidden">
              <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 tablet:px-36">
                {reverseLinks.map((link: any, index: number) => (
                  <li key={index} className="relative group flex items-center">
                    <Link
                      href={link.href}
                      className="hover:text-hover-blue font-bold relative flex items-center"
                    >
                      {link.label}
                      <span className="ml-1 text-hover-blue">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-4 w-4 text-primary group-hover:rotate-180 transition-all duration-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
