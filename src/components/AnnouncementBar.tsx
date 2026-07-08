import { MapPin } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-dark text-dark-foreground">
      <div className="container-site flex items-center justify-between gap-4 py-2 text-[11px] tracking-wide sm:text-xs">
        <p className="min-w-0 truncate">
          Flat ₹1100 OFF on Making charges on orders above ₹20,000. Use code{" "}
          <span className="font-semibold text-gold">MK1100</span>
        </p>
        <a
          href="https://maps.google.com/?q=106+Shiv+Om+Building+MG+Road+Indore"
          target="_blank"
          rel="noreferrer"
          className="flex shrink-0 items-center gap-1 transition-colors hover:text-gold"
        >
          <MapPin size={12} /> Find a Store
        </a>
      </div>
      <div className="border-t border-dark-foreground/10 bg-primary py-1.5 text-center text-[11px] tracking-widest text-primary-foreground">
        Free shipping on orders over $50!
      </div>
    </div>
  );
}
