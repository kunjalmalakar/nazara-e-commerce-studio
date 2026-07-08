import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { products } from "@/lib/products";
import { testimonials } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCarousel, ProductGrid } from "@/components/ProductCard";
import { TrustBadges } from "@/components/TrustBadges";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import bannerEarrings from "@/assets/banner-earrings.jpg";
import bannerBracelets from "@/assets/banner-bracelets.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import pEarrings from "@/assets/p-earrings-studs.jpg";
import pNecklace from "@/assets/p-necklace-layered.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nazara Diamonds — Lab Grown Diamond Jewellery in Indore" },
      {
        name: "description",
        content:
          "Shop certified lab-grown diamond rings, necklaces, earrings and bangles. Ethical luxury, lifetime warranty and free insured shipping across India.",
      },
    ],
  }),
  component: Index,
});

const slides = [
  {
    img: hero1,
    kicker: "New Collection",
    title: "Brilliance, Grown Responsibly",
    sub: "Certified lab-grown diamonds set in hallmarked gold.",
  },
  {
    img: hero2,
    kicker: "Engagement Edit",
    title: "Say Yes to Ethical Sparkle",
    sub: "Solitaires that shine brighter — for you and the planet.",
  },
  {
    img: hero3,
    kicker: "Bangles & Bracelets",
    title: "Everyday Luxury, Perfected",
    sub: "Handcrafted in Indore. Backed by a lifetime warranty.",
  },
];

function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[62vh] min-h-[420px] overflow-hidden">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={s.img}
            alt={s.title}
            width={1920}
            height={900}
            loading={idx === 0 ? "eager" : "lazy"}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/45 via-foreground/15 to-transparent" />
          <div className="container-site absolute inset-0 flex flex-col justify-center">
            <div className={`max-w-lg text-primary-foreground ${idx === i ? "animate-fade-up" : ""}`}>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
                {s.kicker}
              </p>
              <h1 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
                {s.title}
              </h1>
              <p className="mt-3 text-sm sm:text-base">{s.sub}</p>
              <Link to="/products" className="btn-gold mt-6">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      ))}
      <button
        aria-label="Previous slide"
        onClick={() => setI((i - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-background/60 backdrop-blur transition-colors hover:bg-background"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        aria-label="Next slide"
        onClick={() => setI((i + 1) % slides.length)}
        className="absolute right-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-background/60 backdrop-blur transition-colors hover:bg-background"
      >
        <ChevronRight size={18} />
      </button>
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-2 rounded-full transition-all ${idx === i ? "w-6 bg-gold" : "w-2 bg-background/70"}`}
          />
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[i];
  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="container-site max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold">What Our Clients Say</h2>
        <div className="divider-fancy mt-4">
          <span className="inline-block h-1.5 w-1.5 rotate-45 bg-gold" />
        </div>
        <blockquote key={i} className="mt-8 animate-fade-up">
          <p className="text-base leading-relaxed italic sm:text-lg">"{t.text}"</p>
          <p className="mt-6 font-display text-xl text-gold">{t.first}</p>
          <p className="text-xs uppercase tracking-widest text-primary-foreground/70">
            {t.name}
          </p>
        </blockquote>
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-6 bg-gold" : "w-2 bg-primary-foreground/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Index() {
  const [tab, setTab] = useState<"Diamond Jewellery" | "Gemstone Jewellery" | "Gold Jewellery">("Diamond Jewellery");
  const topSelling = products.filter((p) => p.collection === tab).slice(0, 10);
  const featured = products.filter((p) => p.featured).slice(0, 8);
  const gallery = [gallery1, gallery2, gallery3, pEarrings, pNecklace];

  return (
    <div>
      <HeroSlider />

      {/* Category banners */}
      <section className="container-site grid gap-6 py-16 sm:grid-cols-2">
        {[
          { img: bannerEarrings, label: "Earrings", slug: "earrings" },
          { img: bannerBracelets, label: "Bracelets & Bangles", slug: "bracelets-bangles" },
        ].map((b) => (
          <Link
            key={b.slug}
            to="/category/$slug"
            params={{ slug: b.slug }}
            className="group relative block overflow-hidden rounded-xl"
          >
            <img
              src={b.img}
              alt={b.label}
              width={960}
              height={640}
              loading="lazy"
              className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="font-display text-2xl font-semibold text-primary-foreground">
                {b.label}
              </h3>
              <span className="mt-1 inline-block border-b border-gold pb-0.5 text-xs uppercase tracking-widest text-gold">
                Shop Collection
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* Top selling */}
      <section className="container-site pb-16">
        <SectionHeading title="Top Selling Item" />
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {(["Diamond Jewellery", "Gemstone Jewellery", "Gold Jewellery"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${tab === t ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"}`}
            >
              {t}
            </button>
          ))}
        </div>
        <ProductCarousel items={topSelling} />
      </section>

      {/* Luxury section */}
      <section className="bg-secondary/60">
        <div className="container-site grid items-center gap-12 py-20 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
              The Nazara Promise
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-snug sm:text-4xl">
              We Create Luxury Products
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              Every Nazara piece begins with a certified lab-grown diamond —
              chemically identical to mined stones, but grown with a fraction of
              the footprint. Our artisans in Indore hand-set each stone in
              hallmarked gold, so you wear brilliance that is ethical,
              sustainable and uncompromising in quality. Sophisticated
              simplicity for the independent mind.
            </p>
            <Link to="/products" className="btn-primary mt-7">
              Shop Now
            </Link>
          </div>
          <div className="relative mx-auto h-96 w-full max-w-md">
            <img src={hero2} alt="Solitaire ring" width={1920} height={900} loading="lazy" className="absolute left-0 top-0 h-56 w-64 rounded-lg object-cover shadow-xl" />
            <img src={gallery2} alt="Necklace styling" width={700} height={700} loading="lazy" className="absolute right-0 top-16 h-60 w-52 rounded-lg object-cover shadow-xl" />
            <img src={gallery1} alt="Craftsmanship" width={700} height={700} loading="lazy" className="absolute bottom-0 left-12 h-44 w-56 rounded-lg object-cover shadow-xl" />
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Gallery strip */}
      <section className="grid grid-cols-2 sm:grid-cols-5">
        {gallery.map((g, i) => (
          <img
            key={i}
            src={g}
            alt="Nazara jewellery lifestyle"
            width={700}
            height={700}
            loading="lazy"
            className={`aspect-square w-full object-cover transition-opacity hover:opacity-85 ${i === 4 ? "hidden sm:block" : ""}`}
          />
        ))}
      </section>

      {/* Featured products */}
      <section className="container-site py-16">
        <SectionHeading title="Featured Products" />
        <ProductGrid items={featured} />
      </section>

      <TrustBadges />
    </div>
  );
}
