// Single place to edit company details. Replace the placeholders before launch.
export const site = {
  name: "[Your Company]",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com").replace(
    /\/$/,
    "",
  ),
  email: "hello@your-domain.com",
  phone: "+91 7003115108",
  title: "Software, LMS, Onboarding and AI Solutions for Business",
  description:
    "One team for the digital tools your business needs: custom software, LMS platforms, onboarding tools, practical AI, business automation, IoT and digital marketing. Fair pricing and support that doesn't end at launch.",
  ogDescription:
    "Custom software, learning platforms, onboarding tools and practical AI to help your business work smarter and grow, all under one umbrella.",
  keywords: [
    "software solutions",
    "custom software development",
    "learning management system development",
    "LMS development",
    "employee onboarding software",
    "AI solutions for business",
    "AI integration",
    "business automation",
    "IoT solutions",
    "digital marketing",
    "influencer marketing",
    "website development",
    "maintenance and support",
  ],
};

const digits = site.phone.replace(/\D/g, "");

export const telHref = `tel:+${digits}`;

export function mailFor(service?: string) {
  const subject = service ? `Enquiry: ${service}` : "Enquiry from your website";
  const lines = [
    "Hello,",
    "",
    "I found your website and would like to discuss a project for my business.",
    "",
  ];
  if (service) lines.push(`I am interested in: ${service}`);
  lines.push(
    "Business need: [write your business need here]",
    "",
    "Please get in touch.",
    "",
    "Thanks,",
    "[your name]",
  );
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\r\n"))}`;
}

export function waFor() {
  const lines = [
    "Hello! I found your website and would like to discuss a project for my business.",
    "",
    "Business need: [write your business need here]",
    "",
    "Name: [your name]",
  ];
  return `https://wa.me/${digits}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export type IconName =
  | "globe"
  | "code"
  | "bolt"
  | "chip"
  | "megaphone"
  | "star"
  | "shield"
  | "book"
  | "users"
  | "sparkles";

export const services: {
  icon: IconName;
  title: string;
  text: string;
  ask: string;
}[] = [
  {
    icon: "globe",
    title: "Online presence",
    text: "Websites, apps and online stores that make your business easy to find, easy to trust and easy to buy from.",
    ask: "Online presence (website, app or online store)",
  },
  {
    icon: "code",
    title: "Software solutions for business",
    text: "Software built around how you work: billing, stock, bookings, customer records and more, running safely in the cloud.",
    ask: "Software solutions for my business",
  },
  {
    icon: "book",
    title: "LMS and learning platforms",
    text: "Create a learning management system for your courses or team training, with organized lessons, learner progress and reporting.",
    ask: "LMS and learning platform development",
  },
  {
    icon: "users",
    title: "Onboarding tools",
    text: "Make employee or customer onboarding easier with guided steps, digital forms, useful resources and clear progress tracking.",
    ask: "Onboarding tools for my business",
  },
  {
    icon: "sparkles",
    title: "Practical AI for business",
    text: "Find useful ways to bring AI into your business, from automating routine tasks to building AI features into your existing tools.",
    ask: "AI solutions for my business",
  },
  {
    icon: "bolt",
    title: "Business automation",
    text: "Let software handle the repetitive work, like invoices, reminders and reports, so your team can focus on customers.",
    ask: "Business automation",
  },
  {
    icon: "chip",
    title: "IoT solutions",
    text: "Smart, connected devices and sensors that let you keep an eye on machines, stock, deliveries or energy use, right from your phone.",
    ask: "IoT solutions",
  },
  {
    icon: "megaphone",
    title: "Digital marketing",
    text: "Get seen by the right people on Google and social media, with ads and content that turn visitors into paying customers.",
    ask: "Digital marketing",
  },
  {
    icon: "star",
    title: "Influencer marketing support",
    text: "We find the right influencers for your brand and run the campaign, so your business gets in front of new audiences who are ready to buy.",
    ask: "Influencer marketing support",
  },
];

export const shifts = [
  {
    title: "They search before they call",
    text: "People look you up, compare and read before they decide. If you are hard to find, they simply choose someone who isn't.",
  },
  {
    title: "They trust who they see",
    text: "Customers follow the brands that show up in their feeds and the influencers they trust. If they never see you, they buy from someone they have seen.",
  },
  {
    title: "Slow, manual work holds you back",
    text: "While some teams still copy data by hand, others let software solutions do it for them, and spend that time winning customers.",
  },
];

export const work = [
  {
    tag: "Health-tech · Mobile app",
    name: "ReadMyRhythm",
    text: "A heart-health service where people upload ECG recordings from their smartwatch or home device and get them reviewed by a cardiologist, without an in-person appointment.",
    href: "https://readmyrhythm.com/",
    host: "readmyrhythm.com",
    gradient: "linear-gradient(135deg,#F6B73C,#F2784B 55%,#B07CFF)",
    icon: "pulse",
  },
  {
    tag: "Web platform · Golf & turf",
    name: "Turf Assistant",
    text: "One software for all turf operations: scheduling, labor, equipment, expenses, chemical applications and mapping for golf courses and sports turf.",
    href: "https://turfassistant.com/",
    host: "turfassistant.com",
    gradient: "linear-gradient(135deg,#4FD1C5,#3B82F6 55%,#8B5CF6)",
    icon: "leaf",
  },
] as const;

export const pillars = [
  {
    title: "Fair, competitive pricing",
    text: "Clear quotes with no hidden extras. Big-company quality, at a price that makes sense for businesses of any size.",
  },
  {
    title: "Software solutions that just work",
    text: "We build it properly and test it carefully, so it does exactly what your business needs, today and as you grow.",
  },
  {
    title: "Support that doesn't end at launch",
    text: "Many companies hand it over and disappear. We stay: fixing problems, making updates and helping you improve it for as long as you need us.",
    highlight: true,
  },
];

export const steps = [
  {
    title: "Tell us what you need",
    text: "Send a quick email or WhatsApp message. No technical words needed, just tell us your goal.",
  },
  {
    title: "We explain and quote",
    text: "We walk you through the options in plain language and give you a clear, fair price.",
  },
  {
    title: "We build, you review",
    text: "You see progress along the way and tell us what to change, so the result is what you wanted.",
  },
  {
    title: "We launch, then look after it",
    text: "We take it live and stay on hand to keep everything running smoothly as you grow.",
  },
];

export const clients = [
  "General Motors",
  "National Grid",
  "IQGEO",
  "Comcast",
  "Tata Consultancy Services",
];

export const aiUses: {
  icon: IconName;
  title: string;
  text: string;
  ask: string;
}[] = [
  {
    icon: "sparkles",
    title: "AI assistants for your customers",
    text: "A chat assistant on your website or WhatsApp that answers common questions at any hour and hands over to your team when a person is needed.",
    ask: "An AI assistant for my customers",
  },
  {
    icon: "bolt",
    title: "AI that does the paperwork",
    text: "Read invoices, forms and emails, pull out the details and fill in your systems, so nobody retypes data by hand.",
    ask: "AI to automate documents and data entry",
  },
  {
    icon: "code",
    title: "AI inside the tools you already use",
    text: "Add smart search, summaries, suggestions and drafting to your existing software, instead of replacing it.",
    ask: "AI features inside my existing software",
  },
  {
    icon: "book",
    title: "An assistant that knows your business",
    text: "Let your team ask questions in plain language and get answers from your own documents, policies and past work.",
    ask: "An AI assistant trained on my business documents",
  },
  {
    icon: "users",
    title: "AI for training and onboarding",
    text: "Personalised learning paths, instant answers for new joiners and quizzes built from your own material, inside your LMS.",
    ask: "AI for training and onboarding",
  },
  {
    icon: "globe",
    title: "AI for marketing and growth",
    text: "Faster content, clearer reports and sharper targeting, with a person always checking the result before it goes out.",
    ask: "AI for marketing and growth",
  },
];
