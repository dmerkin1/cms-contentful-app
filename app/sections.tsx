// import TestimonialCarousel from "@/components/testimonials";
// import HeroSection from "@/components/hero/index";
// import Card from "@/components/cards";
// import { getHeroImage, getAllTestimonials } from "@/lib/api";

// const Sections = async ({ sections }: { sections: any }) => {
//   const heroImage = [await getHeroImage()];
//   const testimonials = await getAllTestimonials();

//   return (
//     <>
//       {sections.map((section: any, index: number) => {
//         switch (section.__typename) {
//           case "HeroCarousel":
//             return <HeroSection key={index} heroImage={heroImage} />;
//           case "SetOfTestimonials":
//             return (
//               <TestimonialCarousel key={index} testimonials={testimonials} />
//             );
//           case "SetOfCard":
//             return <Card key={index} />;
//           default:
//             return null;
//         }
//       })}
//     </>
//   );
// };

// export default Sections;
