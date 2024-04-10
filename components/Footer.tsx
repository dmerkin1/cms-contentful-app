import { getFooterText, getLinks } from "@/lib/api";
import Link from "next/link";

interface FooterText {
  maxWidth: string;
  content: {
    json: {
      content: string[];
    };
  };
}

export default async function Footer() {
  const footerData = await getFooterText();
  const linkData = await getLinks();
  const reverseLinks = linkData.reverse();
  const footerText: string = footerData.content.json.content[0].content[0].value;

  return (
    <footer className="text-white bg-accent-1 border-t border-accent-2 bg-custom-blue">
      <div className="container mx-auto px-5">
        <div className="py-10 flex flex-col lg:flex-row items-center lg:justify-center">
          {/* Welcome Message */}
          <div className="lg:w-1/3 mb-6 lg:mb-0 text-center ">
            <h4 className="text-lg lg:text-lg font-semibold tracking-tighter leading-tight pb-2">
              {footerText}
            </h4>
          </div>

          {/* Follow Us */}
          <div className="lg:w-1/3 mb-6 lg:mb-0 text-center ">
            <h4 className="text-lg font-semibold pb-2">Follow Us:</h4>
            <nav>
          <ul className="flex flex-col space-y-2">
            {reverseLinks.map((link: any, index: number) => (
              <li key={index}>
                <Link href={link.href} className="hover:underline hover:text-hover-blue">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
          </div>

          {/* Contact Info */}
          <div className="lg:w-1/3 mb-6 lg:mb-0 text-center">
            <h4 className="text-lg lg:text-lg font-semibold pb-2">
              Contact info
            </h4>
            <div>
              <p>(123) 456-78910</p>
              <p>info@demolink.org</p>
              <p>267 Park Avenue</p>
              <p>New York, NY 90210</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-center items-center py-4 border-t bg-bottom-footer-bar">
        <p className="text-sm">&copy; {new Date().getFullYear()} My Blog </p>
      </div>
    </footer>
  );
}