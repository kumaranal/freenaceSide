"use client";

import { useEffect } from "react";
import sections from "@/lib/sections.json";

// Section id -> clean path shown in the address bar, e.g. "why" -> "/why".
const pathFor: Record<string, string> = Object.fromEntries(
  Object.entries(sections).map(([id, [path]]) => [id, `/${path}`]),
);
const idFor: Record<string, string> = Object.fromEntries(
  Object.entries(pathFor).map(([id, path]) => [path, id]),
);

function scrollToId(id: string | undefined, smooth: boolean) {
  if (!id) {
    window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "instant" });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: smooth ? "smooth" : "instant", block: "start" });
}

// Keeps the address bar on clean paths (/why, /process...) instead of /#why:
// - opening /why scrolls to the Why us section
// - menu links scroll smoothly and update the path
// - scrolling through the page updates the path to the section in view
// - old /#why links are tidied to /why
export default function SectionRouter() {
  useEffect(() => {
    // Old hash links: /#why -> /why
    const hashId = decodeURIComponent(window.location.hash.slice(1));
    if (hashId && pathFor[hashId]) history.replaceState(null, "", pathFor[hashId]);

    // While we scroll on purpose (page load, menu click, back button) the
    // path is already right, so the scroll tracker below stays quiet.
    let quietUntil = 0;
    // Set once the visitor scrolls or clicks, so the page-load jump never pulls them back.
    let moved = false;
    const goTo = (id: string | undefined, smooth: boolean) => {
      // Cleared early by the scrollend event; the timeout is only a fallback.
      quietUntil = Date.now() + (smooth ? 3000 : 300);
      scrollToId(id, smooth);
    };

    // Jump to the section for the current path once layout has settled.
    const initialId = idFor[window.location.pathname];
    const jump = () => {
      if (initialId && !moved) goTo(initialId, false);
    };
    const t = window.setTimeout(jump, 50);
    window.addEventListener("load", jump, { once: true });

    // Menu links: scroll in place instead of reloading the page.
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest<HTMLAnchorElement>("a[href]");
      if (!link || link.target === "_blank") return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      const hash = url.hash.slice(1);
      // In-page anchors such as the "skip to content" link: move there without adding #main to the address.
      if (hash && hash !== "top") {
        const target = document.getElementById(hash);
        if (!target || url.pathname !== window.location.pathname) return;
        e.preventDefault();
        moved = true;
        if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
        target.scrollIntoView({ block: "start" });
        return;
      }
      const id = idFor[url.pathname] ?? (url.pathname === "/" ? "" : undefined);
      if (id === undefined) return;
      e.preventDefault();
      moved = true;
      const path = id ? pathFor[id] : "/";
      if (window.location.pathname !== path || window.location.hash) history.pushState(null, "", path);
      goTo(id || undefined, true);
    }

    // Back / forward buttons.
    const onPop = () => {
      moved = true;
      goTo(idFor[window.location.pathname], true);
    };

    // As the visitor scrolls, show the path of the section in view
    // (replaceState, so scrolling does not fill up the back button history).
    const order = Object.keys(pathFor);
    let frame = 0;
    const track = () => {
      frame = 0;
      if (Date.now() < quietUntil) return;
      moved = true;
      const line = window.innerHeight / 3;
      let current: string | undefined;
      for (const id of order) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      // At the very bottom, the last section may never reach the line: use it if it is on screen.
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      const last = document.getElementById(order[order.length - 1]);
      if (atBottom && last && last.getBoundingClientRect().top < window.innerHeight) current = last.id;
      const path = current ? pathFor[current] : "/";
      if (window.location.pathname !== path) history.replaceState(null, "", path);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(track);
    };
    // When a deliberate scroll finishes, sync once in case it ended between sections.
    const onScrollEnd = () => {
      quietUntil = 0;
      onScroll();
    };

    document.addEventListener("click", onClick);
    window.addEventListener("popstate", onPop);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scrollend", onScrollEnd);
    return () => {
      window.clearTimeout(t);
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("load", jump);
      document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", onPop);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scrollend", onScrollEnd);
    };
  }, []);

  return null;
}
