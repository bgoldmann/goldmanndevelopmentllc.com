// Service slugs and display names — PRD: Pentesting → Cloud Security → DevSecOps → Compliance → vCISO → Incident Response
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

export const SITE_NAME = "Goldmann Development LLC";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://goldmanndevelopmentllc.com";

// Goldmann Group ecosystem (US-017)
export const GOLDMANN_GROUP_LINKS = [
  { href: "https://probwin.ai", label: "Probwin AI" },
  { href: "https://aicalcoach.com", label: "AI Cal Coach" },
  { href: "https://0098listing.com", label: "0098 Listing" },
  { href: "https://housecalldoctor.ir", label: "House Call Doctor" },
  { href: "https://acfixfinder.com", label: "AC Fix Finder" },
  { href: "https://opensignalfoundation.org", label: "Open Signal Foundation" },
] as const;

// Authority outbound links (US-016) — nofollow where required
export const AUTHORITY_LINKS = {
  owasp: { href: "https://owasp.org/www-project-top-ten/", label: "OWASP Top 10" },
  nist: { href: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final", label: "NIST SP 800-53" },
  iso27001: { href: "https://www.iso.org/standard/27001", label: "ISO/IEC 27001" },
  cisa: { href: "https://www.cisa.gov/", label: "CISA" },
  aws: { href: "https://docs.aws.amazon.com/security/", label: "AWS Security" },
  gcp: { href: "https://cloud.google.com/security", label: "Google Cloud Security" },
  azure: { href: "https://learn.microsoft.com/en-us/azure/security/", label: "Microsoft Azure Security" },
} as const;
