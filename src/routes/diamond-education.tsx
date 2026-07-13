import { createFileRoute, Link } from "@tanstack/react-router";
import { PageBanner } from "@/components/Breadcrumb";
import { Accordion } from "@/components/Accordion";
import hero2 from "@/assets/hero-2.jpg";
import gallery1 from "@/assets/gallery-1.jpg";

export const Route = createFileRoute("/diamond-education")({
  head: () => ({
    meta: [
      { title: "Diamond Education — 4Cs of Lab Grown Diamonds | Nazara" },
      { name: "description", content: "Learn about the 4Cs — cut, colour, clarity and carat — and how lab-grown diamonds are made." },
      { property: "og:title", content: "The 4Cs of Lab Grown Diamonds" },
      { property: "og:description", content: "Everything you need to know before buying a lab-grown diamond." },
    ],
  }),
  component: DiamondEducation,
});

const fourCs = [
  { c: "Cut", desc: "The most important C. A well-cut diamond returns maximum light — its sparkle is a direct result of proportion, symmetry and polish." },
  { c: "Colour", desc: "Graded D (colourless) to Z (light yellow). For a bright, white face-up look we recommend D–H." },
  { c: "Clarity", desc: "Refers to internal inclusions. VS1 and VS2 grades are eye-clean and offer the best value-to-appearance ratio." },
  { c: "Carat", desc: "The weight of the stone, not its size. Two diamonds of the same carat can look very different depending on cut." },
];



function DiamondEducation() {
  return (
    <>
      <PageBanner title="Diamond Education" crumbs={[{ label: "Diamond Education" }]} />
      <div className="container-site py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
            The 4Cs, Explained
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-snug sm:text-4xl">
            Buy with confidence, not confusion
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Every Nazara diamond is graded on four qualities established by the
            Gemological Institute of America. Here is what each one actually means.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fourCs.map((x) => (
            <div key={x.c} className="rounded-xl border border-border bg-card p-6">
              <p className="font-display text-5xl font-bold text-gold">{x.c[0]}</p>
              <h3 className="mt-2 font-display text-xl font-semibold">{x.c}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{x.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid items-center gap-10 lg:grid-cols-2">
          <img src={hero2} alt="Solitaire ring" width={900} height={700} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" />
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">How they're made</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">HPHT & CVD, in plain English</h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Lab-grown diamonds start with a tiny diamond seed. Under either extreme
              pressure and heat (HPHT) or a plasma of carbon-rich gas (CVD), carbon
              atoms bond onto the seed, layer by layer, over several weeks — forming
              a real diamond with the same crystal structure as one mined from the earth.
            </p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Because we control the environment, the result is a purer stone, produced
              with a fraction of the ecological footprint and full traceability.
            </p>
          </div>
        </div>

        <div className="mt-20 grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">Certification</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">IGI-certified, independently graded</h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Every Nazara diamond of 0.30 carat and above ships with a certificate
              from the International Gemological Institute detailing its cut, colour,
              clarity and carat — so you always know exactly what you're wearing.
            </p>
            <Link to="/products" className="btn-primary mt-6">Shop Certified Diamonds</Link>
          </div>
          <img src={gallery1} alt="Diamond craftsmanship" width={900} height={700} loading="lazy" className="order-1 aspect-[4/3] w-full rounded-xl object-cover lg:order-2" />
        </div>

        <div className="mt-20 mx-auto max-w-3xl">
          <h3 className="text-center font-display text-2xl font-semibold">Common questions</h3>
          <div className="mt-8">
            <Accordion
              items={[
                { q: "Are lab-grown diamonds real diamonds?", a: "Yes. They are chemically, physically and optically identical to mined diamonds — only their origin differs." },
                { q: "Do they hold their value?", a: "Lab-grown diamonds are priced 40–60% below equivalent mined stones and retain value through our lifetime exchange programme at prevailing rates." },
                { q: "How do I know what quality to pick?", a: "For engagement rings we typically recommend an excellent-cut, D–F colour, VS1–VS2 clarity stone. Book a consultation if you'd like tailored advice." },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
