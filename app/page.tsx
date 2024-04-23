import { getLandingPageQuery } from "@/lib/api";
import Sections from "@/app/sections";

export default async function Page() {
  // const heroImage = [await getHeroImage()];
  // const testimonials = await getAllTestimonials();
  const landingPage = await getLandingPageQuery("home");
  console.log("landingPage:", landingPage);
  const sections =
    landingPage?.data?.pageLandingCollection?.items[0]?.sectionsCollection.items;

  return (
    <div>
      <Sections sections={sections} />
    </div>
  );
}
