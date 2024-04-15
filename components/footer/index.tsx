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
  const footerText: string =
    footerData.content.json.content[0].content[0].value;

  return (
    <footer className="text-white bg-accent-1 border-t border-accent-2 bg-custom-blue font-light">
      <div className="container mx-auto px-5">
        <div className="py-10 flex flex-col md:flex-row lg:flex-row items-center lg:justify-center flex-wrap text-center md:text-left">
          <div className="footer-column lg:w-1/4 md:w-1/2 mb-6 lg:mb-0">
            <p className="offset-sm-top-34 pr-5">{footerText}</p>
          </div>
          <div className="footer-column lg:w-1/4 md:w-1/2 mb-6 lg:mb-0">
            <div className="border-b border-gray-400 inline-block">
              <h4 className="text-lg font-semibold pb-2">Navigation</h4>
            </div>
            <nav>
              <div className="flex">
                <ul className="flex flex-col space-y-2 text-gray-400 pt-3">
                  {reverseLinks
                    .slice(0, Math.ceil(reverseLinks.length / 2))
                    .map((link: any, index: number) => (
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
                <ul className="flex flex-col space-y-2 text-gray-400 pt-3 ml-auto mr-20">
                  {reverseLinks
                    .slice(Math.ceil(reverseLinks.length / 2))
                    .map((link: any, index: number) => (
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
              </div>
            </nav>
          </div>

          <div className="footer-column lg:w-1/4 md:w-1/2 mb-6 lg:mb-0">
            <div className="border-b border-gray-400  inline-block">
              <h4 className="text-lg font-semibold pb-2">Contact info</h4>
            </div>
            <div className="pt-3">
              <p className="font-bold pb-3">(123) 45678910</p>
              <p className="pb-3">info@demolink.org</p>
              <p className="font-bold">267 Park Avenue</p>
              <p>New York, NY 90210</p>
            </div>
          </div>
          <div className="footer-column lg:w-1/4 md:w-1/2 mb-6 lg:mb-0">
            <div className="border-b border-gray-400 inline-block">
              <h4 className="text-lg font-semibold pb-2 ">Newsletter Signup</h4>
            </div>
            <div className="pt-3">
              <p className="pb-2">Get latest updates and offers.</p>
              <input
                type="email"
                placeholder="E-mail"
                className="w-1/2 px-4 py-3 rounded-tl-lg rounded-bl-lg"
              />
              <button className="bg-hover-blue text-white px-4 py-3 rounded-tr-lg rounded-br-lg">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-4 border-t bg-bottom-footer-bar text-left">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} FinPRO. Privacy Policy{" "}
        </p>
      </div>
    </footer>
  );
}
