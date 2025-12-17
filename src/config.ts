/**
 * Site Configuration
 * Easily customize your site content here
 */

export interface SiteConfig {
  // Branding
  brand: {
    name: string;
    tagline: string;
    logo: string;
  };

  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    downloadButton: string;
    featuresButton: string;
    note: string;
  };

  // Features
  features: {
    title: string;
    description: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };

  // Recorder Section
  recorder: {
    title: string;
    features: string[];
  };

  // Sharing Section
  sharing: {
    title: string;
    description: string;
    methods: Array<{
      icon: string;
      title: string;
    }>;
  };

  // Use Cases
  useCases: {
    title: string;
    items: Array<{
      emoji: string;
      title: string;
      description: string;
    }>;
  };

  // Pricing
  pricing: {
    title: string;
    price: string;
    period: string;
    features: string[];
    buttonText: string;
  };

  // Footer
  footer: {
    cta: string;
    downloadButton: string;
    osRequirement: string;
    copyright: string;
  };

  // Navigation
  navigation: {
    links: Array<{
      text: string;
      href: string;
    }>;
  };

  // Quote
  quote: {
    text: string;
    author: string;
  };
}

export const siteConfig: SiteConfig = {
  brand: {
    name: "ooml.io",
    tagline: "The Offline Loom for macOS",
    logo: "logo.png"
  },

  hero: {
    title: "Record. Compress. Share. Without giving up your privacy.",
    subtitle: "A screen recorder built for creators, teachers, freelancers, and teams — no account, no subscription, no cloud storage, no tracking. Your recordings stay on your device, and only leave when you say so.",
    downloadButton: "Download for macOS",
    featuresButton: "View Features",
    note: "One-time purchase — no subscription. Works offline."
  },

  features: {
    title: "Your screen recordings should belong to you — not a platform.",
    description: "Most recording tools require logins, subscriptions, analytics tracking, watermarking, and mandatory cloud uploads. OOML doesn't. There are no accounts, no servers, and no hidden pipelines.",
    items: [
      {
        icon: "🔐",
        title: "Private by default",
        description: "Nothing leaves your Mac unless you share it."
      },
      {
        icon: "🌍",
        title: "Works fully offline",
        description: "Perfect for classrooms, NDA work, corporate environments, and travel."
      },
      {
        icon: "🎥",
        title: "Store locally, forever",
        description: "Not locked behind a subscription, not deleted by some SaaS retention timer."
      }
    ]
  },

  recorder: {
    title: "Screen recording that feels effortless.",
    features: [
      "🖥 Record full screen, app windows, or regions",
      "🎤 Add your voice, system audio, or both",
      "🎭 Floating camera bubble (circle, rounded, or square)",
      "🪄 Auto-compress large recordings to shareable size",
      "🔁 One-click share link (optional — only when you choose)"
    ]
  },

  sharing: {
    title: "Share recordings — without a platform holding them.",
    description: "Use AirDrop, Messages, email, USB drive, or a temporary encrypted upload link. No online accounts, no forced hosting.",
    methods: [
      { icon: "✈", title: "Quick sharing using AirDrop" },
      { icon: "📦", title: "Local folder access" },
      { icon: "⏳", title: "Optional expiring public link" },
      { icon: "🗑", title: "Delete anytime — you control the file" }
    ]
  },

  useCases: {
    title: "Built For Real Jobs",
    items: [
      {
        emoji: "🎓",
        title: "Teaching & Training",
        description: "Record lessons without exposing student data."
      },
      {
        emoji: "🔧",
        title: "Freelancers & Agencies",
        description: "Send demos and revisions without a platform watermark."
      },
      {
        emoji: "👨‍💻",
        title: "Developers",
        description: "Record bug reports, workflows, and documentation locally."
      },
      {
        emoji: "🧠",
        title: "Creators & Streamers",
        description: "Capture content privately before publishing."
      }
    ]
  },

  pricing: {
    title: "One-time purchase. Yours forever.",
    price: "$10",
    period: "lifetime license",
    features: [
      "No subscriptions",
      "No login",
      "No expiration",
      "Free updates"
    ],
    buttonText: "Buy & Download"
  },

  footer: {
    cta: "Ready to record without compromise?",
    downloadButton: "Download OOML",
    osRequirement: "macOS 12 or later. Apple Silicon optimized.",
    copyright: "© 2025 ooml.io. All rights reserved."
  },

  navigation: {
    links: [
      { text: "Privacy", href: "#privacy" },
      { text: "The Recorder", href: "#recorder" },
      { text: "Sharing", href: "#sharing" },
      { text: "Pricing", href: "#pricing" }
    ]
  },

  quote: {
    text: "Every screen recorder wants your data, your login, your subscription — we wanted one that just… records.",
    author: "— The OOML Team"
  }
};

