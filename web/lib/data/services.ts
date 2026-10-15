export const SERVICE_SLUGS = [
  "pentesting",
  "cloud-security",
  "devsecops",
  "compliance",
  "vciso",
  "incident-response",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export const SERVICE_NAMES: Record<ServiceSlug, string> = {
  pentesting: "Pentesting",
  "cloud-security": "Cloud Security",
  devsecops: "DevSecOps",
  compliance: "Compliance",
  vciso: "vCISO",
  "incident-response": "Incident Response",
};

export const SERVICE_DETAILS: Record<
  ServiceSlug,
  {
    index: string;
    tagline: string;
    summary: string;
    audience: string;
    methodology: string;
    deliverables: string[];
  }
> = {
  pentesting: {
    index: "01",
    tagline: "Authorized offense, measured risk.",
    summary:
      "We simulate real-world attackers against your applications, networks, and people — then convert findings into a remediation path your engineers can execute.",
    audience:
      "CISOs, CTOs, and product security leads who need an NDA-safe, scoped offensive assessment before a release, audit, or acquisition.",
    methodology:
      "Scoped reconnaissance, authenticated and unauthenticated testing, and evidence-backed reporting mapped to OWASP and industry practice. Retest available after fixes.",
    deliverables: [
      "Executive brief and technical report",
      "Severity-ranked findings with reproduction notes",
      "Remediation guidance and optional retest",
    ],
  },
  "cloud-security": {
    index: "02",
    tagline: "Identity, workload, and blast radius.",
    summary:
      "We review AWS, Azure, and GCP estates for misconfigurations, over-privileged identities, and control gaps that turn a single key into a platform incident.",
    audience:
      "Cloud and platform teams preparing for scale, a compliance review, or a post-incident hardening sprint.",
    methodology:
      "Architecture review, identity and network analysis, and benchmarked configuration assessment against CIS, NIST, and provider security guidance.",
    deliverables: [
      "Cloud risk narrative for leadership",
      "Prioritized control gaps with owner mapping",
      "Hardening roadmap by environment",
    ],
  },
  devsecops: {
    index: "03",
    tagline: "Security that ships with the build.",
    summary:
      "We embed security into your pipeline — SAST, SCA, secrets, and policy gates — so reviews happen before production, not after a ticket from audit.",
    audience:
      "Engineering leaders who want security as a default path, not a late-stage gate that slows every release.",
    methodology:
      "Pipeline inventory, threat-informed control placement, and developer-friendly guardrails that fail closed without blocking legitimate work.",
    deliverables: [
      "Pipeline security design",
      "Tooling and policy recommendations",
      "Rollout plan with owners and metrics",
    ],
  },
  compliance: {
    index: "04",
    tagline: "Evidence, not theater.",
    summary:
      "We prepare organizations for SOC 2, ISO 27001, and adjacent frameworks with scoped controls, evidence collection, and a readiness path that survives auditor questions.",
    audience:
      "Founders, GRC leads, and boards that need a defensible compliance story for customers and insurers.",
    methodology:
      "Scope definition, control gap analysis, policy and evidence coaching, and readiness reviews aligned to the trust criteria you actually sell against.",
    deliverables: [
      "Readiness assessment",
      "Control and evidence map",
      "Remediation sequence for audit",
    ],
  },
  vciso: {
    index: "05",
    tagline: "A security executive, on retainer.",
    summary:
      "Fractional CISO leadership: strategy, board reporting, vendor risk, and a program that fits your stage — without hiring a full-time security org before you need one.",
    audience:
      "Growth-stage companies and mid-market teams that need senior security judgment more than a 20-person SOC.",
    methodology:
      "Current-state assessment, risk register, quarterly planning, and standing office hours with engineering and leadership.",
    deliverables: [
      "Security program roadmap",
      "Board-ready risk updates",
      "On-call advisory for material decisions",
    ],
  },
  "incident-response": {
    index: "06",
    tagline: "Contain, learn, restore.",
    summary:
      "When something is already wrong, we help you contain it, preserve evidence, communicate clearly, and return to a hardened baseline.",
    audience:
      "Leadership teams facing an active incident, a ransomware event, or a customer-facing breach disclosure.",
    methodology:
      "Triage, containment guidance, forensics coordination, and after-action hardening. We work under NDA and keep the circle small.",
    deliverables: [
      "Incident timeline and impact notes",
      "Containment and recovery actions",
      "After-action report with control upgrades",
    ],
  },
};

export const SITE_NAME = "Goldmann Development LLC";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://goldmanndevelopmentllc.com";
export const AUTHOR_NAME = "Bernie Goldmann";

export const GOLDMANN_GROUP_LINKS = [
  { href: "https://probwin.ai", label: "Probwin AI" },
  { href: "https://aicalcoach.com", label: "AI Cal Coach" },
  { href: "https://0098listing.com", label: "0098 Listing" },
  { href: "https://housecalldoctor.ir", label: "House Call Doctor" },
  { href: "https://acfixfinder.com", label: "AC Fix Finder" },
  { href: "https://opensignalfoundation.org", label: "Open Signal Foundation" },
] as const;

export const AUTHORITY_LINKS = {
  owasp: { href: "https://owasp.org/www-project-top-ten/", label: "OWASP Top 10" },
  nist: { href: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final", label: "NIST SP 800-53" },
  iso27001: { href: "https://www.iso.org/standard/27001", label: "ISO/IEC 27001" },
  cisa: { href: "https://www.cisa.gov/", label: "CISA" },
  aws: { href: "https://docs.aws.amazon.com/security/", label: "AWS Security" },
  gcp: { href: "https://cloud.google.com/security", label: "Google Cloud Security" },
  azure: { href: "https://learn.microsoft.com/en-us/azure/security/", label: "Microsoft Azure Security" },
} as const;
