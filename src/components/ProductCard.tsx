import { Link } from "@tanstack/react-router";
import { Eye, Heart, Shuffle } from "lucide-react";
import { formatINR, type Product } from "@/lib/products";
import { useShop } from "@/lib/store";
import { StarRating } from "./StarRating";

export function ProductCard({ product }: { product: Product }) {
  const { wishlist, toggleWishlist, toggleCompare, compare, setQuickViewId } =
    useShop();
  const wished = wishlist.includes(product.id);
  const compared = compare.includes(product.id);

  return (
    <div className="group relative flex flex-col">
      <div className="relative overflow-hidden rounded-lg bg-card shadow-sm transition-shadow duration-300 group-hover:shadow-lg">
        <Link
          to="/product/$slug"
          params={{ slug: product.slug }}
          className="block aspect-square"
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={900}
            height={900}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            src={product.hoverImage}
            alt=""
            loading="lazy"
            width={900}
            height={900}
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
          />
        </Link>
        <div className="absolute right-3 top-3 flex translate-x-12 flex-col gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          <button
            aria-label="Add to wishlist"
            onClick={() => toggleWishlist(product.id)}
            className={`grid h-9 w-9 place-items-center rounded-full border border-border bg-card shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground ${wished ? "bg-primary text-primary-foreground" : "text-foreground"}`}
          >
            <Heart size={15} fill={wished ? "currentColor" : "none"} />
          </button>
          <button
            aria-label="Compare"
            onClick={() => toggleCompare(product.id)}
            className={`grid h-9 w-9 place-items-center rounded-full border border-border bg-card shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground ${compared ? "bg-primary text-primary-foreground" : "text-foreground"}`}
          >
            <Shuffle size={15} />
          </button>
          <button
            aria-label="Quick view"
            onClick={() => setQuickViewId(product.id)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Eye size={15} />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1.5 px-2 py-4 text-center">
        <Link
          to="/product/$slug"
          params={{ slug: product.slug }}
          className="font-display text-base font-medium transition-colors hover:text-gold"
        >
          {product.name}
        </Link>
        <StarRating rating={product.rating} />
        <p className="text-sm font-semibold text-primary">
          From {formatINR(product.price)}
        </p>
        <Link
          to="/product/$slug"
          params={{ slug: product.slug }}
          className="mt-1 w-full rounded-full border border-primary px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground sm:translate-y-1 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
        >
          Select Options
        </Link>
      </div>
    </div>
  );
}

export function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
      {items.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export function ProductCarousel({ items }: { items: Product[] }) {
  return (
    <div className="no-scrollbar -mx-4 flex snap-x gap-5 overflow-x-auto px-4 pb-2">
      {items.map((p) => (
        <div key={p.id} className="w-60 shrink-0 snap-start sm:w-64">
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
}
