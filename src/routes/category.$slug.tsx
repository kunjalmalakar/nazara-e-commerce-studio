import { createFileRoute, notFound } from "@tanstack/react-router";
import { categorySlugs } from "@/lib/products";
import { ShopPage } from "@/components/ShopPage";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    if (!categorySlugs[params.slug]) throw notFound();
    return { category: categorySlugs[params.slug] };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData ? loaderData.category : "Category"} — Nazara Diamonds`,
      },
      {
        name: "description",
        content: `Shop lab-grown diamond ${loaderData ? loaderData.category.toLowerCase() : "jewellery"} handcrafted in hallmarked gold with lifetime warranty.`,
      },
    ],
  }),
  component: CategoryPage,
});

function CategoryPage() {
  const { slug } = Route.useParams();
  return <ShopPage key={slug} categorySlug={slug} />;
}
