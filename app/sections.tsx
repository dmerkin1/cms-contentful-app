import TestimonialCarousel from "@/components/testimonials";
import HeroSection from "@/components/hero/index";
import Card from "@/components/cards";

const Sections = async ({ sections }: { sections: any }) => {
  return (
    <>
      {sections.map((section: any, index: number) => {
        console.log("section: ", section);
        switch (section.__typename) {
          case "HeroCarousel":
            return (
              <HeroSection
                key={index}
                heroImage={section.heroImageCollection?.items}
              />
            );
          case "SetOfTestimonials":
            return (
              <TestimonialCarousel
                key={index}
                testimonials={section.testimonialsCollection?.items}
              />
            );
          case "SetOfCard":
            return <Card key={index} cards={section.cardsCollection?.items}/>;
          default:
            return null;
        }
      })}
    </>
  );
};

export default Sections;
