import { createFileRoute } from "@tanstack/react-router";
import { policies } from "@/lib/content";
import { PolicyPage } from "@/components/PolicyPage";

const p = policies["terms-and-conditions"];

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: `${p.title} — Nazara Diamonds` },
      { name: "description", content: p.intro },
    ],
  }),
  component: () => <PolicyPage {...p} />,
});
