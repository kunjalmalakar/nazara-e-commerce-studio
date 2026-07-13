import { Link, useNavigate } from "@tanstack/react-router";
import {
  ChevronDown,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { formatINR, products } from "@/lib/products";
import { useShop } from "@/lib/store";
import { StarRating } from "./StarRating";

const categoryColumns = [
  {
    title: "Rings",
    slug: "rings",
    links: ["Engagement Rings", "Eternity Rings", "Everyday Rings", "Fancy Ring"],
  },
  {
    title: "Bracelets & Bangles",
    slug: "bracelets-bangles",
    links: ["Bangles", "Everyday Wear Bracelets"],
  },
  {
    title: "Necklace",
    slug: "necklace",
    links: ["Dual Chain", "Everyday Wear Necklace", "Occasion Wear"],
  },
];

export function Header() {
  const { cartCount, wishlist, setCartOpen, setLoginOpen } = useShop();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [productsTab, setProductsTab] = useState<"Rings" | "Pendant" | "Necklace">("Rings");
  const navigate = useNavigate();

  const featured = products.find((p) => p.slug === "halo-crown")!;
  const tabProducts = products.filter((p) => p.category === productsTab).slice(0, 3);
  const topRated = products.filter((p) => p.rating === 5).slice(0, 3);

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchOpen(false);
    navigate({ to: "/products", search: query ? { q: query } : {} });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-site grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 lg:flex lg:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <button
            aria-label="Open menu"
            className="lg:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={22} />
          </button>
          <Link to="/" className="min-w-0">
            <span className="block truncate font-display text-2xl font-bold tracking-wide text-primary">
              Nazara Diamonds
            </span>
            <span className="block text-[9px] uppercase tracking-[0.3em] text-gold">
              Lab Grown Diamond Jewellery
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-7 text-[13px] font-medium uppercase tracking-wider lg:flex">
          <Link to="/" className="py-2 transition-colors hover:text-gold">
            Home
          </Link>

          {/* Categories mega menu */}
          <div className="group relative">
            <Link to="/products" className="flex items-center gap-1 py-2 transition-colors group-hover:text-gold">
              Categories
              <span className="rounded bg-destructive px-1 py-px text-[9px] font-bold text-destructive-foreground">SALE</span>
              <ChevronDown size={13} />
            </Link>
            <div className="invisible absolute left-1/2 top-full z-50 w-[720px] -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="grid grid-cols-4 gap-6 rounded-xl border border-border bg-card p-8 shadow-xl">
                {categoryColumns.map((col) => (
                  <div key={col.title}>
                    <Link
                      to="/category/$slug"
                      params={{ slug: col.slug }}
                      className="font-display text-sm font-semibold normal-case tracking-normal text-primary"
                    >
                      {col.title}
                    </Link>
                    <ul className="mt-3 space-y-2 text-xs font-normal normal-case tracking-normal text-muted-foreground">
                      {col.links.map((l) => (
                        <li key={l}>
                          <Link
                            to="/category/$slug"
                            params={{ slug: col.slug }}
                            className="transition-colors hover:text-gold"
                          >
                            {l}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Link
                  to="/product/$slug"
                  params={{ slug: featured.slug }}
                  className="rounded-lg bg-secondary p-3 text-center normal-case tracking-normal"
                >
                  <img src={featured.image} alt={featured.name} width={900} height={900} loading="lazy" className="aspect-square w-full rounded object-cover" />
                  <p className="mt-2 font-display text-sm">{featured.name}</p>
                  <p className="text-xs text-primary">From {formatINR(featured.price)}</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Products mega menu */}
          <div className="group relative">
            <Link to="/products" className="flex items-center gap-1 py-2 transition-colors group-hover:text-gold">
              Products
              <span className="rounded bg-gold px-1 py-px text-[9px] font-bold text-gold-foreground">HOT</span>
              <ChevronDown size={13} />
            </Link>
            <div className="invisible absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="rounded-xl border border-border bg-card p-8 shadow-xl">
                <div className="mb-5 flex gap-2">
                  {(["Rings", "Pendant", "Necklace"] as const).map((t) => (
                    <button
                      key={t}
                      onMouseEnter={() => setProductsTab(t)}
                      onClick={() => setProductsTab(t)}
                      className={`rounded-full px-4 py-1.5 text-xs transition-colors ${productsTab === t ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-5 normal-case tracking-normal">
                  {tabProducts.map((p) => (
                    <div key={p.id} className="text-center">
                      <Link to="/product/$slug" params={{ slug: p.slug }}>
                        <img src={p.image} alt={p.name} width={900} height={900} loading="lazy" className="aspect-square w-full rounded-lg object-cover" />
                        <p className="mt-2 font-display text-sm">{p.name}</p>
                      </Link>
                      <div className="mt-1 flex justify-center">
                        <StarRating rating={p.rating} showLabel={false} size={11} />
                      </div>
                      <p className="text-xs text-primary">From {formatINR(p.price)}</p>
                      <Link
                        to="/product/$slug"
                        params={{ slug: p.slug }}
                        className="mt-2 inline-block rounded-full border border-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        Select options
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Top Deals */}
          <div className="group relative">
            <Link to="/products" className="flex items-center gap-1 py-2 transition-colors group-hover:text-gold">
              Top Deals <ChevronDown size={13} />
            </Link>
            <div className="invisible absolute left-1/2 top-full z-50 w-[520px] -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-8 rounded-xl border border-border bg-card p-8 shadow-xl normal-case tracking-normal">
                <div>
                  <p className="font-display text-sm font-semibold text-primary">Shop By</p>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                    {[
                      { label: "Rings", slug: "rings" },
                      { label: "Earrings", slug: "earrings" },
                      { label: "Bracelets & Bangles", slug: "bracelets-bangles" },
                      { label: "Gold Rings", slug: "rings" },
                    ].map((c, i) => (
                      <Link
                        key={i}
                        to="/category/$slug"
                        params={{ slug: c.slug }}
                        className="rounded-lg border border-border bg-secondary/60 px-3 py-4 text-center transition-colors hover:border-gold hover:text-gold"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-primary">Top Rated</p>
                  <ul className="mt-3 space-y-3">
                    {topRated.map((p) => (
                      <li key={p.id}>
                        <Link to="/product/$slug" params={{ slug: p.slug }} className="flex items-center gap-3">
                          <img src={p.image} alt={p.name} width={900} height={900} loading="lazy" className="h-12 w-12 rounded object-cover" />
                          <span className="min-w-0">
                            <span className="block truncate text-xs font-medium">{p.name}</span>
                            <span className="text-xs text-primary">From {formatINR(p.price)}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Link to="/bridal" className="py-2 transition-colors hover:text-gold">
            Bridal
          </Link>
          <Link to="/customize" className="py-2 transition-colors hover:text-gold">
            Customize
          </Link>
          <Link to="/blog" className="py-2 transition-colors hover:text-gold">
            Journal
          </Link>

        <div className="flex items-center gap-4">
          <button aria-label="Search" onClick={() => setSearchOpen(!searchOpen)} className="transition-colors hover:text-gold">
            <Search size={19} />
          </button>
          <button aria-label="Account" onClick={() => setLoginOpen(true)} className="hidden transition-colors hover:text-gold sm:block">
            <User size={19} />
          </button>
          <Link to="/wishlist" aria-label="Wishlist" className="relative transition-colors hover:text-gold">
            <Heart size={19} />
            {wishlist.length > 0 && (
              <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-gold text-[9px] font-bold text-gold-foreground">
                {wishlist.length}
              </span>
            )}
          </Link>
          <button aria-label="Cart" onClick={() => setCartOpen(true)} className="relative transition-colors hover:text-gold">
            <ShoppingBag size={19} />
            <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-border bg-card">
          <form onSubmit={submitSearch} className="container-site flex items-center gap-3 py-3">
            <Search size={16} className="shrink-0 text-muted-foreground" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for rings, necklaces, pendants…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <button type="button" aria-label="Close search" onClick={() => setSearchOpen(false)}>
              <X size={16} />
            </button>
          </form>
        </div>
      )}

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[90] lg:hidden">
          <button aria-label="Close menu" className="absolute inset-0 bg-foreground/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute inset-y-0 left-0 flex w-80 max-w-[85vw] flex-col overflow-y-auto bg-background p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-display text-lg font-bold text-primary">Nazara Diamonds</span>
              <button aria-label="Close" onClick={() => setMobileOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-col gap-1 text-sm" onClick={() => setMobileOpen(false)}>
              <Link to="/" className="rounded px-3 py-2.5 hover:bg-secondary">Home</Link>
              <Link to="/products" className="rounded px-3 py-2.5 hover:bg-secondary">All Products</Link>
              {categoryColumns.map((c) => (
                <Link key={c.slug} to="/category/$slug" params={{ slug: c.slug }} className="rounded px-3 py-2.5 hover:bg-secondary">
                  {c.title}
                </Link>
              ))}
              <Link to="/category/$slug" params={{ slug: "earrings" }} className="rounded px-3 py-2.5 hover:bg-secondary">Earrings</Link>
              <Link to="/customize" className="rounded px-3 py-2.5 hover:bg-secondary">Customize</Link>
              <Link to="/about-us" className="rounded px-3 py-2.5 hover:bg-secondary">About Us</Link>
              <Link to="/contact-us" className="rounded px-3 py-2.5 hover:bg-secondary">Contact Us</Link>
              <Link to="/faqs" className="rounded px-3 py-2.5 hover:bg-secondary">FAQs</Link>
              <Link to="/account" className="rounded px-3 py-2.5 hover:bg-secondary">My Account</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
