import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  body: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-lab-grown-diamonds",
    title: "Why Lab Grown Diamonds Are the Future of Fine Jewellery",
    excerpt:
      "Chemically identical, ethically sourced and grown with a fraction of the footprint — here is why more brides are choosing lab-grown.",
    cover: hero2,
    date: "12 March 2026",
    author: "Nazara Editorial",
    category: "Education",
    readTime: "5 min read",
    body: [
      "Lab-grown diamonds are not imitations. They share the exact carbon crystal structure of mined diamonds, which is why gemmologists cannot tell them apart without specialised equipment.",
      "The difference lies in origin. Instead of being extracted from the earth, a lab-grown diamond is coaxed into existence in a highly controlled chamber over several weeks, using either high pressure high temperature (HPHT) or chemical vapour deposition (CVD) technology.",
      "The result is a stone with the same brilliance, hardness and fire — but a dramatically smaller environmental footprint and a fully traceable supply chain.",
    ],
  },
  {
    slug: "understanding-the-4cs",
    title: "Understanding the 4Cs: A Buyer's Guide",
    excerpt:
      "Cut, colour, clarity and carat — a plain-English walkthrough of the four qualities that define a diamond's value.",
    cover: gallery1,
    date: "02 March 2026",
    author: "Nazara Editorial",
    category: "Education",
    readTime: "7 min read",
    body: [
      "Cut is the most important of the four Cs because it determines how a diamond interacts with light. A well-cut stone will out-sparkle a larger, poorly-cut one every time.",
      "Colour is graded from D (colourless) to Z (light yellow). For most settings, anything from D to H reads as a bright white to the eye.",
      "Clarity refers to inclusions and blemishes. VS1 and VS2 grades offer the best balance of value and appearance — flaws are invisible without magnification.",
      "Carat is the weight of the diamond, not the size. Two stones of the same carat can look different depending on their cut.",
    ],
  },
  {
    slug: "styling-layered-necklaces",
    title: "The Art of Styling Layered Necklaces",
    excerpt:
      "Three simple rules to layer chains, pendants and solitaires without the tangle — from our stylists in Indore.",
    cover: gallery2,
    date: "18 February 2026",
    author: "Nazara Styling",
    category: "Style",
    readTime: "4 min read",
    body: [
      "Start with a base chain that sits at your collarbone, then add a slightly longer pendant to create visual depth.",
      "Mix metals with intention. A yellow gold rope with a white gold solitaire feels contemporary yet grounded.",
      "Keep the anchor piece bold and let everything else play a supporting role.",
    ],
  },
  {
    slug: "bridal-edit-2026",
    title: "The Bridal Edit 2026: Solitaires We Are Loving",
    excerpt:
      "From marquise to pear, a curated look at the engagement silhouettes trending this wedding season.",
    cover: hero3,
    date: "04 February 2026",
    author: "Nazara Editorial",
    category: "Bridal",
    readTime: "6 min read",
    body: [
      "The marquise is back — elongating the finger and delivering more surface sparkle per carat than almost any other shape.",
      "Pear-cut solitaires continue to dominate proposal season for their asymmetric elegance.",
      "For the minimalist bride, a bezel-set round in a whisper-thin band still feels like the most modern choice.",
    ],
  },
  {
    slug: "caring-for-fine-jewellery",
    title: "How to Care for Your Fine Jewellery",
    excerpt:
      "Small habits that keep your rings, necklaces and bangles looking new for a lifetime.",
    cover: gallery3,
    date: "20 January 2026",
    author: "Nazara Atelier",
    category: "Care",
    readTime: "3 min read",
    body: [
      "Store each piece separately in a soft pouch to prevent scratching.",
      "Remove jewellery before swimming, workouts and applying skincare — chlorine and lotions dull the metal over time.",
      "Bring your pieces in once a year for a complimentary professional clean at our Indore store.",
    ],
  },
];

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
