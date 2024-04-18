import TopBar from "./top-bar";
import Link from "next/link";
import { getLinks } from "@/lib/api";
import HamburgerMenu from "./hamburger-menu";

interface LinkItem {
  href: string;
  label: string;
  subMenuCollection?: {
    items: {
      href: string;
      label: string;
    }[];
  };
}

export default async function Header() {
  const linkData: LinkItem[] = await getLinks();
  const mainMenuLinks: LinkItem[] = linkData.filter(
    (link: LinkItem) =>
      (link.subMenuCollection && link.subMenuCollection.items.length > 0) ||
      link.label === "Home" ||
      link.label === "Contacts"
  );
  const orderedLabels = [
    "Home",
    "About Us",
    "Services",
    "Blog",
    "Pages",
    "Contacts",
    "Blocks",
  ];
  const reorderedMenuLinks = orderedLabels.map((label) =>
    mainMenuLinks.find((link) => link.label === label)
  );

  return (
    <>
      <TopBar />
      <header className="text-white bg-accent-1 border-accent-2 z-10 sticky top-0">
        <div className="bg-custom-blue" id="menuHeader">
          <div className="flex justify-between items-center px-4 py-4 md:px-20">
            <HamburgerMenu />
            <nav id="menu" className="md:flex md:w-auto relative">
              <ul className="flex flex-row space-x-4 lg:px-36">
                {reorderedMenuLinks.map((link: any, index: number) => (
                  <li
                    key={index}
                    className="relative group"
                  >
                    <Link
                      href={link.href}
                      className="hover:text-hover-blue font-bold relative flex items-center px-2"
                    >
                      {link.label}
                      {link.subMenuCollection &&
                        link.label !== "Home" &&
                        link.label !== "Contacts" && (
                          <span className="ml-1 text-hover-blue">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="h-4 w-4 transition-all duration-500 transform group-hover:rotate-180"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </span>
                        )}
                    </Link>
                    {/* {link.subMenuCollection &&
                      link.label !== "Home" &&
                      link.label !== "Contacts" && (
                        <ul className="absolute mt-4 left-0 bg-white border border-gray-200 z-20 min-w-[268px] opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                          {link.subMenuCollection.items.map(
                            (subLink: any, subIndex: number) => (
                              <li
                                key={subIndex}
                                className="font-light px-4 py-2 whitespace-nowrap border-b hover:bg-gray-100"
                              >
                                <Link
                                  href={subLink.href}
                                  className="text-gray-500 transition-colors duration-200 hover:text-hover-blue"
                                >
                                  {subLink.label}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      )} */}
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
