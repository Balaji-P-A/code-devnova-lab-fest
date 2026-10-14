import React, { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation, useParams } from "react-router-dom";
import {
  ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, CheckCircle2,
  ChevronDown, Clock3, Code2, ExternalLink, Instagram, Mail, Menu, MoveUpRight,
  ShieldCheck, Sparkles, Users, X, Zap
} from "lucide-react";
import { fest, events, announcements } from "./data.js";


function MotionSystem() {
  const location = useLocation();
  useEffect(() => {
    document.documentElement.classList.add("motion-ready");
    const targets = document.querySelectorAll(
      ".hero-copy, .hero-visual, .section-heading, .about-content, .about-side, .event-card, .announcement, .all-events-cta, .faq-list details, .detail-title, .detail-art, .detail-facts > div, .round-row, .info-panel, .detail-register-inner, .switch-card"
    );
    targets.forEach((el, i) => {
      el.classList.add("reveal-item");
      el.style.setProperty("--reveal-delay", `${Math.min((i % 6) * 75, 375)}ms`);
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    targets.forEach((el) => observer.observe(el));

    const spotlightTargets = document.querySelectorAll(".event-card, .hero-visual, .detail-art, .announcement, .info-panel");
    const moveSpotlight = (event) => {
      const rect = event.currentTarget.getBoundingClientRect();
      event.currentTarget.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
      event.currentTarget.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
    };
    spotlightTargets.forEach((el) => el.addEventListener("pointermove", moveSpotlight));
    return () => {
      observer.disconnect();
      spotlightTargets.forEach((el) => el.removeEventListener("pointermove", moveSpotlight));
      document.documentElement.classList.remove("motion-ready");
    };
  }, [location.pathname]);
  return null;
}

function Brand({ footer = false }) {
  return (
    <Link to="/" className={`brand ${footer ? "brand-footer" : ""}`} aria-label="Code DevNova Lab home">
      <span className="brand-mark"><img src="/images/devnova-lab-logo.webp" alt="" /></span>
      <span className="brand-copy"><strong>CODE DEVNOVA LAB</strong><small>FEAST : EVENT </small></span>
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Brand />
        <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={open ? "nav-links nav-open" : "nav-links"}>
          <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
          <a href="/#about" onClick={() => setOpen(false)}>About</a>
          <NavLink to="/events" onClick={() => setOpen(false)}>Events <span className="nav-count">11</span></NavLink>
          <a href="/#updates" onClick={() => setOpen(false)}>Updates</a>
          <a className="nav-cta" href="/#events" onClick={() => setOpen(false)}>Explore fest <ArrowUpRight size={15} /></a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-about">
            <Brand footer />
            <p>A community for curious minds, creative builders, and people who want to turn ideas into action.</p>
            <span className="footer-tag"><span className="status-dot" /> Built by Code DevNova Lab</span>
          </div>
          <div className="footer-column">
            <h4>EXPLORE</h4>
            <Link to="/">Home</Link>
            <Link to="/events">All events</Link>
            <a href="/#updates">Announcements</a>
          </div>
          <div className="footer-column">
            <h4>THE FEST</h4>
            <a href="/#about">About NOVAFEST</a>
            <a href="/#events">Event directory</a>
            <a href="/#faq">FAQs</a>
          </div>
          <div className="footer-column">
            <h4>CONNECT</h4>
            <a href="mailto:codedevnovalab@gmail.com"><Mail size={15} /> Contact organizers</a>
            <a href="https://www.instagram.com/codedevnovalab/" target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram</a>
            <span className="footer-muted">Replace with official links</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Code DevNova Lab. All rights reserved.</span>
          <span className="footer-bottom-right">LEARN <b>·</b> BUILD <b>·</b> LAUNCH</span>
        </div>
      </div>
    </footer>
  );
}

function SectionHeading({ eyebrow, title, description, action }) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <div className="eyebrow"><span className="eyebrow-line" />{eyebrow}</div>}
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {action}
    </div>
  );
}

function EventCard({ event, featured = false }) {
  return (
    <article className={`event-card accent-${event.accent} ${featured ? "event-card-featured" : ""}`}>
      <div className="card-art">
        <div className="card-art-grid" />
        <span className="card-number">{event.number} / 11</span>
        <img className="event-logo-art" src={event.image} alt={`${event.name} event logo`} loading="lazy" />
        <span className="art-orbit orbit-one" />
        <span className="art-orbit orbit-two" />
        <span className="art-bottom-label">DEVNOVA LAB <span>®</span></span>
      </div>
      <div className="event-card-content">
        <div className="card-meta"><span>{event.category}</span><span className="card-status"><i /> DETAILS SOON</span></div>
        <h3>{event.name}</h3>
        <p className="event-type">{event.type}</p>
        <p className="event-short">{event.short}</p>
        <div className="card-footer">
          <span className="round-count"><Zap size={14} /> {event.rounds.length} planned rounds</span>
          <Link to={`/events/${event.id}`} className="card-arrow" aria-label={`View ${event.name}`}><ArrowUpRight size={19} /></Link>
        </div>
      </div>
    </article>
  );
}

function AnnouncementCard({ item, index }) {
  return (
    <article className="announcement">
      <div className="announcement-top"><span className={`announcement-index idx-${index}`}>0{index + 1}</span><span className="announcement-tag">{item.tag}</span></div>
      <span className="announcement-date"><CalendarDays size={13} /> {item.date}</span>
      <h3>{item.title}</h3>
      <p>{item.detail}</p>
    </article>
  );
}

function Home() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-grid" />
          <div className="hero-glow glow-left" />
          <div className="hero-glow glow-right" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="hero-kicker"><span className="live-dot" /> {fest.eyebrow}</div>
              <h1>Make room<br />for <span>what's next.</span></h1>
              <p className="hero-description">{fest.description}</p>
              <div className="hero-actions">
                <Link to="/events" className="button button-primary">Explore all events <ArrowRight size={17} /></Link>
                <a href="#about" className="button button-ghost">Discover the fest <ArrowDown size={16} /></a>
              </div>
              <div className="hero-trust"><span className="avatar-stack"><i>C</i><i>D</i><i>L</i></span><span>Curiosity is the starting point.<br /><b>Build something from it.</b></span></div>
            </div>
            <div className="hero-visual" aria-label="Abstract digital fest artwork">
              <div className="visual-top"><span>NDV / 26</span><span>FEST DIRECTORY <i className="tiny-dot" /></span></div>
              <div className="visual-core">
                <div className="core-ring ring-a" /><div className="core-ring ring-b" /><div className="core-ring ring-c" />
                <div className="core-center"><span>N</span><i>+</i></div>
                <span className="orbit-label label-one">IDEATE</span><span className="orbit-label label-two">CREATE</span><span className="orbit-label label-three">CONNECT</span>
                <span className="orbit-point point-one" /><span className="orbit-point point-two" /><span className="orbit-point point-three" />
              </div>
              <div className="visual-bottom"><span>THINK BEYOND</span><span>EST. 2026 <b>↗</b></span></div>
              <div className="visual-side-note">COMMUNITY<br />× CREATIVITY<br />× TECHNOLOGY</div>
            </div>
          </div>
          <div className="container hero-bottom">
            <span>SCROLL TO EXPLORE <ArrowDown size={14} /></span>
            <span className="hero-bottom-line" />
            <span>01 — 11 / EVENT DIRECTORY</span>
          </div>
        </section>

        <section className="fest-banner-section" aria-label="NovaFest visual banner"><div className="fest-banner-frame"><img src="/images/novafest-banner.webp" alt="NovaFest — a multi-event online competition by Code DevNova Lab" loading="eager" /><div className="banner-edge-glow" /></div></section>

        <section className="ticker" aria-label="Fest themes">
          <div className="ticker-track">
            {["IDEAS INTO ACTION", "THINK DIFFERENT", "BUILD TOGETHER", "MAKE AN IMPACT", "IDEAS INTO ACTION", "THINK DIFFERENT", "BUILD TOGETHER", "MAKE AN IMPACT"].map((item, i) => <span key={i}>{item}<b>✳</b></span>)}
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-layout">
            <div className="about-side">
              <div className="eyebrow"><span className="eyebrow-line" /> THE IDEA BEHIND THE FEST</div>
              <div className="about-stamp"><Sparkles size={19} /><span>OPEN<br />MINDS</span></div>
            </div>
            <div className="about-content">
              <h2>One community.<br /><span>Eleven ways</span> to stand out.</h2>
              <p>DevNova Lab brings different kinds of talent into one shared space. Whether you think in code, communicate through design, solve a case, or pitch a new idea, there is a challenge for you to explore.</p>
              <div className="about-stats">
                <div><strong>11</strong><span>INDEPENDENT EVENTS</span></div>
                <div><strong>03<span>+</span></strong><span>WAYS TO PARTICIPATE</span></div>
                <div><strong>01</strong><span>SHARED COMMUNITY</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section events-section" id="events">
          <div className="container">
            <SectionHeading eyebrow="FIND YOUR CHALLENGE" title={<>Your next move<br /><span>starts here.</span></>} description="Explore the event lineup. Open any card to discover its rounds, rules, updates, and registration details." action={<Link className="text-link" to="/events">View all 11 events <ArrowUpRight size={16} /></Link>} />
            <div className="event-grid">
              {events.slice(0, 6).map((event) => <EventCard event={event} key={event.id} />)}
            </div>
            <div className="all-events-cta"><div><span className="eyebrow"><span className="eyebrow-line" /> THE FULL LINEUP</span><h3>Eleven events.<br />Find your <span>thing.</span></h3></div><Link to="/events" className="button button-primary">Explore all 11 events <ArrowRight size={17} /></Link></div>
          </div>
        </section>

        <section className="section updates-section" id="updates">
          <div className="container">
            <SectionHeading eyebrow="THE LATEST SIGNAL" title={<>Updates from<br /><span>the lab.</span></>} description="Official announcements and event information will be published here." action={<span className="updates-status"><i /> LIVE UPDATE BOARD</span>} />
            <div className="announcement-grid">{announcements.map((item, i) => <AnnouncementCard item={item} index={i} key={item.title} />)}</div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-layout">
            <div><div className="eyebrow"><span className="eyebrow-line" /> GOOD TO KNOW</div><h2>Before you<br /><span>jump in.</span></h2><p>Have a look through the basics before registering for an event.</p></div>
            <div className="faq-list">
              <details><summary>Who can participate? <ChevronDown size={17} /></summary><p>{fest.eligibility}</p></details>
              <details><summary>How do I register? <ChevronDown size={17} /></summary><p>Open the event you are interested in and use its official registration link when available. Links are placeholders until organizers add the real URLs.</p></details>
              <details><summary>Where will event updates appear? <ChevronDown size={17} /></summary><p>Updates appear on this homepage and on the relevant event detail page. Check back for confirmed dates, round formats, and results.</p></details>
              <details><summary>Are the dates and rules final? <ChevronDown size={17} /></summary><p>Not yet. This starter site uses clearly marked placeholders. The organizers should confirm all dates, eligibility details, rules, and prizes before public launch.</p></details>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="cta-glow" />
          <div className="container final-cta-inner">
            <div className="eyebrow"><span className="eyebrow-line" /> YOUR MOVE</div>
            <h2>Got an idea?<br /><span>Give it a stage.</span></h2>
            <p>Explore the lineup and find the challenge that brings out your best.</p>
            <Link to="/events" className="button button-light">Find your event <ArrowRight size={17} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function EventsPage() {
  const [filter, setFilter] = useState("ALL");
  const categories = ["ALL", "QUIZ / KNOWLEDGE", "TECHNOLOGY", "PROBLEM SOLVING", "RESEARCH / PRESENTATION", "INNOVATION", "GENERATIVE AI", "DESIGN", "VISUAL CREATIVITY", "BUILD / INNOVATION", "VIDEO / MEDIA", "LOGIC / EXPLANATION"];
  const filtered = filter === "ALL" ? events : events.filter(e => e.category === filter);
  return (
    <>
      <main className="subpage">
        <section className="page-hero">
          <div className="container">
            <div className="eyebrow"><span className="eyebrow-line" /> THE EVENT DIRECTORY / 2026</div>
            <h1>Pick your<br /><span>challenge.</span></h1>
            <p>Eleven ways to think, create, compete, and connect. Find the event that matches your curiosity.</p>
            <div className="page-hero-meta"><span><span className="tiny-dot" /> 11 EVENTS</span><span>CODE DEVNOVA LAB</span><span>DETAILS UPDATED AS CONFIRMED</span></div>
          </div>
        </section>
        <section className="section directory-section">
          <div className="container">
            <div className="filter-bar">
              <span className="filter-label">FILTER BY CATEGORY</span>
              <div className="filter-chips">
                {categories.map(c => <button key={c} className={filter === c ? "filter-chip active" : "filter-chip"} onClick={() => setFilter(c)}>{c === "ALL" ? "All events" : c}</button>)}
              </div>
            </div>
            <div className="directory-results"><span>SHOWING <b>{String(filtered.length).padStart(2, "0")}</b> / 11 EVENTS</span><span>SELECT AN EVENT TO EXPLORE <ArrowDown size={13} /></span></div>
            <div className="event-grid">{filtered.map(event => <EventCard event={event} key={event.id} />)}</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function EventDetail() {
  const { id } = useParams();
  const event = events.find(e => e.id === id);
  if (!event) return <NotFound />;
  const currentIndex = events.findIndex(e => e.id === id);
  const nextEvent = events[(currentIndex + 1) % events.length];
  const prevEvent = events[(currentIndex - 1 + events.length) % events.length];
  return (
    <>
      <main className={`subpage detail-page accent-${event.accent}`}>
        <section className="detail-hero">
          <div className="container">
            <Link to="/events" className="back-link"><ArrowLeft size={15} /> Back to all events</Link>
            <div className="detail-hero-layout">
              <div className="detail-title">
                <div className="eyebrow"><span className="eyebrow-line" /> EVENT {event.number} / 11 <span className="detail-category">{event.category}</span></div>
                <h1>{event.name}<span className="title-period">.</span></h1>
                <p className="detail-type">{event.type}</p>
                <p className="detail-description">{event.description}</p>
                <div className="detail-actions">
                  {event.registrationUrl ? <a href={event.registrationUrl} target="_blank" rel="noreferrer" className="button button-primary">Register for this event <ExternalLink size={16} /></a> : <span className="button button-disabled">Registration link coming soon <Clock3 size={16} /></span>}
                  <a href="#rounds" className="button button-ghost">Explore rounds <ArrowDown size={15} /></a>
                </div>
                <p className="placeholder-note"><ShieldCheck size={14} /> Confirm event details with organizers before registering.</p>
              </div>
              <div className={`detail-art ${event.bannerImage ? "detail-art-banner" : ""}`} style={event.bannerImage ? { backgroundImage: `linear-gradient(180deg,rgba(4,5,18,.02),rgba(4,5,18,.22)),url(${event.bannerImage})` } : undefined}>
                {!event.bannerImage && <><div className="detail-art-grid" /><img className="detail-event-logo" src={event.image} alt={`${event.name} logo`} /></>}
                <div className="detail-art-bottom"><span>CODE DEVNOVA LAB</span><span>NOVAFEST / 26</span></div>
              </div>
            </div>
            <div className="detail-facts">
              <div><Users size={17} /><span>TEAM SIZE</span><b>{event.teamSize}</b></div>
              <div><CalendarDays size={17} /><span>EVENT DATE</span><b>To be announced</b></div>
              <div><Zap size={17} /><span>ROUNDS</span><b>{String(event.rounds.length).padStart(2, "0")} planned rounds</b></div>
            </div>
          </div>
        </section>

        <section className="section rounds-section" id="rounds">
          <div className="container">
            <SectionHeading eyebrow="HOW IT UNFOLDS" title={<>The rounds<span>.</span></>} description="The outline below is a planning template. Organizers should confirm the final format and rules before registration opens." />
            <div className="rounds-list">
              {event.rounds.map((round, i) => (
                <article className="round-row" key={round.name}>
                  <div className="round-number">0{i + 1}</div>
                  <div className="round-main"><h3>{round.name}</h3><p>{round.detail}</p></div>
                  <div className="round-mark">{i === event.rounds.length - 1 ? <CheckCircle2 size={20} /> : <ArrowUpRight size={20} />}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section event-info-section">
          <div className="container event-info-grid">
            <div className="info-panel">
              <div className="eyebrow"><span className="eyebrow-line" /> WHO CAN JOIN</div>
              <h3>Eligibility & format</h3>
              <p>{fest.eligibility}</p>
              <div className="info-line"><span>Team size</span><b>{event.teamSize}</b></div>
              <div className="info-line"><span>Registration deadline</span><b>To be announced</b></div>
              <div className="info-line"><span>Event date</span><b>To be announced</b></div>
            </div>
            <div className="info-panel info-panel-updates">
              <div className="eyebrow"><span className="eyebrow-line" /> EVENT BULLETIN</div>
              <h3>Latest updates</h3>
              {event.updates.map((u, i) => (
                <div className="detail-update" key={i}>
                  <span className="update-pill">{u.date}</span>
                  <h4>{u.title}</h4>
                  <p>{u.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="detail-register">
          <div className="container detail-register-inner">
            <div><div className="eyebrow"><span className="eyebrow-line" /> READY WHEN YOU ARE</div><h2>Make your<br /><span>next move.</span></h2><p>Check the finalized rules and return when registration opens.</p></div>
            {event.registrationUrl ? <a href={event.registrationUrl} target="_blank" rel="noreferrer" className="button button-primary">Register now <ArrowUpRight size={17} /></a> : <span className="button button-disabled">Registration opening soon <Clock3 size={16} /></span>}
          </div>
        </section>

        <section className="event-switcher container">
          <Link to={`/events/${prevEvent.id}`} className="switch-card"><span><ArrowLeft size={15} /> PREVIOUS EVENT</span><b>{prevEvent.name}</b><small>{prevEvent.type}</small></Link>
          <Link to={`/events/${nextEvent.id}`} className="switch-card switch-next"><span>NEXT EVENT <ArrowRight size={15} /></span><b>{nextEvent.name}</b><small>{nextEvent.type}</small></Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

function NotFound() {
  return <><main className="not-found container"><div className="eyebrow"><span className="eyebrow-line" /> LOST IN THE LAB</div><h1>404<span>.</span></h1><p>That page isn't in the directory yet.</p><Link to="/events" className="button button-primary">Back to events <ArrowRight size={16} /></Link></main><Footer /></>;
}

export default function App() {
  return (
    <>
      <MotionSystem />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
