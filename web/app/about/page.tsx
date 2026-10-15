import type { Metadata } from "next";
import {
  AUTHOR_NAME,
  GOLDMANN_GROUP_LINKS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/data/services";
import { INSTAGRAM, YOUTUBE } from "@/lib/data/media";
import { ButtonLink, Container, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description: `About ${SITE_NAME} — enterprise cybersecurity, ${AUTHOR_NAME}'s published library, and the Goldmann Group ecosystem.`,
  alternates: { canonical: SITE_URL + "/about" },
};

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="Studio"
        title={`About ${SITE_NAME}`}
        lede="We deliver enterprise cybersecurity and offensive security services, publish a technical library, and operate a live broadcast desk."
      />
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 text-base leading-relaxed text-muted">
            <p>
              {SITE_NAME} works with CISOs, CTOs, and compliance teams under NDA. The practice covers pentesting, cloud security, DevSecOps, compliance, vCISO, and incident response.
            </p>
            <p>
              {AUTHOR_NAME} writes the <em className="text-gold-soft">AI Can Hacked</em> series and the <em className="text-gold-soft">Siri, Explain</em> guides — available on Amazon and Apple Books. The same studio operates {YOUTUBE.title} ({YOUTUBE.handle}) and {INSTAGRAM.handle} on Instagram.
            </p>
            <p>
              The work sits inside the Goldmann Group: products and civic projects that share a bias for useful systems over slide decks.
            </p>
          </div>
          <aside className="rounded-2xl border border-gold/15 bg-panel p-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Public channels</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={YOUTUBE.channelUrl} target="_blank" rel="noopener noreferrer" className="text-gold-soft hover:underline">
                  YouTube {YOUTUBE.handle}
                </a>
              </li>
              <li>
                <a href={INSTAGRAM.url} target="_blank" rel="noopener noreferrer" className="text-gold-soft hover:underline">
                  Instagram {INSTAGRAM.handle}
                </a>
              </li>
            </ul>
          </aside>
        </div>

        <section className="mt-14" aria-labelledby="goldmann-group">
          <h2 id="goldmann-group" className="font-serif text-3xl text-gold-soft">
            Goldmann Group
          </h2>
          <p className="mt-2 text-muted">Explore other initiatives in the ecosystem.</p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {GOLDMANN_GROUP_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-gold/25 px-4 py-2 text-sm text-gold-soft hover:bg-gold/10"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12">
          <ButtonLink href="/contact" variant="gold">
            Contact Us
          </ButtonLink>
        </div>
      </Container>
    </div>
  );
}
