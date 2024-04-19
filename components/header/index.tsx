import TopBar from "./top-bar";
import Link from "next/link";
import { getLinks, getLogo } from "@/lib/api";
import HamburgerMenu from "./hamburger-menu";
import ContentfulImage, { contentfulLoader } from "@/lib/contentful-image";

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
  const logo = await getLogo();
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
    mainMenuLinks.find((link: LinkItem) => link.label === label)
  );

  return (
    <>
      <TopBar />
      <header className="text-white bg-accent-1 border-accent-2 z-10 sticky top-0">
        <div className="md:bg-custom-blue bg-white" id="menuHeader">
          <div className="flex justify-between items-center px-4 py-4 md:px-20">
            <div className="flex items-center md:hidden">
              <HamburgerMenu />
              <ContentfulImage
                loader={contentfulLoader}
                src={logo.image.url}
                alt={logo.image.title}
                width={150}
                height={150}
                className="ml-4"
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#323946"
              className="h-12 w-12 md:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
              ></path>
            </svg>
            <nav
              id="menu"
              className="md:flex md:w-auto relative text-hover-blue md:text-white"
            >
              <ul className="flex flex-col md:flex-row md:space-x-4 lg:px-36">
                {reorderedMenuLinks.map(
                  (link: LinkItem | undefined, index: number) => (
                    <li
                      key={index}
                      className={`relative ${
                        link?.subMenuCollection &&
                        link.subMenuCollection.items.length > 0
                          ? "group"
                          : ""
                      }`}
                    >
                      <Link
                        href={link?.href ?? ""}
                        className="hover:text-hover-blue font-bold flex items-center justify-between w-full px-2"
                      >
                        {link?.label}
                        {link?.subMenuCollection &&
                          link.subMenuCollection.items.length > 0 && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="h-4 w-4 text-hover-blue ml-2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          )}
                      </Link>
                      {link?.subMenuCollection &&
                        link.subMenuCollection.items.length > 0 && (
                          <ul className="absolute pt-4 left-0 w-full bg-white md:border-b-2 border-gray-400 z-0 min-w-[268px] opacity-0 invisible transition-opacity duration-300 group-hover:opacity-100 md:group-hover:visible">
                            <div className="md:bg-custom-blue h-4 w-full absolute top-0 left-0"></div>
                            {link.subMenuCollection.items.map(
                              (subLink: LinkItem, subIndex: number) => (
                                <li
                                  key={subIndex}
                                  className="font-light px-4 py-2 whitespace-nowrap hover:bg-gray-100 border-b-2 border-gray-50"
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
                        )}
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
