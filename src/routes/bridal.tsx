import { createFileRoute, Link } from "@tanstack/react-router";
import { PageBanner } from "@/components/Breadcrumb";
import { ProductGrid } from "@/components/ProductCard";
import { products } from "@/lib/products";
import hero2 from "@/assets/hero-2.jpg";

export const Route = createFileRoute("/bridal")({
  head: () => ({
    meta: [
      { title: "The Bridal Edit — Nazara Diamonds" },
      { name: "description", content: "Solitaires, wedding bands and heirloom pieces for the modern bride." },
      { property: "og:title", content: "The Bridal Edit — Nazara Diamonds" },
      { property: "og:description", content: "Solitaires, wedding bands and heirlooms for the modern bride." },
      { property: "og:image", content: "https://nazaradiamonds.com/wp-content/uploads/2025/11/2.png" },
    ],
  }),
  component: Bridal,
});

function Bridal() {
  const solitaires = products.filter((p) => p.category === "Rings" && p.collection === "Diamond Jewellery").slice(0, 8);
  return (
    <>
      <PageBanner title="The Bridal Edit" crumbs={[{ label: "Bridal" }]} />
      <section className="relative h-[46vh] min-h-[340px] overflow-hidden">
        <img src={hero2} alt="Bridal solitaire" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 to-transparent" />
        <div className="container-site absolute inset-0 flex flex-col justify-center">
          <div className="max-w-lg text-primary-foreground">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gold">
              Wedding Season 2026
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Say yes to ethical sparkle
            </h2>
            <p className="mt-3 max-w-md text-sm">
              Certified lab-grown solitaires and wedding bands — designed to be worn every day, forever.
            </p>
            <Link to="/book-appointment" className="btn-gold mt-6">Book a Bridal Consultation</Link>
          </div>
        </div>
      </section>

      <section className="container-site py-16">
        <h3 className="text-center font-display text-3xl font-semibold">Solitaires We Love</h3>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground">
          From marquise to pear, discover the silhouettes our brides are choosing this season.
        </p>
        <div className="mt-10">
          <ProductGrid items={solitaires} />
        </div>
      </section>
    </>
  );
}
