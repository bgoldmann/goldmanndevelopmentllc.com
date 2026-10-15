import { INSTAGRAM } from "@/lib/data/media";
import { ButtonLink } from "@/components/ui";

export function InstagramPanel() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gold/20 bg-panel p-8 sm:p-10">
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "conic-gradient(from 180deg, #f9ce34, #ee2a7b, #6228d7, #f9ce34)",
        }}
      />
      <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Instagram</p>
      <h3 className="mt-3 font-serif text-3xl text-gold-soft">{INSTAGRAM.handle}</h3>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
        Daily frames, broadcast stills, and studio notes from {INSTAGRAM.title}. Follow the feed and step into the live window when we go on air.
      </p>
      <div className="mt-8">
        <ButtonLink href={INSTAGRAM.url} variant="gold" external>
          Open Instagram
        </ButtonLink>
      </div>
    </div>
  );
}
