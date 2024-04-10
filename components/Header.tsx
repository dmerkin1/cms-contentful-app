import Link from "next/link";
import { getLinks } from "@/lib/api";

export default async function Header() {
  const linkData = await getLinks();
  const reverseLinks = linkData.reverse();

  return (
    <header className="text-white bg-accent-1 border-b border-accent-2 sticky top-0 z-10 bg-custom-blue">
      <div className="container mx-auto px-5">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <h1 className="text-4xl font-bold tracking-tighter leading-tight hover:text-hover-blue">
              Finance
            </h1>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              {reverseLinks.map((link: any, index: number) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:underline hover:text-hover-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
