import { getCards } from "@/lib/api";
import ContentfulImage from "@/lib/contentful-image";

export default async function Page() {
  const cards = await getCards();

  return (
    <div className="flex justify-center w-full mb-5">
      <div className="flex flex-wrap justify-center w-full max-w-screen-xl">
        <div className="flex flex-wrap justify-center w-full px-4">
          {cards ? (
            cards.map((card: any, index: number) => (
              <div
                key={index}
                className="flex flex-col items-center w-full sm:w-1/2 md:w-1/2 lg:w-1/4 sm:px-10 mb-8"
              >
                <div className="hover:shadow-md p-4 rounded-lg flex-grow border-transparent transition duration-300 hover:border-gray-300">
                  <div className="flex justify-center mb-5">
                    <ContentfulImage
                      width={96}
                      height={96}
                      src={card.customIcon.url}
                      alt={card.title}
                      className="rounded-full w-24 h-24 text-hover-blue"
                    />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="text-xl text-black font-bold mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-400">{card.subText}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No cards available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
