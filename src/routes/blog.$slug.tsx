import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/Breadcrumb";
import { blogPosts, getPost } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { title: post.title, excerpt: post.excerpt, cover: post.cover };
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return {
        meta: [
          { title: "Not found — Nazara Diamonds" },
          { name: "robots", content: "noindex" },
        ],
      };
    return {
      meta: [
        { title: `${loaderData.title} — Nazara Journal` },
        { name: "description", content: loaderData.excerpt.slice(0, 155) },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.excerpt.slice(0, 155) },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-site py-24 text-center">
      <h1 className="font-display text-3xl font-semibold">Article not found</h1>
      <Link to="/blog" className="btn-primary mt-6">Back to Journal</Link>
    </div>
  ),
  component: BlogPost,
});

function BlogPost() {
  const { slug } = Route.useParams();
  const post = getPost(slug)!;
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <article className="container-site py-10">
      <Breadcrumb items={[{ label: "Journal", to: "/blog" }, { label: post.title }]} />
      <div className="mx-auto mt-8 max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
          {post.category} · {post.readTime}
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-3 text-xs text-muted-foreground">
          {post.author} · {post.date}
        </p>
        <img
          src={post.cover}
          alt={post.title}
          width={1600}
          height={900}
          className="mt-8 aspect-[16/9] w-full rounded-xl object-cover"
        />
        <div className="prose mt-8 max-w-none space-y-5 text-[15px] leading-8 text-foreground/85">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-5xl">
        <h2 className="font-display text-xl font-semibold">More from the Journal</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {related.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group block">
              <img src={p.cover} alt={p.title} width={600} height={400} loading="lazy" className="aspect-[3/2] w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-105" />
              <h3 className="mt-3 font-display text-base font-semibold leading-snug group-hover:text-primary">
                {p.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
