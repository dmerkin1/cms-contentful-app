import ContentfulImage from "@/lib/contentful-image";

export default function Avatar({
  name,
  picture,
  showImage = true,
}: {
  name: string;
  picture?: any;
  showImage?: boolean;
}) {
  return (
    <div className="flex items-center">
      {showImage && picture && (
        <div className="mr-4 w-12 h-12">
          <ContentfulImage
            alt={name}
            className="object-cover h-full rounded-full"
            height={48}
            width={48}
            src={picture.url}
          />
        </div>
      )}
      <span className="text-gray-500">
        <span className="font-bold text-black">Posted by:</span> {name}
      </span>
    </div>
  );
}
