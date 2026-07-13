import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck, MapPin, Phone, Sparkles, Video } from "lucide-react";
import { useState } from "react";
import { PageBanner } from "@/components/Breadcrumb";

export const Route = createFileRoute("/book-appointment")({
  head: () => ({
    meta: [
      { title: "Book an Appointment — Nazara Diamonds" },
      { name: "description", content: "Book a private in-store or virtual consultation with our diamond specialists in Indore." },
      { property: "og:title", content: "Book an Appointment — Nazara Diamonds" },
      { property: "og:description", content: "Private diamond consultations — in-store or over video." },
    ],
  }),
  component: BookAppointment,
});

function BookAppointment() {
  const [mode, setMode] = useState<"store" | "virtual">("store");
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageBanner title="Book an Appointment" crumbs={[{ label: "Book Appointment" }]} />
      <div className="container-site grid gap-12 py-16 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
            A Private Experience
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-snug">
            Meet with a Diamond Specialist
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Whether you are choosing a solitaire, designing a custom piece or simply
            curious about lab-grown diamonds, our specialists are here to guide you —
            with no obligation.
          </p>
          <ul className="mt-8 space-y-5 text-sm">
            <li className="flex gap-3">
              <Sparkles size={18} className="mt-0.5 shrink-0 text-gold" />
              <span>Curated selection based on your style, occasion and budget.</span>
            </li>
            <li className="flex gap-3">
              <CalendarCheck size={18} className="mt-0.5 shrink-0 text-gold" />
              <span>60–90 minute slots — never rushed, always private.</span>
            </li>
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
              <span>106, Shiv Om Building, MG Road, Indore 452001.</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-gold" />
              <span>Prefer to talk first? Call us at +91 99999 99999.</span>
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
          {submitted ? (
            <div className="py-10 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold/15 text-gold">
                <CalendarCheck size={26} />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold">
                Your request is in.
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Our concierge will reach out within 24 hours to confirm your appointment.
              </p>
              <button className="btn-outline mt-6" onClick={() => setSubmitted(false)}>
                Book another
              </button>
            </div>
          ) : (
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setMode("store")}
                  className={`flex items-center justify-center gap-2 rounded-lg border p-4 text-sm font-medium transition-colors ${mode === "store" ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-gold"}`}
                >
                  <MapPin size={16} /> In-store
                </button>
                <button
                  type="button"
                  onClick={() => setMode("virtual")}
                  className={`flex items-center justify-center gap-2 rounded-lg border p-4 text-sm font-medium transition-colors ${mode === "virtual" ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-gold"}`}
                >
                  <Video size={16} /> Virtual
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input required placeholder="Full name *" className="rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-gold" />
                <input required type="email" placeholder="Email *" className="rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-gold" />
                <input required placeholder="Phone *" className="rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-gold" />
                <select className="rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-gold">
                  <option>Engagement Ring</option>
                  <option>Wedding Bands</option>
                  <option>Necklace / Pendant</option>
                  <option>Earrings</option>
                  <option>Bracelets & Bangles</option>
                  <option>Custom Design</option>
                </select>
                <input required type="date" className="rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-gold" />
                <select className="rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-gold">
                  {["11:00 AM","12:30 PM","2:00 PM","3:30 PM","5:00 PM","6:30 PM"].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <textarea rows={4} placeholder="Anything we should know?" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-gold" />
              <button className="btn-primary w-full" type="submit">
                Request {mode === "store" ? "In-store" : "Virtual"} Appointment
              </button>
              <p className="text-center text-[11px] text-muted-foreground">
                By submitting you agree to our privacy policy. We never share your details.
              </p>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
