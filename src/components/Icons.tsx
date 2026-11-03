import type { IconName } from "@/lib/site";

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function Icon({ name, sw = 1.75 }: { name: IconName | "mail" | "chat" | "phone" | "arrow" | "ext" | "pulse" | "leaf"; sw?: number }) {
  const p = { ...base, strokeWidth: sw };
  switch (name) {
    case "globe":
      return (<svg {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18z" /></svg>);
    case "code":
      return (<svg {...p}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18" /><path d="m9 13-2 2 2 2" /><path d="m15 13 2 2-2 2" /></svg>);
    case "bolt":
      return (<svg {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></svg>);
    case "chip":
      return (<svg {...p}><rect x="7" y="7" width="10" height="10" rx="2" /><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" /></svg>);
    case "megaphone":
      return (<svg {...p}><path d="M3 11v2a1 1 0 0 0 1 1h3l6 4V6L7 10H4a1 1 0 0 0-1 1z" /><path d="M17 9a4 4 0 0 1 0 6" /><path d="M19.5 6.5a8 8 0 0 1 0 11" /></svg>);
    case "star":
      return (<svg {...p}><path d="m12 3 2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.5 6.7 19.4l1.2-6L3.4 9.3l6-.7z" /></svg>);
    case "shield":
      return (<svg {...p}><path d="M12 3 4 6v6c0 4.5 3.2 8 8 9 4.8-1 8-4.5 8-9V6z" /><path d="m9 12 2 2 4-4" /></svg>);
    case "mail":
      return (<svg {...p} strokeWidth={sw === 1.75 ? 1.75 : sw}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>);
    case "chat":
      return (<svg {...p}><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" /></svg>);
    case "phone":
      return (<svg {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>);
    case "arrow":
      return (<svg {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
    case "ext":
      return (<svg {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>);
    case "pulse":
      return (<svg {...p}><path d="M4 14v-4M8 18V6M12 15V9M16 20V4M20 13v-2" /></svg>);
    case "leaf":
      return (<svg {...p}><path d="M12 21v-8" /><path d="M12 13c-4 0-7-3-7-8 5 0 7 3 7 8z" /><path d="M12 15c0-4 2.5-6 7-6 0 4-2.5 6-7 6z" /></svg>);
  }
}
