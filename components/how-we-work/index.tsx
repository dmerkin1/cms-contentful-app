import { howWeWork } from "@/lib/api";
import ContentfulImage from "@/lib/contentful-image";

export default async function HowWeWork() {
  const howWeWorkData = await howWeWork();

  return (
    <div className="flex flex-wrap justify-center mb-14 bg-gray-50 py-5">
      {howWeWorkData ? (
        howWeWorkData.map((work: any, index: number) => (
          <div
            key={index}
            className="flex flex-wrap items-center justify-center md:justify-start w-full max-w-screen-lg mx-auto mb-8"
          >
            <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
              <ContentfulImage
                src={work.image.url}
                width={400}
                height={400}
                alt={work.title}
                className="rounded w-full md:w-auto max-w-full h-auto md:h-96 object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 px-4">
              <h3 className="text-xl text-black font-bold mb-3">
                {work.title}
              </h3>
              <p className="text-gray-500 font-light">{work.text}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No how we work data available.</p>
      )}
    </div>
  );
}
