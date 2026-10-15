import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-gold">
      {children}
    </p>
  );
}

export function GoldRule({ className = "" }: { className?: string }) {
  return <div className={`h-px w-full gold-hairline ${className}`} />;
}

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="relative overflow-hidden gold-field">
      <div className="noise absolute inset-0" />
      <Container className="relative py-16 sm:py-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-gold-soft sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {lede}
        </p>
      </Container>
      <GoldRule />
    </header>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "gold",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "gold" | "ghost" | "dark";
  external?: boolean;
}) {
  const styles = {
    gold: "bg-gold text-background hover:bg-gold-soft",
    ghost: "border border-gold/35 text-gold-soft hover:border-gold hover:bg-gold/10",
    dark: "bg-foreground text-background hover:bg-gold-soft",
  }[variant];

  const className = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition ${styles}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function Mark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect x="1.2" y="1.2" width="37.6" height="37.6" rx="10" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text
        x="20"
        y="27"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="20"
      >
        G
      </text>
    </svg>
  );
}
