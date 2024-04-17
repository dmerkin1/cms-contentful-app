import { getFooterText, getLinks, getLogo } from "@/lib/api";
import Link from "next/link";
import ContentfulImage from "@/lib/contentful-image";

export default async function Footer() {
  const footerData = await getFooterText();
  const linkData = await getLinks();
  const reverseLinks = linkData.reverse();
  const footerText: string =
    footerData.content.json.content[0].content[0].value;
  const logo = await getLogo();

  return (
    <footer className="text-white bg-accent-1 border-t border-accent-2 bg-custom-blue font-light">
      <div className="container mx-auto px-20">
        <div className="py-10 flex flex-col md:flex-row lg:flex-row items-center lg:justify-center flex-wrap text-center md:text-left">
          <div className="footer-column lg:w-1/4 md:w-1/2 mb-6 lg:mb-0">
            <p className="offset-sm-top-34 pr-5">{footerText}</p>
            <div className="w-full mt-[22px] flex items-center justify-center md:justify-start gap-[30px]">
              <em className="font-light">Follow Us:</em>
              <div className="flex gap-2">
                <svg
                  className="bg-white text-custom-blue h-[27px] w-[27px] p-1 rounded-full"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.1 6H15V3h-1.9A4.1 4.1 0 0 0 9 7.1V9H7v3h2v10h3V12h2l.6-3H12V6.6a.6.6 0 0 1 .6-.6h.5Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="bg-white text-custom-blue h-[27px] w-[27px] p-[6px] rounded-full"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 5.9c-.7.3-1.5.5-2.4.6a4 4 0 0 0 1.8-2.2c-.8.5-1.6.8-2.6 1a4.1 4.1 0 0 0-6.7 1.2 4 4 0 0 0-.2 2.5 11.7 11.7 0 0 1-8.5-4.3 4 4 0 0 0 1.3 5.4c-.7 0-1.3-.2-1.9-.5a4 4 0 0 0 3.3 4 4.2 4.2 0 0 1-1.9.1 4.1 4.1 0 0 0 3.9 2.8c-1.8 1.3-4 2-6.1 1.7a11.7 11.7 0 0 0 10.7 1A11.5 11.5 0 0 0 20 8.5V8a10 10 0 0 0 2-2.1Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="bg-white text-custom-blue h-[27px] w-[27px] p-[6px] rounded-full"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 22a10 10 0 0 1-7.1-3A9.9 9.9 0 0 1 5 4.8C7 3 9.5 2 12.2 2h.2c2.4 0 4.8 1 6.6 2.6l-2.5 2.3a6.2 6.2 0 0 0-4.2-1.6c-1.8 0-3.5.7-4.8 2a6.6 6.6 0 0 0-.1 9.3c1.2 1.3 2.9 2 4.7 2h.1a6 6 0 0 0 4-1.1c1-.9 1.8-2 2.1-3.4v-.2h-6v-3.4h9.6l.1 1.9c-.1 5.7-4 9.6-9.7 9.6H12Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="footer-column lg:w-1/4 md:w-1/2 mb-6 lg:mb-0 pr-5">
            <div>
              <h4 className="text-lg font-semibold pb-5">Navigation</h4>
              <hr className="w-full sm:w-[315px] md:w-[275px] lg:w-[385px] xl:w-[200px] border-b-1 border-gray-400 pb-5"></hr>
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
                <ul className="flex flex-col space-y-2 text-gray-400 pt-3 ml-auto ">
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
            <div>
              <h4 className="text-lg font-semibold pb-5">Contact Info</h4>
              <hr className="w-full sm:w-[315px] md:w-[275px] lg:w-[385px] xl:w-[200px] border-b-1 border-gray-400 pb-5"></hr>
            </div>
            <div className="flex flex-col items-center gap-[20px] md:gap-[14px] md:mt-[12px]">
              <div className="w-full flex gap-[20px] items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="transparent"
                  className="fill-hover-blue stroke-primary h-[20px] w-[20px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  ></path>
                </svg>

                <p className="font-bold">(123) 45678910</p>
              </div>
              <div className="w-full flex gap-[20px] items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="stroke-hover-blue h-[22px] w-[22px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  ></path>
                </svg>
                <p className="font-light">info@demolink.org</p>
              </div>
              <div className="w-full flex gap-[20px] items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="stroke-hover-blue h-[22px] w-[22px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  ></path>
                </svg>
                <p className="font-light">Mon - Sat: 9:00 - 18:00</p>
              </div>
              <div className="w-full flex gap-[20px] items-start">
                <svg
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-hover-blue h-[20px] w-[20px]"
                >
                  <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path>
                </svg>
                <div>
                  <p className="font-bold">267 Park Avenue</p>
                  <p className="font-light">New York, NY 90210</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-column lg:w-1/4 md:w-1/2 mb-6 lg:mb-0">
            <div>
              <h4 className="text-lg font-semibold pb-5">Newsletter Signup</h4>
              <hr className="w-full sm:w-[315px] md:w-[275px] lg:w-[385px] xl:w-[200px] border-b-1 border-gray-400 pb-5"></hr>
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
