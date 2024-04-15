import Link from "next/link";
import { getLinks } from "@/lib/api";
import TopBar from "./top-bar";

export default async function Header() {
  const linkData = await getLinks();
  const reverseLinks = linkData.reverse();

  return (
    <header className="text-white bg-accent-1 border-b border-accent-2 sticky top-0 z-10">
      <div className="bg-custom-blue">
        <TopBar />
        <div className="flex justify-between items-center mx-20 py-4">
          <nav>
            <ul className="flex space-x-4">
              {reverseLinks.map((link: any, index: number) => (
                <li
                  key={index}
                  className="relative group flex items-center pr-5"
                >
                  {link.label !== "Home" ? (
                    <Link
                      href={link.href}
                      className="hover:text-hover-blue font-bold relative"
                    >
                      {link.label}
                      <span className="ml-1 text-hover-blue">▾</span>
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      className="hover:text-hover-blue font-bold"
                    >
                      {link.label}
                    </Link>
                  )}
                  {/* <div className="absolute hidden bg-white rounded-md shadow-md py-2 px-3 top-full left-0 mt-2 group-hover:block">
                    <ul>
                      <li>
                        <Link href="#" className="text-black">
                          Submenu
                        </Link>
                      </li>
                    </ul>
                  </div> */}
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-white ml-auto">{"\uD83D\uDD0D"}</div>
        </div>
      </div>
    </header>
  );
}
