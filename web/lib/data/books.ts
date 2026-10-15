export type Book = {
  slug: string;
  title: string;
  series: "AI Can Hacked" | "Siri, Explain";
  blurb: string;
  amazonUrl: string;
  appleBooksUrl: string;
};

function amazonSearch(title: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(`${title} Bernie Goldmann`)}`;
}

function appleSearch(title: string) {
  return `https://books.apple.com/us/search?term=${encodeURIComponent(`${title} Bernie Goldmann`)}`;
}

function book(
  slug: string,
  title: string,
  series: Book["series"],
  blurb: string,
  amazonUrl?: string,
): Book {
  return {
    slug,
    title,
    series,
    blurb,
    amazonUrl: amazonUrl ?? amazonSearch(title),
    appleBooksUrl: appleSearch(title),
  };
}

export const BOOKS: Book[] = [
  book(
    "siri-explain-making-money-with-ai",
    "Siri, Explain Making Money with AI to My Grandma",
    "Siri, Explain",
    "A warm, practical guide for building an AI-powered income stream — written so anyone can follow along.",
    "https://www.amazon.com/Siri-Explain-Making-Money-Grandma-ebook/dp/B0FQWD118L",
  ),
  book(
    "kali-linux-shodan",
    "AI Can Hacked: Using Kali Linux & Shodan",
    "AI Can Hacked",
    "Hands-on ethical hacking and security assessment with Kali Linux, Shodan, and AI copilots.",
  ),
  book(
    "vulnerability-hunting",
    "AI Can Hacked: Vulnerability Hunting with AI",
    "AI Can Hacked",
    "Systematic vulnerability discovery and exploitation, accelerated with AI analysis and lab environments.",
    "https://www.amazon.com/dp/B0FSDW74N1",
  ),
  book(
    "web-hacking",
    "AI Can Hacked: Web Hacking with AI",
    "AI Can Hacked",
    "Web application security assessment with artificial intelligence in the loop.",
  ),
  book(
    "mobile-security",
    "AI Can Hacked: Mobile Security & APK Cracking with AI",
    "AI Can Hacked",
    "Mobile security testing, APK analysis, and AI-assisted mobile assessments.",
  ),
  book(
    "network-recon",
    "AI Can Hacked: Network Recon with AI",
    "AI Can Hacked",
    "Network reconnaissance mastered with AI-enhanced mapping and analysis.",
  ),
  book(
    "cloud-platform",
    "AI Can Hacked: Cloud & Platform Security with AI",
    "AI Can Hacked",
    "Multi-cloud security across AWS, Azure, and GCP with AI-integrated workflows.",
  ),
  book(
    "compliance-governance",
    "AI Can Hacked: Compliance & Governance with AI",
    "AI Can Hacked",
    "Cybersecurity compliance and governance with AI-assisted evidence and control mapping.",
  ),
  book(
    "secrets-supply-chains",
    "AI Can Hacked: Secrets & Supply Chains",
    "AI Can Hacked",
    "Supply-chain security and secrets management for modern software organizations.",
  ),
  book(
    "red-vs-blue",
    "AI Can Hacked: Red vs Blue Team Playbooks with AI",
    "AI Can Hacked",
    "Adversarial testing and defense playbooks for red and blue teams.",
  ),
  book(
    "osint",
    "AI Can Hacked: OSINT with AI",
    "AI Can Hacked",
    "Open-source intelligence training enhanced with AI collection and analysis.",
  ),
  book(
    "iot-ics",
    "AI Can Hacked: IoT & Industrial Control Systems Security with AI",
    "AI Can Hacked",
    "IoT and critical-infrastructure security for industrial environments.",
  ),
  book(
    "mitre-attack",
    "AI Can Hacked: MITRE ATT&CK in Practice",
    "AI Can Hacked",
    "Threat modeling, ATT&CK techniques, and defense strategies with AI.",
  ),
  book(
    "malware-re",
    "AI Can Hacked: Malware Analysis & Reverse Engineering with AI",
    "AI Can Hacked",
    "Malware analysis, reverse engineering, and AI-enhanced threat intelligence.",
    "https://www.amazon.com/Can-Hacked-Engineering-AI-Enhanced-Intelligence-ebook/dp/B0FSFH8383",
  ),
];

export const FEATURED_BOOKS = BOOKS.slice(0, 6);

export const AMAZON_AUTHOR_URL =
  "https://www.amazon.com/s?k=Bernie+Goldmann";
export const APPLE_BOOKS_AUTHOR_URL =
  "https://books.apple.com/us/search?term=Bernie%20Goldmann";
