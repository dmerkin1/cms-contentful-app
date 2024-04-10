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
        <div className="py-10 flex flex-col md:flex-row lg:flex-row items-center lg:justify-center flex-wrap">
          {/* Welcome Message */}
          <div className="footer-column lg:w-1/4 md:w-1/2 mb-6 lg:mb-0 text-center">
            <h4 className="text-lg lg:text-lg tracking-tighter leading-tight pb-2">
              {footerText}
            </h4>
          </div>
          {/* Follow Us */}
          <div className="footer-column lg:w-1/4 md:w-1/2 mb-6 lg:mb-0 text-center">
            <h4 className="text-lg font-semibold pb-2">Follow Us:</h4>
            <nav>
              <ul className="flex flex-col space-y-2 text-gray-400">
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
          {/* Contact Info */}
          <div className="footer-column lg:w-1/4 md:w-1/2 mb-6 lg:mb-0 text-center">
            <h4 className="text-lg lg:text-lg font-semibold pb-2">
              Contact info
            </h4>
            <div>
              <p className="font-bold pb-3">(123) 45678910</p>
              <p className="pb-3">info@demolink.org</p>
              <p className="font-bold">267 Park Avenue</p>
              <p>New York, NY 90210</p>
            </div>
          </div>
          {/* Newsletter Signup */}
          <div className="footer-column lg:w-1/4 md:w-1/2 mb-6 lg:mb-0 text-center">
            <h4 className="text-lg lg:text-lg font-semibold pb-2">
              Newsletter Signup
            </h4>
            <div>
              <p>Get the updates and offers.</p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-1/2 px-2 py-1 rounded-lg"
              />
              <button className="bg-hover-blue text-white px-2 py-1 rounded-lg">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-center items-center py-4 border-t bg-bottom-footer-bar">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Finance. Privacy Policy{" "}
        </p>
      </div>
    </footer>
  );
}
