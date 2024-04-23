import { getLandingPageQuery } from "@/lib/api";
import Sections from "@/app/sections";

export default async function Page() {
  const landingPage = await getLandingPageQuery("home");
  const sections =
    landingPage?.data?.pageLandingCollection?.items[0]?.sectionsCollection
      .items;

  return (
    <div>
      <Sections sections={sections} />
    </div>
  );
}
