import "./globals.css";
import { Inter } from "next/font/google";
import { CMS_NAME } from "@/lib/constants";
import Link from "next/link";

export const metadata = {
  title: `My Blog`,
  description: `This is a blog built with Next.js and ${CMS_NAME}.`,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

function Header() {
  return (
    <header className="text-white bg-accent-1 border-b border-accent-2 sticky top-0 z-10 bg-custom-blue">
      <div className="container mx-auto px-5">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <h1 className="text-4xl font-bold tracking-tighter leading-tight hover:text-hover-blue">
              My Blog
            </h1>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="/"
                  className="hover:underline hover:text-hover-blue"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:underline hover:text-hover-blue"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="text-white bg-accent-1 border-t border-accent-2 bg-custom-blue">
      <div className="container mx-auto px-5">
        <div className="py-10 flex flex-col lg:flex-row items-center lg:justify-center">
          {/* Welcome Message */}
          <div className="lg:w-1/3 mb-6 lg:mb-0 text-center ">
            <h4 className="text-lg lg:text-lg font-semibold tracking-tighter leading-tight pb-2">
              Welcome to our premier blogging platform, dedicated to delivering
              content that combines quality, reliability, and compliance!
            </h4>
          </div>

          {/* Follow Us */}
          <div className="lg:w-1/3 mb-6 lg:mb-0 text-center ">
            <h4 className="text-lg font-semibold pb-2">Follow Us:</h4>
            <nav>
              <ul className="flex flex-col space-y-2">
                <li>
                  <Link
                    href="/"
                    className="hover:underline hover:text-hover-blue"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:underline hover:text-hover-blue"
                  >
                    Blog
                  </Link>
                </li>
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <section className="min-h-screen">
          <Header />
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
