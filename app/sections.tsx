import TestimonialCarousel from "@/components/testimonials";
import HeroSection from "@/components/hero/index";
import Card from "@/components/cards";
import HowWeWork from "@/components/how-we-work";

const Sections = async ({ sections }: { sections: any }) => {
  return (
    <>
      {sections.map((section: any, index: number) => {
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
                title={section.title}
                titleSize={section.titleSize}
              />
            );
          case "HowWeWork":
            return <HowWeWork key={index} howWeWorkData={[{
              title: section.title,
              text: section.text,
              image: section.image
            }]} />;
          case "SetOfCard":
            return (
              <Card
                key={index}
                cards={section.cardsCollection?.items}
                title={section.title}
                titleSize={section.titleSize}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
};

export default Sections;
