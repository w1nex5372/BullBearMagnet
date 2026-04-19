import {
  CandlestickChart,
  CircleCheckBig,
  Filter,
  Grid2x2,
  Layers3,
  Radar,
  ScanSearch,
  Shield,
  Target,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const landingNav = [
  { label: "Product", href: "#features" },
  { label: "Showcase", href: "#showcase" },
  { label: "Workflow", href: "#framework" },
  { label: "Trial", href: "#pricing" },
];

export const heroSignals = [
  { label: "Trend state", value: "Bull control", tone: "text-cyan-300" },
  { label: "Flip risk", value: "Rising near resistance", tone: "text-white/86" },
  { label: "Trap filter", value: "Await candle confirmation", tone: "text-emerald-300" },
];

export const heroBullets: Array<{ icon: LucideIcon; text: string }> = [
  { icon: CircleCheckBig, text: "Bull & Bear trend flips across all coins & timeframes" },
  { icon: CircleCheckBig, text: "Key Support/Resistance magnet zones" },
  { icon: CircleCheckBig, text: "Helps filter fakeouts and trend traps" },
];

export const heroTrustLine = "Trusted by traders across BTC and altcoin markets";

export const heroMetrics = [
  {
    label: "Trend continuation",
    value: "88%",
    barClass: "from-cyan-500 to-cyan-300",
  },
  {
    label: "Support reaction",
    value: "73%",
    barClass: "from-cyan-500 to-cyan-300",
  },
  {
    label: "Fakeout risk",
    value: "31%",
    barClass: "from-emerald-300 to-cyan-300",
  },
];

export const proofPositioning = {
  eyebrow: "Positioning",
  title: "Built for direction, not noise.",
  description:
    "BullBearMagnet gives traders a calmer way to read structure, direction, and confirmation without chasing every move.",
  trustLine:
    "Built for BTC context first, with the same confirmation-first lens across altcoins.",
};

export const proofCards: Array<{ icon: LucideIcon; label: string; value: string; text: string }> = [
  {
    icon: ScanSearch,
    label: "Primary lens",
    value: "Confirmation first",
    text: "Read what price is proving instead of forcing aggressive prediction narratives.",
  },
  {
    icon: Layers3,
    label: "Market coverage",
    value: "BTC + altcoins",
    text: "Use BTC as the directional anchor while keeping altcoin structure and rotation in view.",
  },
  {
    icon: Shield,
    label: "Operating style",
    value: "Clarity and discipline",
    text: "Built to reduce fakeout exposure and improve directional confidence in noisy conditions.",
  },
];

export const showcaseFrames = [
  {
    title: "Trend flip overview",
    description: "Primary read for directional shifts and cleaner market bias.",
    assetLabel: "hero-chart.png",
  },
  {
    title: "Magnet zone context",
    description: "Support and resistance reaction map inside a framed dark panel.",
    assetLabel: "chart-zones-placeholder",
  },
  {
    title: "Multi-timeframe read",
    description: "Structure and confirmation layered into a compact multi-timeframe view.",
    assetLabel: "chart-mtf-placeholder",
  },
];

export const featureCards: Array<{ icon: LucideIcon; title: string; text: string }> = [
  {
    icon: CandlestickChart,
    title: "Bull & Bear trend flips",
    text: "Spot when control changes hands so you can react to trend shifts with more clarity and less hesitation.",
  },
  {
    icon: Target,
    title: "Support / Resistance magnets",
    text: "Keep key magnet zones in view so reaction, rejection, and continuation areas are easier to respect.",
  },
  {
    icon: Filter,
    title: "Fakeout filtering",
    text: "Reduce low-quality entries by separating real directional follow-through from noisy trap moves.",
  },
  {
    icon: Grid2x2,
    title: "Multi-timeframe clarity",
    text: "Read the bigger picture and the immediate setup together without losing directional context.",
  },
  {
    icon: Radar,
    title: "Cleaner directional bias",
    text: "Get a simpler read on whether the market is favoring continuation, transition, or weakness.",
  },
  {
    icon: Workflow,
    title: "Confirmation-first workflow",
    text: "Stay focused on what price confirms instead of trying to predict tops, bottoms, or perfect reversals.",
  },
];

export const workflowSteps: Array<{
  step: string;
  title: string;
  text: string;
}> = [
  {
    step: "01",
    title: "Spot the structure",
    text: "Start by reading whether price is trending cleanly, losing control, or drifting into uncertainty.",
  },
  {
    step: "02",
    title: "Wait for confirmation",
    text: "Let the market prove direction before treating any move as real strength or real weakness.",
  },
  {
    step: "03",
    title: "Follow the stronger side",
    text: "Stay aligned with the side showing cleaner pressure instead of forcing early reversal calls.",
  },
  {
    step: "04",
    title: "Filter traps and stay aligned",
    text: "Use context and magnet zones to avoid fakeouts, trend traps, and low-quality entries.",
  },
];

export const storyPhilosophy = {
  eyebrow: "Philosophy",
  title: "Most traders do not fail from lack of effort. They fail from too much guessing.",
  description:
    "Trying to call perfect tops and bottoms usually ends in emotional entries, fakeout reactions, and expensive mistakes. BullBearMagnet takes the opposite approach: wait for confirmation, read direction clearly, and let structure lead.",
  closing:
    "Less prediction. Less noise. More clarity about the stronger side.",
};

export const storyCards = [
  {
    label: "The common trap",
    text: "Many traders burn out chasing reversals, reacting to every move, and treating noise as signal.",
  },
  {
    label: "The real problem",
    text: "The market is full of fakeouts, emotional guessing, and low-quality setups that look convincing for a moment.",
  },
  {
    label: "The BullBearMagnet view",
    text: "Focus on confirmation, direction, and structural reading so decisions are grounded in what price is proving.",
  },
  {
    label: "The practical result",
    text: "You spend less time forcing calls and more time staying aligned with the trend that actually matters.",
  },
];

export const pricingCards = [
  {
    name: "7-Day Free Trial",
    description:
      "Youll get 7 days full access to the indicator on TradingView. Works on BTC, alts, and all timeframes.",
    price: "Free",
    subtext: "No payment required",
    badge: "Start here",
    featured: true,
    cta: "Start Free Trial",
    items: ["No payment required", "No commitment", "Access usually granted within a few hours"],
  },
];

export const trialDetails = {
  heading: "Start Free Trial",
  description:
    "Youll get 7 days full access to the indicator on TradingView. Works on BTC, alts, and all timeframes.",
  helper: "Your TradingView Username",
  helperText: "Used only to grant TradingView access.",
  primaryCta: "Activate Trial",
  secondaryLinks: [
    {
      label: "View full indicator details on TradingView",
      href: "https://www.tradingview.com/",
    },
    {
      label: "Follow updates on X",
      href: "https://x.com/",
    },
  ],
  contact: "bullbearmagnet@gmail.com",
  disclaimer:
    "This is not a get rich quick tool. It helps you stay aligned with the trend and avoid costly mistakes.",
};

export const faqs = [
  {
    question: "What is BullBearMagnet?",
    answer:
      "BullBearMagnet is a TradingView indicator built to help traders stay on the right side of the market through confirmation, trend direction, and structural context.",
  },
  {
    question: "Who is BullBearMagnet for?",
    answer:
      "It is for traders who want a cleaner way to read trend flips, support and resistance magnet zones, and fakeout risk without relying on emotional guesswork.",
  },
  {
    question: "Does it work on BTC and altcoins?",
    answer:
      "Yes. It is designed to work across BTC and altcoin markets, and it can be used across multiple timeframes depending on your workflow.",
  },
  {
    question: "Is it suitable for beginners?",
    answer:
      "Yes, especially for traders who want more structure and less noise. The goal is not to overwhelm you with complexity, but to help you focus on direction and confirmation.",
  },
  {
    question: "Is this a signal group?",
    answer:
      "No. BullBearMagnet is not a signal group. It is a tool designed to support better market reading and more disciplined decisions.",
  },
  {
    question: "How does the 7-day free trial work?",
    answer:
      "The free trial gives you 7 days of full access to the indicator on TradingView. No payment is required, no commitment is needed, and access is usually granted within a few hours.",
  },
];

export const footerLinks = [
  { label: "Product", href: "#features" },
  { label: "Showcase", href: "#showcase" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "mailto:bullbearmagnet@gmail.com" },
];

export const footerMeta = {
  productLine: "A simple system to stay on the right side of the market.",
  copyright: `Copyright ${new Date().getFullYear()} BullBearMagnet. All rights reserved.`,
  socials: [
    { label: "X", href: "https://x.com/" },
    { label: "TradingView", href: "https://www.tradingview.com/" },
  ],
};
