import Link from "next/link";
import {
  SERVICE_SLUGS,
  SERVICE_NAMES,
  SITE_NAME,
} from "@/lib/data/services";

export default function HomePage() {
  return (
    <div className="bg-white text-zinc-900">
      {/* Hero — H1 */}
      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:py-24">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Enterprise Cybersecurity &amp; Offensive Security Services
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600">
          {SITE_NAME} delivers expert pentesting, cloud security, DevSecOps, compliance, vCISO, and incident response for enterprises.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-6 py-3 text-base font-medium text-white hover:bg-zinc-800"
          >
            Request Scope
          </Link>
        </div>
      </section>

      {/* Services — H2 blocks, internal links */}
      <section className="border-t border-zinc-200 bg-zinc-50/50 py-16" aria-labelledby="services-heading">
        <div className="mx-auto max-w-6xl px-4">
          <h2 id="services-heading" className="text-center text-2xl font-bold text-zinc-900">
            Our Services
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_SLUGS.map((slug) => (
              <li key={slug}>
                <article className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-zinc-900">
                    <Link href={`/services/${slug}`} className="hover:text-zinc-700 hover:underline">
                      {SERVICE_NAMES[slug]} Services
                    </Link>
                  </h3>
                  <p className="mt-2 text-zinc-600">
                    Expert {SERVICE_NAMES[slug].toLowerCase()} to strengthen your security posture.
                  </p>
                  <Link
                    href={`/services/${slug}`}
                    className="mt-4 inline-block text-sm font-medium text-zinc-900 hover:underline"
                  >
                    Learn more →
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Trust signals */}
      <section className="border-t border-zinc-200 py-16" aria-labelledby="trust-heading">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 id="trust-heading" className="text-2xl font-bold text-zinc-900">
            Trusted by Security-Conscious Organizations
          </h2>
          <p className="mt-4 text-zinc-600">
            NDA-safe engagements. Certifications and best-practice methodologies. We work with CISOs, CTOs, and compliance teams.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-zinc-900 px-6 py-3 text-base font-medium text-zinc-900 hover:bg-zinc-900 hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA ~2 scroll depths */}
      <section className="border-t border-zinc-200 bg-zinc-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl font-bold">Ready to Secure Your Enterprise?</h2>
          <p className="mt-4 text-zinc-300">
            Request a scope for pentesting, compliance, or vCISO services.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-medium text-zinc-900 hover:bg-zinc-100"
          >
            Request Scope
          </Link>
        </div>
      </section>
    </div>
  );
}
