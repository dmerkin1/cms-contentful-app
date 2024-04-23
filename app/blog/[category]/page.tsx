import Page from "@/app/blog/page";

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  return (
    <div>
      <Page category={params.category} />
    </div>
  );
}
