"use client";

import { useEffect } from "react";

// How long to wait for the WhatsApp app to take over before falling back to email.
const FALLBACK_MS = 1600;

function isMobile() {
  const nav = navigator as Navigator & { userAgentData?: { mobile?: boolean } };
  if (nav.userAgentData?.mobile) return true;
  if (/Android|iPhone|iPad|iPod|Mobile/i.test(nav.userAgent)) return true;
  // iPadOS reports itself as a Mac.
  return nav.platform === "MacIntel" && nav.maxTouchPoints > 1;
}

// Routes every link that carries data-wa / data-mail (see contactProps):
// phone with WhatsApp -> WhatsApp app, phone without it -> email, desktop -> the link's own href.
export default function ContactRouter() {
  useEffect(() => {
    if (!isMobile()) return;

    let timer: number | undefined;
    const cancel = () => {
      if (timer !== undefined) window.clearTimeout(timer);
      timer = undefined;
    };
    const onHide = () => {
      if (document.visibilityState === "hidden") cancel();
    };

    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest<HTMLAnchorElement>("a[data-wa][data-mail]");
      if (!link) return;
      e.preventDefault();
      cancel();
      const mail = link.dataset.mail!;
      // If the app opens, the page is hidden or loses focus and the timer is cancelled.
      timer = window.setTimeout(() => {
        timer = undefined;
        window.location.href = mail;
      }, FALLBACK_MS);
      window.location.href = link.dataset.wa!;
    }

    document.addEventListener("click", onClick);
    document.addEventListener("visibilitychange", onHide);
    window.addEventListener("pagehide", cancel);
    window.addEventListener("blur", cancel);
    return () => {
      cancel();
      document.removeEventListener("click", onClick);
      document.removeEventListener("visibilitychange", onHide);
      window.removeEventListener("pagehide", cancel);
      window.removeEventListener("blur", cancel);
    };
  }, []);

  return null;
}
