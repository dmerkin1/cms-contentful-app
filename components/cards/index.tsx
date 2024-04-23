import { getCards } from "@/lib/api";
import ContentfulImage from "@/lib/contentful-image";
import { Card } from "@/lib/types";

export default async function Page({ cards }: { cards: Card[]}) {

  return (
    <>
      <h2 className="w-full text-center mb-8 text-5xl md:text-5xl font-bold tracking-tighter leading-tight m-5">
        Our Services
      </h2>
      <div className="w-full flex justify-center">
        <hr
          className="w-[50px] lg:w-[68px] bg-primary mb-[40px] md:mb-[60px] border-hover-blue"
          style={{ borderBottomWidth: "4px" }}
        />
      </div>
      <div className="flex justify-center w-full mb-5">
        <div className="w-full max-w-screen-xl px-4">
          <div className="w-full">
            {cards ? (
              cards.map((card: Card, index: number) => (
                <div
                  key={index}
                  className="inline-block w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-4 mb-8"
                >
                  <div className="p-4 rounded-lg border-transparent transition duration-300 hover:border-gray-300">
                    <div className="flex justify-center mb-5">
                      <ContentfulImage
                        width={400}
                        height={200}
                        src={card?.customIcon?.url}
                        alt={card?.title}
                        className="rounded w-full h-56 text-hover-blue"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl text-black font-bold mb-3">
                        {card.title}
                      </h3>
                      <hr
                        className="w-[50px] lg:w-[54px] bg-primary mb-[20px] border-hover-blue"
                        style={{ borderBottomWidth: "4px" }}
                      />
                      <p className="text-gray-500 font-light">{card.subText}</p>
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
    </>
  );
}
