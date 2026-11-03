import { Icon } from "@/components/Icons";
import ThemeToggle from "@/components/ThemeToggle";
import { clients, mailFor, pillars, services, shifts, site, steps, telHref, waFor, work } from "@/lib/site";

const mailGeneric = mailFor();
const waGeneric = waFor();

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: `${site.url}/`,
      name: site.name,
      description: site.description,
      inLanguage: "en",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: `${site.url}/`,
      description:
        "Software solutions company offering online presence, business software, automation, IoT solutions, digital marketing and influencer marketing, with ongoing maintenance and support.",
      email: site.email,
      telephone: site.phone,
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: [...services.map((s) => s.title), "Maintenance and support"].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <a className="skip" href="#main">Skip to content</a>

      <header style={{ position: "sticky", top: 0, zIndex: 40, background: "var(--nav)", borderBottom: "1px solid var(--line2)" }}>
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, minHeight: 72 }}>
          <a href="#top" aria-label={`${site.name} home`} style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--fg)", textDecoration: "none", minHeight: 44 }}>
            <span aria-hidden="true" style={{ width: 32, height: 32, borderRadius: 9, background: "var(--grad)", display: "grid", placeItems: "center" }}>
              <span style={{ width: 14, height: 14, background: "var(--ink)", transform: "rotate(45deg)", borderRadius: 3 }} />
            </span>
            <span className="disp" style={{ fontWeight: 700, fontSize: 21, letterSpacing: "-.02em" }}>{site.name}</span>
          </a>
          <nav className="nav-links" aria-label="Primary" style={{ display: "flex", gap: 32 }}>
            <a className="nav-link" href="#services">Solutions</a>
            <a className="nav-link" href="#work">Our work</a>
            <a className="nav-link" href="#why">Why us</a>
            <a className="nav-link" href="#process">How it works</a>
            <a className="nav-link" href="#contact">Contact</a>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <ThemeToggle />
            <a className="btn btn-primary" href={mailGeneric} style={{ minHeight: 44, padding: "0 20px", fontSize: 15 }}>
              <Icon name="mail" sw={2} />
              Email us
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* HERO */}
        <section id="top" style={{ position: "relative", overflow: "hidden", background: "var(--hero)", color: "var(--fg)" }}>
          <div className="grid-bg" aria-hidden="true" />
          <div className="blob" aria-hidden="true" />
          <div className="blob2" aria-hidden="true" />
          <div className="wrap" style={{ position: "relative", paddingTop: "clamp(56px,8vw,112px)", paddingBottom: "clamp(64px,8vw,112px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(480px,100%),1fr))", gap: 56, alignItems: "center" }}>
            <div>
              <p className="mono hl" style={{ ["--i" as string]: 0, margin: 0, color: "var(--accent)" }}>Software solutions · Automation · Digital marketing</p>
              <h1 className="disp hl" style={{ ["--i" as string]: 1, margin: "20px 0 24px", fontSize: "clamp(42px,5.6vw,78px)", lineHeight: 1.02, letterSpacing: "-.035em", fontWeight: 700, textWrap: "balance" }}>
                Your business deserves to <span className="gt">shine online.</span> We bring everything you need to make it happen
              </h1>
              <p className="hl" style={{ ["--i" as string]: 2, margin: "0 0 36px", maxWidth: 580, fontSize: 19, color: "var(--muted)", textWrap: "pretty" }}>
                From custom software and smart automation that save you hours every week, to standout website and marketing that bring customers straight to your door. Best of all, we don&apos;t disappear after launch—we&apos;re here to support your growth for the long haul.
              </p>
              <div className="hl" style={{ ["--i" as string]: 3, display: "flex", flexWrap: "wrap", gap: 14 }}>
                <a className="btn btn-primary" href={mailGeneric}>
                  <Icon name="mail" sw={2} />
                  Tell us what you need
                  <span className="go"><Icon name="arrow" sw={2} /></span>
                </a>
                <a className="btn btn-ghost" href={waGeneric} target="_blank" rel="noopener noreferrer">
                  <Icon name="chat" sw={2} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="hl" style={{ ["--i" as string]: 3, position: "relative", padding: "0 0 28px" }} aria-hidden="true">
              <div className="float" style={{ position: "relative" }}>
                <div style={{ background: "var(--panel)", border: "1px solid var(--line)", borderRadius: 22, boxShadow: "var(--shadow)", overflow: "hidden" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "14px 18px", borderBottom: "1px solid var(--line2)" }}>
                    {[0, 1, 2].map((i) => (
                      <span key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--dot)" }} />
                    ))}
                    <span className="mono" style={{ marginLeft: 10, color: "var(--muted)", fontSize: 11 }}>From local to global</span>
                  </div>
                  <div style={{ padding: 24, display: "grid", gap: 20 }}>
                    {[
                      ["Online presence", "Live", 5, 0],
                      ["Software solutions", "Running", 6.5, 0.4],
                      ["Automation & IoT", "Saving hours", 4.2, 0.8],
                      ["Digital & influencer marketing", "Reaching customers", 7.5, 1.2],
                    ].map(([label, status, d, delay]) => (
                      <div key={label as string}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, fontSize: 15, marginBottom: 9 }}>
                          <span style={{ fontWeight: 600 }}>{label}</span>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--ok)", fontSize: 13 }}>
                            <i className="pulse" style={{ animationDelay: `${delay}s` }} />
                            {status}
                          </span>
                        </div>
                        <div style={{ height: 6, borderRadius: 99, background: "var(--track)", overflow: "hidden" }}>
                          <div className="fill" style={{ ["--d" as string]: `${d}s` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: "16px 24px", borderTop: "1px solid var(--line2)", fontFamily: "var(--font-mono),ui-monospace,monospace", fontSize: 14, color: "var(--fg2)" }}>
                    <span style={{ color: "var(--accent)" }}>&gt;</span> <span className="typing">growing your business.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLIENTS */}
        <section aria-labelledby="clients-h" style={{ background: "var(--bg2)", borderTop: "1px solid var(--line2)", borderBottom: "1px solid var(--line2)", color: "var(--fg)", padding: "44px 0" }}>
          <div className="wrap">
            <h2 id="clients-h" className="mono" style={{ margin: "0 0 26px", textAlign: "center", color: "var(--muted)", fontSize: 12 }}>Our developers have worked for</h2>
          </div>
          <div className="marquee">
            <div className="track disp">
              {clients.map((c) => (<div className="client" key={c}>{c}</div>))}
              {clients.map((c) => (<div className="client dup" aria-hidden="true" key={`d-${c}`}>{c}</div>))}
            </div>
          </div>
        </section>

        {/* THE SHIFT */}
        <section id="shift" aria-labelledby="shift-h" style={{ background: "linear-gradient(120deg,#F6B73C,#F59E4B 55%,#F2784B)", color: "var(--ink)", padding: "clamp(72px,9vw,120px) 0" }}>
          <div className="wrap">
            <div className="rv" style={{ maxWidth: 800, marginBottom: 48 }}>
              <p className="mono" style={{ margin: "0 0 16px", color: "var(--ink)" }}>The world has moved online</p>
              <h2 id="shift-h" className="disp" style={{ margin: 0, fontSize: "clamp(32px,4vw,54px)", lineHeight: 1.05, letterSpacing: "-.03em", fontWeight: 700, textWrap: "balance" }}>
                Customers now choose a business on their phone, before they ever call you.
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(280px,100%),1fr))", gap: 20 }}>
              {shifts.map((s, i) => (
                <article className="fomo rv" key={s.title}>
                  <p className="mono" style={{ margin: "0 0 14px", color: "var(--amber)" }}>{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="disp" style={{ margin: "0 0 10px", fontSize: 25, lineHeight: 1.15, letterSpacing: "-.02em" }}>{s.title}</h3>
                  <p style={{ margin: 0, color: "var(--muted)" }}>{s.text}</p>
                </article>
              ))}
            </div>
            <div className="rv" style={{ marginTop: 44, display: "flex", flexWrap: "wrap", alignItems: "center", gap: "20px 32px" }}>
              <p className="disp" style={{ margin: 0, fontSize: "clamp(22px,2.4vw,30px)", fontWeight: 700, letterSpacing: "-.02em", maxWidth: 620, textWrap: "balance" }}>
                The good news: it is not too late. We will help you catch up, and get ahead.
              </p>
              <a className="btn btn-ink" href={mailGeneric}>
                Get started today
                <span className="go"><Icon name="arrow" sw={2} /></span>
              </a>
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section id="services" aria-labelledby="services-h" style={{ background: "var(--bg)", padding: "clamp(72px,9vw,120px) 0" }}>
          <div className="wrap">
            <div className="rv" style={{ maxWidth: 760, marginBottom: 56 }}>
              <p className="mono" style={{ margin: "0 0 16px", color: "var(--accent)" }}>One umbrella, every solution</p>
              <h2 id="services-h" className="disp" style={{ margin: "0 0 18px", fontSize: "clamp(32px,4vw,54px)", lineHeight: 1.05, letterSpacing: "-.03em", fontWeight: 700, textWrap: "balance" }}>
                Everything your business needs to <span className="gt">grow</span>
              </h2>
              <p style={{ margin: 0, fontSize: 18, color: "var(--muted)", textWrap: "pretty" }}>
                No juggling different agencies. No technical knowledge needed. Tell us what you want to achieve, and we take care of the rest.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(320px,100%),1fr))", gap: 20 }}>
              {services.map((s) => (
                <article className="card rv" key={s.title}>
                  <div className="icon-tile"><Icon name={s.icon} /></div>
                  <h3 className="disp" style={{ margin: "8px 0 0", fontSize: 24, lineHeight: 1.15, letterSpacing: "-.02em" }}>{s.title}</h3>
                  <p style={{ margin: 0, color: "var(--muted)" }}>{s.text}</p>
                  <a className="more" href={mailFor(s.ask)}>
                    Ask about this <Icon name="arrow" sw={2} />
                  </a>
                </article>
              ))}
            </div>

            <div className="rv" style={{ marginTop: 20, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 20, padding: "28px 30px", borderRadius: 22, border: "1px solid var(--accent)", background: "var(--accentbg2)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 18, minWidth: 0, flex: "1 1 420px" }}>
                <div className="icon-tile" style={{ background: "var(--grad)", color: "var(--ink)", flex: "none" }}><Icon name="shield" /></div>
                <div>
                  <h3 className="disp" style={{ margin: "0 0 4px", fontSize: 24, lineHeight: 1.15, letterSpacing: "-.02em" }}>And with every solution: maintenance and support</h3>
                  <p style={{ margin: 0, color: "var(--muted)" }}>If something needs changing, or you just need help, we are a message away. Most companies build it and disappear. We don&apos;t.</p>
                </div>
              </div>
              <a className="more" href={mailFor("Maintenance and support")} style={{ marginTop: 0 }}>
                Ask about support <Icon name="arrow" sw={2} />
              </a>
            </div>
          </div>
        </section>

        {/* OUR WORK */}
        <section id="work" aria-labelledby="work-h" style={{ background: "var(--bg2)", color: "var(--fg)", padding: "clamp(72px,9vw,120px) 0", borderTop: "1px solid var(--line2)" }}>
          <div className="wrap">
            <div className="rv" style={{ maxWidth: 760, marginBottom: 56 }}>
              <p className="mono" style={{ margin: "0 0 16px", color: "var(--accent)" }}>Proof, not promises</p>
              <h2 id="work-h" className="disp" style={{ margin: "0 0 18px", fontSize: "clamp(32px,4vw,54px)", lineHeight: 1.05, letterSpacing: "-.03em", fontWeight: 700, textWrap: "balance" }}>
                Products our developers have <span className="gt">built</span>
              </h2>
              <p style={{ margin: 0, fontSize: 18, color: "var(--muted)", textWrap: "pretty" }}>
                Real software, used by real people. Here are some of the products our team has worked on, so you can see exactly what you are getting.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(340px,100%),1fr))", gap: 24 }}>
              {work.map((w) => (
                <article className="work rv" key={w.name}>
                  <div className="work-art" style={{ ["--g" as string]: w.gradient }}>
                    <span className="work-tag mono">{w.tag}</span>
                    <div className="ico"><Icon name={w.icon} /></div>
                  </div>
                  <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                    <h3 className="disp" style={{ margin: 0, fontSize: 28, lineHeight: 1.1, letterSpacing: "-.02em" }}>{w.name}</h3>
                    <p style={{ margin: 0, color: "var(--muted)" }}>{w.text}</p>
                    <a className="more" href={w.href} target="_blank" rel="noopener noreferrer" style={{ marginTop: 0 }}>
                      Visit {w.host} <Icon name="ext" sw={2} />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="rv" style={{ marginTop: 36, display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 28px" }}>
              <p className="disp" style={{ margin: 0, fontSize: "clamp(20px,2.2vw,26px)", fontWeight: 700, letterSpacing: "-.02em" }}>
                Want to see more? We will walk you through our past work.
              </p>
              <a className="btn btn-primary" href={mailFor("A walkthrough of your past projects")}>
                Ask for a walkthrough
                <span className="go"><Icon name="arrow" sw={2} /></span>
              </a>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section id="why" aria-labelledby="why-h" style={{ background: "var(--bg)", color: "var(--fg)", padding: "clamp(72px,9vw,120px) 0", position: "relative", overflow: "hidden", borderTop: "1px solid var(--line2)" }}>
          <div className="wrap">
            <div className="rv" style={{ maxWidth: 760, marginBottom: 56 }}>
              <p className="mono" style={{ margin: "0 0 16px", color: "var(--accent)" }}>What sets us apart</p>
              <h2 id="why-h" className="disp" style={{ margin: 0, fontSize: "clamp(32px,4vw,54px)", lineHeight: 1.05, letterSpacing: "-.03em", fontWeight: 700, textWrap: "balance" }}>
                Why choose us
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))", gap: 24 }}>
              {pillars.map((p, i) => (
                <article className="pillar rv" key={p.title} style={p.highlight ? { borderColor: "var(--accent)", background: "var(--accentbg2)" } : undefined}>
                  <div className="bignum disp" aria-hidden="true">{String(i + 1).padStart(2, "0")}</div>
                  {p.highlight && <p className="mono" style={{ margin: "20px 0 8px", color: "var(--accent)", fontSize: 11 }}>Where we are different</p>}
                  <h3 className="disp" style={{ margin: p.highlight ? "0 0 12px" : "20px 0 12px", fontSize: 28, lineHeight: 1.1, letterSpacing: "-.02em" }}>{p.title}</h3>
                  <p style={{ margin: 0, color: "var(--muted)" }}>{p.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" aria-labelledby="process-h" style={{ background: "var(--bg2)", color: "var(--fg)", padding: "clamp(72px,9vw,120px) 0" }}>
          <div className="wrap">
            <div className="rv" style={{ maxWidth: 720, marginBottom: 56 }}>
              <p className="mono" style={{ margin: "0 0 16px", color: "var(--accent)" }}>How it works</p>
              <h2 id="process-h" className="disp" style={{ margin: 0, fontSize: "clamp(32px,4vw,54px)", lineHeight: 1.05, letterSpacing: "-.03em", fontWeight: 700, textWrap: "balance" }}>
                Simple from the first message to long after launch
              </h2>
            </div>
            <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(240px,100%),1fr))", gap: 32 }}>
              {steps.map((s, i) => (
                <li className="rv" key={s.title} style={{ position: "relative", paddingTop: 30 }}>
                  <div className="draw" aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "var(--line3)" }} />
                  <div aria-hidden="true" style={{ position: "absolute", top: -6, left: 0, width: 14, height: 14, borderRadius: "50%", background: "var(--grad)", border: "2px solid var(--bg2)" }} />
                  <p className="mono" style={{ margin: "0 0 10px", color: "var(--muted)" }}>Step {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="disp" style={{ margin: "0 0 8px", fontSize: 24, lineHeight: 1.15, letterSpacing: "-.02em" }}>{s.title}</h3>
                  <p style={{ margin: 0, color: "var(--muted)" }}>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" aria-labelledby="contact-h" style={{ background: "var(--hero)", color: "var(--fg)", padding: "clamp(72px,9vw,120px) 0", position: "relative", overflow: "hidden", borderTop: "1px solid var(--line2)" }}>
          <div className="blob" aria-hidden="true" style={{ top: "auto", bottom: -260, right: "auto", left: -200 }} />
          <div className="wrap" style={{ position: "relative" }}>
            <div className="rv" style={{ maxWidth: 760, margin: "0 auto 48px", textAlign: "center" }}>
              <p className="mono" style={{ margin: "0 0 16px", color: "var(--accent)" }}>Let&apos;s talk</p>
              <h2 id="contact-h" className="disp" style={{ margin: "0 0 18px", fontSize: "clamp(32px,4vw,54px)", lineHeight: 1.05, letterSpacing: "-.03em", fontWeight: 700, textWrap: "balance" }}>
                Tell us what your business needs. We&apos;ll take it from there.
              </h2>
              <p style={{ margin: 0, fontSize: 18, color: "var(--muted)", textWrap: "pretty" }}>
                Tap any option below. Your email or WhatsApp opens with the message already written. You only add a line about your business need and press send.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))", gap: 18, maxWidth: 1040, margin: "0 auto" }}>
              <a className="tile rv" href={mailGeneric}>
                <span className="ic"><Icon name="mail" /></span>
                <span style={{ minWidth: 0 }}>
                  <span className="mono" style={{ display: "block", color: "var(--muted)", fontSize: 11 }}>Email us</span>
                  <span style={{ display: "block", fontWeight: 600, fontSize: 18, wordBreak: "break-all" }}>{site.email}</span>
                  <span style={{ display: "block", color: "var(--muted)", fontSize: 14 }}>Opens a ready-written email</span>
                </span>
                <span className="go"><Icon name="arrow" sw={2} /></span>
              </a>
              <a className="tile rv" href={waGeneric} target="_blank" rel="noopener noreferrer">
                <span className="ic"><Icon name="chat" /></span>
                <span style={{ minWidth: 0 }}>
                  <span className="mono" style={{ display: "block", color: "var(--muted)", fontSize: 11 }}>WhatsApp</span>
                  <span style={{ display: "block", fontWeight: 600, fontSize: 18 }}>{site.phone}</span>
                  <span style={{ display: "block", color: "var(--muted)", fontSize: 14 }}>Opens a ready-written message</span>
                </span>
                <span className="go"><Icon name="arrow" sw={2} /></span>
              </a>
              <a className="tile rv" href={telHref}>
                <span className="ic"><Icon name="phone" /></span>
                <span style={{ minWidth: 0 }}>
                  <span className="mono" style={{ display: "block", color: "var(--muted)", fontSize: 11 }}>Call us</span>
                  <span style={{ display: "block", fontWeight: 600, fontSize: 18 }}>{site.phone}</span>
                  <span style={{ display: "block", color: "var(--muted)", fontSize: 14 }}>Prefer to talk? Tap to call</span>
                </span>
                <span className="go"><Icon name="arrow" sw={2} /></span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot" style={{ background: "#070B17", color: "#fff", padding: "56px 0 40px", borderTop: "1px solid rgba(255,255,255,.08)" }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(240px,100%),1fr))", gap: 36 }}>
          <div>
            <a href="#top" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "#fff", textDecoration: "none", minHeight: 44 }}>
              <span aria-hidden="true" style={{ width: 28, height: 28, borderRadius: 8, background: "var(--grad)", display: "grid", placeItems: "center" }}>
                <span style={{ width: 12, height: 12, background: "var(--ink)", transform: "rotate(45deg)", borderRadius: 3 }} />
              </span>
              <span className="disp" style={{ fontWeight: 700, fontSize: 19, letterSpacing: "-.02em" }}>{site.name}</span>
            </a>
            <p style={{ margin: "8px 0 0", color: "var(--muted)", maxWidth: 340 }}>
              Software solutions, automation, IoT, digital and influencer marketing. Everything your business needs to grow, under one umbrella.
            </p>
          </div>
          <nav aria-label="Footer" style={{ display: "flex", flexDirection: "column" }}>
            <a className="flink" href="#services">Solutions</a>
            <a className="flink" href="#why">Why us</a>
            <a className="flink" href="#process">How it works</a>
            <a className="flink" href="#contact">Contact</a>
          </nav>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <a className="flink" href={mailGeneric}>{site.email}</a>
            <a className="flink" href={waGeneric} target="_blank" rel="noopener noreferrer">WhatsApp {site.phone}</a>
            <a className="flink" href={telHref}>Call {site.phone}</a>
          </div>
        </div>
        <div className="wrap" style={{ marginTop: 36, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,.1)", color: "var(--muted)", fontSize: 14 }}>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </footer>

      <div style={{ position: "fixed", right: 20, bottom: 20, zIndex: 50 }}>
        <a className="fab" href={waGeneric} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp">
          <Icon name="chat" sw={2} />
          <span>WhatsApp us</span>
        </a>
      </div>
    </>
  );
}
