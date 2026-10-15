import Link from "next/link";
import {
  SERVICE_DETAILS,
  SERVICE_SLUGS,
  SERVICE_NAMES,
  SITE_NAME,
  AUTHOR_NAME,
} from "@/lib/data/services";
import { FEATURED_BOOKS } from "@/lib/data/books";
import { INSTAGRAM, YOUTUBE } from "@/lib/data/media";
import { YouTubeLive } from "@/components/YouTubeLive";
import { BookCard } from "@/components/BookCard";
import { InstagramPanel } from "@/components/InstagramPanel";
import { ButtonLink, Container, Eyebrow, GoldRule } from "@/components/ui";

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative overflow-hidden gold-field">
        <div className="noise absolute inset-0" />
        <Container className="relative py-20 sm:py-28">
          <Eyebrow>{SITE_NAME}</Eyebrow>
          <p className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-gold-soft sm:text-6xl lg:text-7xl">
            Intelligence, offense, and a live signal.
          </p>
          <h1 className="mt-8 max-w-2xl text-lg font-medium tracking-tight text-foreground sm:text-xl">
            Enterprise Cybersecurity &amp; Offensive Security Services
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {SITE_NAME} delivers pentesting, cloud security, DevSecOps, compliance, vCISO, and incident response — and publishes the {AUTHOR_NAME} library while broadcasting {YOUTUBE.title}.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="gold">
              Request Scope
            </ButtonLink>
            <ButtonLink href="/live" variant="ghost">
              Watch Live
            </ButtonLink>
            <ButtonLink href="/books" variant="ghost">
              Browse Books
            </ButtonLink>
          </div>
        </Container>
        <GoldRule />
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="live-heading">
        <Container>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>On air</Eyebrow>
              <h2 id="live-heading" className="mt-3 font-serif text-3xl text-gold-soft sm:text-4xl">
                {YOUTUBE.title}
              </h2>
              <p className="mt-2 text-muted">{YOUTUBE.subtitle}</p>
            </div>
            <ButtonLink href={YOUTUBE.channelUrl} variant="ghost" external>
              {YOUTUBE.handle}
            </ButtonLink>
          </div>
          <YouTubeLive />
        </Container>
      </section>

      <section className="border-y border-gold/10 bg-panel/60 py-16 sm:py-20" aria-labelledby="services-heading">
        <Container>
          <Eyebrow>Practice</Eyebrow>
          <h2 id="services-heading" className="mt-3 font-serif text-3xl text-gold-soft sm:text-4xl">
            Our Services
          </h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_SLUGS.map((slug) => {
              const detail = SERVICE_DETAILS[slug];
              return (
                <li key={slug}>
                  <article className="flex h-full flex-col rounded-2xl border border-gold/15 bg-background p-6 transition hover:border-gold/40">
                    <span className="font-mono text-xs text-gold">{detail.index}</span>
                    <h3 className="mt-3 font-serif text-2xl text-gold-soft">
                      <Link href={`/services/${slug}`} className="hover:underline">
                        {SERVICE_NAMES[slug]} Services
                      </Link>
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {detail.tagline}
                    </p>
                    <Link
                      href={`/services/${slug}`}
                      className="mt-6 text-sm font-medium text-gold hover:text-gold-soft"
                    >
                      Learn more →
                    </Link>
                  </article>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="books-heading">
        <Container>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Library</Eyebrow>
              <h2 id="books-heading" className="mt-3 font-serif text-3xl text-gold-soft sm:text-4xl">
                Books on Amazon &amp; Apple Books
              </h2>
              <p className="mt-2 max-w-xl text-muted">
                The AI Can Hacked series and the Siri, Explain guides — written by {AUTHOR_NAME}.
              </p>
            </div>
            <ButtonLink href="/books" variant="ghost">
              Full catalog
            </ButtonLink>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_BOOKS.map((book) => (
              <li key={book.slug}>
                <BookCard book={book} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-gold/10 py-16 sm:py-20" aria-labelledby="social-heading">
        <Container>
          <h2 id="social-heading" className="sr-only">
            Instagram
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <InstagramPanel />
            <div className="rounded-2xl border border-gold/15 bg-panel p-8 sm:p-10">
              <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Trust</p>
              <h3 className="mt-3 font-serif text-3xl text-gold-soft">
                Trusted by security-conscious organizations
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                NDA-safe engagements. Methodologies aligned with OWASP, NIST, and ISO 27001. We work with CISOs, CTOs, and compliance teams — then publish what the industry can reuse.
              </p>
              <p className="mt-6 text-sm text-muted">
                Follow {INSTAGRAM.handle} and {YOUTUBE.handle} for the public side of the studio.
              </p>
              <div className="mt-8">
                <ButtonLink href="/contact" variant="ghost">
                  Contact Us
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-gold/15 bg-gold py-16 text-background">
        <Container className="text-center">
          <h2 className="font-serif text-3xl sm:text-4xl">Ready to secure your enterprise?</h2>
          <p className="mx-auto mt-4 max-w-xl text-background/75">
            Request a scope for pentesting, compliance, or vCISO services.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact" variant="dark">
              Request Scope
            </ButtonLink>
          </div>
        </Container>
      </section>
    </div>
  );
}
