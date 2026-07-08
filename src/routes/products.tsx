import { createFileRoute } from "@tanstack/react-router";
import { ShopPage } from "@/components/ShopPage";

export const Route = createFileRoute("/products")({
  validateSearch: (search: Record<string, unknown>) => ({
    q: typeof search.q === "string" ? search.q : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Shop All Jewellery — Nazara Diamonds" },
      {
        name: "description",
        content:
          "Browse certified lab-grown diamond rings, necklaces, pendants, earrings and bangles with transparent pricing.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { q } = Route.useSearch();
  return <ShopPage key={q ?? "all"} query={q} />;
}
