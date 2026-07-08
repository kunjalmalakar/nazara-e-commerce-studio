import { createFileRoute } from "@tanstack/react-router";
import { policies } from "@/lib/content";
import { PolicyPage } from "@/components/PolicyPage";

const p = policies["privacy-policy"];

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: `${p.title} — Nazara Diamonds` },
      { name: "description", content: p.intro },
    ],
  }),
  component: () => <PolicyPage {...p} />,
});
