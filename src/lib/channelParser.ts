/**
 * Parses channel-cont.txt content into channels and region list.
 * Line format: "CC CHANNEL NAME" (CC = 2–3 letter country code).
 * Section headers: DOCUMENTARY, SPORTS, MUSIC, KIDS, etc. (no country prefix).
 */
const SECTION_HEADERS = new Set([
  "DOCUMENTARY",
  "SPORTS",
  "MUSIC",
  "KIDS",
  "LIFESTYLE",
  "OSN",
  "GENERAL",
  "ENTERTAINMENT",
  "NEWS",
  "MOVIES",
]);

const SKIP_LINES = new Set([
  "Skip to content",
  "Home",
  "Tv Channels",
  "Our Subscription",
  "Contact Us",
  "About",
  "24H FREE TEST",
  "Our Channels",
  "Our Live Tv Channels",
]);

export interface ChannelEntry {
  countryCode: string;
  name: string;
  category: string;
}

export interface ParsedChannels {
  channels: ChannelEntry[];
  regions: { code: string; label: string }[];
}

const REGION_LABELS: Record<string, string> = {
  NL: "Nederland",
  US: "USA",
  UK: "VK",
  DE: "Duitsland",
  FR: "Frankrijk",
  ES: "Spanje",
  IT: "Italië",
  BE: "België",
  PL: "Polen",
  TR: "Turkije",
  RU: "Rusland",
  BR: "Brazilië",
  AR: "Argentinië",
  MX: "Mexico",
  CA: "Canada",
  AU: "Australië",
  IN: "India",
  AE: "VAE",
  SA: "Saudi-Arabië",
  ZA: "Zuid-Afrika",
  EG: "Egypte",
  NG: "Nigeria",
  KE: "Kenia",
  MA: "Marokko",
  PT: "Portugal",
  SE: "Zweden",
  NO: "Noorwegen",
  DK: "Denemarken",
  FI: "Finland",
  AT: "Oostenrijk",
  CH: "Zwitserland",
  CZ: "Tsjechië",
  RO: "Roemenië",
  HU: "Hongarije",
  GR: "Griekenland",
  TH: "Thailand",
  ID: "Indonesië",
  MY: "Maleisië",
  PH: "Filipijnen",
  CN: "China",
  JP: "Japan",
  KR: "Zuid-Korea",
  AF: "Afghanistan",
  OSN: "OSN",
};

function getRegionLabel(code: string): string {
  return REGION_LABELS[code] || code;
}

export function parseChannelContent(raw: string): ParsedChannels {
  const lines = raw.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const channels: ChannelEntry[] = [];
  let currentCategory = "GENERAL";
  const regionSet = new Set<string>();

  for (const line of lines) {
    if (SKIP_LINES.has(line)) continue;
    if (line.startsWith("We Are Offering")) continue;

    const match = line.match(/^([A-Z]{2,3})\s+(.+)$/);
    if (match) {
      const [, code, name] = match;
      const countryCode = code.toUpperCase();
      regionSet.add(countryCode);
      channels.push({
        countryCode,
        name: name.trim(),
        category: currentCategory,
      });
      continue;
    }

    const upper = line.toUpperCase();
    if (SECTION_HEADERS.has(upper) || (line.length < 25 && /^[A-Z0-9 &+\/]+$/.test(line))) {
      currentCategory = line;
    }
  }

  const regionList = Array.from(regionSet).sort((a, b) => {
    if (a === "NL") return -1;
    if (b === "NL") return 1;
    return getRegionLabel(a).localeCompare(getRegionLabel(b));
  });

  const regions = regionList.map((code) => ({
    code,
    label: getRegionLabel(code),
  }));

  return { channels, regions };
}
