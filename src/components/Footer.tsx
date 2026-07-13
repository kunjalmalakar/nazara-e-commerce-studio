import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Youtube } from "lucide-react";
import { useState } from "react";

const learn = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Products", to: "/products" },
  { label: "Bridal Edit", to: "/bridal" },
  { label: "Journal", to: "/blog" },
  { label: "Diamond Education", to: "/diamond-education" },
  { label: "Book Appointment", to: "/book-appointment" },
  { label: "FAQs", to: "/faqs" },
  { label: "Wishlist", to: "/wishlist" },
  { label: "My Account", to: "/account" },
  { label: "Contact Us", to: "/contact-us" },
];

const policyLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Exchange Policy", to: "/exchange-policy" },
  { label: "Return & Refund Policy", to: "/return-refund-policy" },
  { label: "Shipping", to: "/shipping-policy" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
  { label: "Bangle Size Guide", to: "/bangle-size-guide" },
  { label: "Ring Size Guide", to: "/ring-size-guide" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="border-b border-dark-foreground/10">
        <div className="container-site grid gap-6 py-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <p className="font-display text-2xl text-gold">Join the Nazara list</p>
            <p className="mt-1 text-sm text-dark-foreground/70">
              First access to new collections, styling notes and private events.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setSubscribed(true);
            }}
            className="flex w-full items-center gap-2"
          >
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full rounded-full border border-dark-foreground/20 bg-transparent px-5 py-3 text-sm text-dark-foreground placeholder:text-dark-foreground/50 focus:border-gold focus:outline-none"
            />
            <button type="submit" className="btn-gold shrink-0 whitespace-nowrap">
              {subscribed ? "Subscribed" : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
      <div className="container-site grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-bold text-gold">Nazara Diamonds</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-dark-foreground/60">
            Lab Grown Diamond Jewellery
          </p>
          <p className="mt-4 text-sm leading-relaxed text-dark-foreground/70">
            Sophisticated simplicity for the independent mind. Ethical,
            sustainable lab-grown diamond jewellery, handcrafted in Indore and
            backed by a lifetime warranty.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg text-gold">Learn</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-dark-foreground/70">
            {learn.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-lg text-gold">Policies</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-dark-foreground/70">
            {policyLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-lg text-gold">Get In Touch</h3>
          <ul className="mt-4 space-y-4 text-sm text-dark-foreground/70">
            <li className="flex gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              <span>
                <strong className="text-dark-foreground">Store:</strong> 106,
                Shiv Om Building, MG Road, Indore 452001
              </span>
            </li>
            <li className="flex gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              <span>
                <strong className="text-dark-foreground">Registered Office:</strong>{" "}
                402 Vibrent Business Centre, Manoramaganj, Indore, M.P. 452001
              </span>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-dark-foreground/20 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-dark-foreground/10 py-5 text-center text-xs text-dark-foreground/50">
        © 2026 Lab Grown Diamond Jewellery in Indore
      </div>
    </footer>
  );
}
