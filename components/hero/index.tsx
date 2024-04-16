import { getHeroImage } from "@/lib/api";
import Image from "next/image";

export default function Hero() {
  const heroImage = getHeroImage();
  console.log("heroImage", heroImage)
  return (
    <div className="relative h-96">
      {/* <Image
        src={heroImage?.image?.url}
        alt="hero image"
        className="object-cover w-full h-full"
      /> */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Welcome to our blog</h1>
      </div>
    </div>
  );
}