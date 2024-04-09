import Image from "next/image";
import { ContentfulImageProps, contentfulLoader } from "./contentful-image";

export default function FeaturedImage({
  title,
  url,
  src,
  overlayEnabled,
  ...props
}: ContentfulImageProps) {
  return (
    <div
      className={`relative w-full h-[500px] featured-image ${
        overlayEnabled ? "overlay" : ""
      }`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={url}
          loader={contentfulLoader}
          alt={title}
          height={500}
          width={1000}
          className="w-full h-full object-cover"
          {...props}
        />
      </div>
    </div>
  );
}
