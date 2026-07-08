import { useMemo, useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import {
  categorySlugs,
  formatINR,
  products,
  type Category,
} from "@/lib/products";
import { PageBanner } from "./Breadcrumb";
import { ProductCard } from "./ProductCard";

const allCategories: Category[] = [
  "Rings",
  "Necklace",
  "Pendant",
  "Earrings",
  "Bracelets & Bangles",
];

const metals = ["Gold", "Rose Gold", "White Gold", "Platinum"];

const sortOptions = [
  { value: "popularity", label: "Popularity" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "newest", label: "Newest" },
  { value: "rating", label: "Rating" },
];

const MAX_PRICE = 350000;

export function ShopPage({
  categorySlug,
  query,
}: {
  categorySlug?: string;
  query?: string;
}) {
  const presetCategory = categorySlug ? categorySlugs[categorySlug] : undefined;
  const [selected, setSelected] = useState<Category[]>(
    presetCategory ? [presetCategory] : [],
  );
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [metal, setMetal] = useState<string[]>([]);
  const [sort, setSort] = useState("popularity");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [shown, setShown] = useState(16);

  const filtered = useMemo(() => {
    let list = [...products];
    if (query) {
      const q = query.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q));
    }
    if (selected.length > 0)
      list = list.filter((p) => selected.includes(p.category));
    list = list.filter((p) => p.price <= maxPrice);
    if (metal.length > 0)
      list = list.filter((p) =>
        metal.some((m) => p.purity.toLowerCase().includes(m.toLowerCase())),
      );
    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        list.sort((a, b) => Number(b.id) - Number(a.id));
        break;
      default:
        list.sort((a, b) => b.reviews - a.reviews);
    }
    return list;
  }, [selected, maxPrice, metal, sort, query]);

  const title = presetCategory ?? "Products";
  const crumbs = presetCategory
    ? [{ label: "Products", to: "/products" }, { label: presetCategory }]
    : [{ label: "Products" }];

  const toggle = (c: Category) =>
    setSelected((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c],
    );

  return (
    <>
      <PageBanner title={title} crumbs={crumbs} />
      <div className="container-site grid gap-10 py-12 lg:grid-cols-[240px_1fr]">
        {/* Sidebar */}
        <aside className="space-y-8">
          <div>
            <h3 className="mb-3 font-display text-lg font-semibold">Category</h3>
            <div className="space-y-2 text-sm">
              {allCategories.map((c) => (
                <label key={c} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selected.includes(c)}
                    onChange={() => toggle(c)}
                    className="accent-[var(--color-primary)]"
                  />
                  {c}
                </label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-display text-lg font-semibold">Price</h3>
            <input
              type="range"
              min={10000}
              max={MAX_PRICE}
              step={5000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[var(--color-gold)]"
            />
            <p className="mt-1 text-xs text-muted-foreground">
              Up to {formatINR(maxPrice)}
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-display text-lg font-semibold">Metal Type</h3>
            <div className="space-y-2 text-sm">
              {metals.map((m) => (
                <label key={m} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={metal.includes(m)}
                    onChange={() =>
                      setMetal((prev) =>
                        prev.includes(m)
                          ? prev.filter((x) => x !== m)
                          : [...prev, m],
                      )
                    }
                    className="accent-[var(--color-primary)]"
                  />
                  {m}
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Main */}
        <div>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">
              Showing 1–{Math.min(shown, filtered.length)} of {filtered.length}{" "}
              results
            </p>
            <div className="flex items-center gap-3">
              <div className="hidden gap-1 sm:flex">
                <button
                  aria-label="Grid view"
                  onClick={() => setView("grid")}
                  className={`grid h-8 w-8 place-items-center rounded border ${view === "grid" ? "border-primary text-primary" : "border-border text-muted-foreground"}`}
                >
                  <LayoutGrid size={14} />
                </button>
                <button
                  aria-label="List view"
                  onClick={() => setView("list")}
                  className={`grid h-8 w-8 place-items-center rounded border ${view === "list" ? "border-primary text-primary" : "border-border text-muted-foreground"}`}
                >
                  <List size={14} />
                </button>
              </div>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none"
              >
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    Sort by {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="py-20 text-center text-muted-foreground">
              No products match your filters.
            </p>
          ) : (
            <div
              className={
                view === "grid"
                  ? "grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4"
                  : "grid grid-cols-1 gap-6 sm:grid-cols-2"
              }
            >
              {filtered.slice(0, shown).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}

          {shown < filtered.length && (
            <div className="mt-10 text-center">
              <button className="btn-outline" onClick={() => setShown(shown + 8)}>
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
