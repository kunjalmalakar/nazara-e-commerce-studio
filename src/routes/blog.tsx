import { createFileRoute, Link } from "@tanstack/react-router";
import { PageBanner } from "@/components/Breadcrumb";
import { blogPosts } from "@/lib/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Nazara Diamonds" },
      { name: "description", content: "Stories, styling notes and diamond education from the Nazara atelier in Indore." },
      { property: "og:title", content: "Journal — Nazara Diamonds" },
      { property: "og:description", content: "Stories, styling notes and diamond education from the Nazara atelier." },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <PageBanner title="Journal" crumbs={[{ label: "Journal" }]} />
      <div className="container-site py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group block"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={p.cover}
                  alt={p.title}
                  width={900}
                  height={600}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
                {p.category} · {p.readTime}
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold leading-snug group-hover:text-primary">
                {p.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              <p className="mt-3 text-xs text-muted-foreground">
                {p.author} · {p.date}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
