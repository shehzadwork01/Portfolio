import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { getImages } from "./projectImages.js";
import CustomCursor from "./CustomCursor.jsx";
import {
  profile,
  nav,
  about,
  skills,
  projects,
  facts,
  services,
} from "./data.js";

const Icon = {
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3V9.75zm6.5 0h3.83v1.54h.05c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.79 2.66 4.79 6.11V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.59V21h-4V9.75z" />
    </svg>
  ),
};

function Socials() {
  const waText = encodeURIComponent(
    "Hi Shehzad, I found your portfolio and would like to talk.",
  );
  const mailSubject = encodeURIComponent("Hello from your portfolio");
  return (
    <div className="socials">
      {profile.whatsapp && (
        <a
          href={`https://wa.me/${profile.whatsapp}?text=${waText}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          {Icon.whatsapp}
        </a>
      )}
      {profile.email && (
        <a
          href={`mailto:${profile.email}?subject=${mailSubject}`}
          aria-label={`Send an email to ${profile.email}`}
          title="Send an email"
        >
          <span className="socials__at" aria-hidden="true">
            @
          </span>
        </a>
      )}
      {profile.linkedin && (
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          title="LinkedIn"
        >
          {Icon.linkedin}
        </a>
      )}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" aria-label="Back to top">
          <span className="nav__logo">{profile.initials}</span>
          <span className="nav__name">{profile.name}</span>
        </a>
        <nav
          id="menu"
          className={`nav__links ${open ? "is-open" : ""}`}
          aria-label="Primary"
        >
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a
            className="btn btn--dark btn--sm nav__cta"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Get in touch
          </a>
        </nav>
        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="menu"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return setShown(true);
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setShown(true), io.disconnect()),
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${shown ? "is-in" : ""} ${className}`}>
      {children}
    </div>
  );
}

function Section({ id, label, title, children, alt }) {
  return (
    <section id={id} className={`section ${alt ? "section--alt" : ""}`}>
      <div className="container">
        <Reveal>
          <p className="label">{label}</p>
          <h2 className="section__title">{title}</h2>
          {children}
        </Reveal>
      </div>
    </section>
  );
}

const TOPICS = [
  "Job opportunity",
  "Freelance project",
  "Collaboration",
  "Something else",
];

function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("botcheck")) return; // honeypot: bots fill this in

    const key = import.meta.env.VITE_WEB3FORMS_KEY;
    if (!key) {
      setError(
        "The contact form isn't configured yet. Please use the WhatsApp or email icons instead.",
      );
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: key,
          subject: `Portfolio contact: ${data.get("topic")} (${data.get("name")})`,
          from_name: "Portfolio contact form",
          name: data.get("name"),
          email: data.get("email"),
          topic: data.get("topic"),
          message: data.get("message"),
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success)
        throw new Error(json.message || "Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setError(
        "Something went wrong. Please try again or use the WhatsApp or email icons.",
      );
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="form form--done" role="status">
        <h3>Message sent</h3>
        <p>Thanks for reaching out. I'll reply to you by email soon.</p>
        <button
          type="button"
          className="btn btn--ghost-light"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__row">
        <label>
          <span>Name</span>
          <input
            name="name"
            type="text"
            required
            maxLength={80}
            autoComplete="name"
          />
        </label>
        <label>
          <span>Email</span>
          <input
            name="email"
            type="email"
            required
            maxLength={120}
            autoComplete="email"
          />
        </label>
      </div>
      <label>
        <span>I'm reaching out about</span>
        <select name="topic" defaultValue={TOPICS[0]}>
          {TOPICS.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label>
        <span>Message</span>
        <textarea
          name="message"
          rows={5}
          required
          minLength={10}
          maxLength={3000}
          placeholder="Tell me a little about what you need."
        />
      </label>
      <input
        type="checkbox"
        name="botcheck"
        className="form__hp"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <button
        className="btn btn--primary"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send message →"}
      </button>
      {status === "error" && (
        <p className="form__error" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="kicker">
            <span className="kicker__bar" />
            {profile.name}
            <em>{profile.role}</em>
          </p>
          <h1>
            <span>Engineering</span>
            <span>software</span>
            <span className="accent">that works.</span>
          </h1>
          <p className="hero__lead">
            I'm a software engineer building reliable web and desktop
            applications, from ERP and inventory tools to AI-powered apps and
            Shopify stores. Mostly on the MERN stack.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#projects">
              View my work <span aria-hidden="true">→</span>
            </a>
            <a className="btn btn--ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__panel">
            <img className="hero__photo" src="/me.webp" alt={profile.name} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { big: "2+ years", small: "Professional experience" },
    { big: String(projects.length), small: "Projects built" },
    { big: "Web + Desktop", small: "Platforms" },
    { big: "MERN", small: "Core stack" },
  ];
  return (
    <div className="stats">
      <div className="container stats__grid">
        {items.map((s) => (
          <div key={s.small}>
            <strong>{s.big}</strong>
            <span>{s.small}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Gallery({ name, images, start, onClose }) {
  const [i, setI] = useState(start);
  const closeRef = useRef(null);
  const touchX = useRef(null);
  const n = images.length;
  const go = (d) => setI((c) => (c + d + n) % n);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, n]);

  useEffect(() => {
    document
      .querySelector('.thumb[aria-current="true"]')
      ?.scrollIntoView({ block: "nearest", inline: "center" });
  }, [i]);

  const stop = (e) => e.stopPropagation();
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  };

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${name} screenshots`}
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        className="lightbox__btn lightbox__close"
        aria-label="Close gallery"
        onClick={onClose}
      >
        ×
      </button>
      {n > 1 && (
        <button
          type="button"
          className="lightbox__btn lightbox__nav lightbox__nav--prev"
          aria-label="Previous image"
          onClick={(e) => (stop(e), go(-1))}
        >
          ‹
        </button>
      )}
      <div className="lightbox__body" onClick={stop}>
        <img
          className="lightbox__main"
          src={images[i]}
          alt={`${name} screenshot ${i + 1} of ${n}`}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={onTouchEnd}
        />
        {n > 1 && (
          <p className="lightbox__count">
            {i + 1} / {n}
          </p>
        )}
        {n > 1 && (
          <div className="lightbox__thumbs">
            {images.map((src, k) => (
              <button
                key={src}
                type="button"
                className="thumb"
                aria-current={k === i}
                aria-label={`Show image ${k + 1}`}
                onClick={() => setI(k)}
              >
                <img src={src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>
      {n > 1 && (
        <button
          type="button"
          className="lightbox__btn lightbox__nav lightbox__nav--next"
          aria-label="Next image"
          onClick={(e) => (stop(e), go(1))}
        >
          ›
        </button>
      )}
    </div>,
    document.body,
  );
}

const CATEGORIES = ["All", "Web app", "Desktop", "Shopify"];
const CATEGORY_LABEL = {
  All: "All",
  "Web app": "Web apps",
  Desktop: "Desktop",
  Shopify: "Shopify",
};
const THUMBS = 4;

function ProjectShowcase() {
  const [filter, setFilter] = useState("All");
  const [index, setIndex] = useState(0);
  const [shot, setShot] = useState(0); // image shown in the big preview
  const [gallery, setGallery] = useState(null); // start index when lightbox is open
  const touchX = useRef(null);

  const list =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const n = list.length;
  const current = list[index] || list[0];
  const images = getImages(current.slug);
  const total = images.length;
  const prev = list[(index - 1 + n) % n];
  const next = list[(index + 1) % n];
  const closeGallery = useCallback(() => setGallery(null), []);

  const go = (d) => {
    setIndex((i) => (i + d + n) % n);
    setShot(0);
  };
  const jump = (i) => {
    setIndex(i);
    setShot(0);
  };
  const pick = (f) => {
    setFilter(f);
    setIndex(0);
    setShot(0);
  };
  const count = (f) =>
    f === "All"
      ? projects.length
      : projects.filter((p) => p.category === f).length;

  const onKeyDown = (e) => {
    if (e.target.closest("input, textarea, select")) return;
    if (e.key === "ArrowLeft") go(-1);
    else if (e.key === "ArrowRight") go(1);
  };
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 60 && n > 1) go(dx < 0 ? 1 : -1);
  };

  const thumbs = images.slice(0, THUMBS);
  const more = total - THUMBS;

  return (
    <div className="showcase">
      <div className="tabs" role="tablist" aria-label="Filter projects">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={filter === c}
            className={`tabs__btn ${filter === c ? "is-on" : ""}`}
            onClick={() => pick(c)}
          >
            {CATEGORY_LABEL[c]}
            <small>{count(c)}</small>
          </button>
        ))}
      </div>

      <div
        className="car"
        tabIndex={0}
        role="group"
        aria-roledescription="carousel"
        aria-label="Projects"
        onKeyDown={onKeyDown}
      >
        {n > 1 ? (
          <button
            type="button"
            className="car__peek"
            aria-label={`Previous project: ${prev.name}`}
            onClick={() => go(-1)}
            style={{ backgroundImage: `url(${getImages(prev.slug)[0] || ""})` }}
          />
        ) : (
          <span className="car__peek car__peek--empty" aria-hidden="true" />
        )}

        <article
          key={current.slug}
          className="slide"
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={onTouchEnd}
        >
          <div className="slide__media">
            {total > 0 ? (
              <>
                <button
                  type="button"
                  className="slide__main"
                  onClick={() => setGallery(shot)}
                  aria-label={`Open all ${total} screenshots of ${current.name}`}
                >
                  <img
                    src={images[shot]}
                    alt={`${current.name} screenshot ${shot + 1} of ${total}`}
                  />
                  <span className="slide__count">
                    {shot + 1} / {total}
                  </span>
                  <span className="slide__hint">
                    View all {total} screenshots
                  </span>
                </button>
                {total > 1 && (
                  <div className="slide__thumbs">
                    {thumbs.map((src, i) => {
                      const isMore = more > 0 && i === THUMBS - 1;
                      return (
                        <button
                          key={src}
                          type="button"
                          className={`thumbs__btn ${shot === i && !isMore ? "is-on" : ""}`}
                          aria-label={
                            isMore
                              ? `View all ${total} screenshots`
                              : `Show screenshot ${i + 1}`
                          }
                          onClick={() => (isMore ? setGallery(i) : setShot(i))}
                        >
                          <img src={src} alt="" loading="lazy" />
                          {isMore && (
                            <span className="thumbs__more">+{more}</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
                <p className="slide__note">
                  {total} screenshot{total > 1 ? "s" : ""} · click any image to
                  enlarge
                </p>
              </>
            ) : (
              <div className="slide__empty">Screenshots coming soon</div>
            )}
          </div>

          <div className="slide__body">
            <div className="slide__tags">
              <span className="slide__tag">{current.category}</span>
              {current.freelance && (
                <span className="slide__tag slide__tag--freelance">
                  Freelance
                </span>
              )}
            </div>
            <h3>{current.name}</h3>
            <p className="slide__sub">{current.subtitle}</p>
            <p className="slide__desc">{current.description}</p>
            <ul className="chips" aria-label={`${current.name} technologies`}>
              {current.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            {current.live && (
              <div className="slide__links">
                <a
                  className="btn btn--primary btn--sm"
                  href={current.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live site ↗
                </a>
              </div>
            )}
          </div>
        </article>

        {n > 1 ? (
          <button
            type="button"
            className="car__peek"
            aria-label={`Next project: ${next.name}`}
            onClick={() => go(1)}
            style={{ backgroundImage: `url(${getImages(next.slug)[0] || ""})` }}
          />
        ) : (
          <span className="car__peek car__peek--empty" aria-hidden="true" />
        )}

        {n > 1 && (
          <>
            <button
              type="button"
              className="car__arrow car__arrow--prev"
              aria-label="Previous project"
              onClick={() => go(-1)}
            >
              ‹
            </button>
            <button
              type="button"
              className="car__arrow car__arrow--next"
              aria-label="Next project"
              onClick={() => go(1)}
            >
              ›
            </button>
          </>
        )}
      </div>

      {n > 1 && (
        <div className="ctl">
          <button
            type="button"
            className="ctl__arrow"
            aria-label="Previous project"
            onClick={() => go(-1)}
          >
            ‹
          </button>
          <div className="dots">
            {list.map((p, i) => (
              <button
                key={p.slug}
                type="button"
                className="dots__dot"
                aria-label={`Show ${p.name}`}
                aria-current={i === index}
                onClick={() => jump(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className="ctl__arrow"
            aria-label="Next project"
            onClick={() => go(1)}
          >
            ›
          </button>
        </div>
      )}
      {n > 1 && (
        <p className="ctl__count" aria-live="polite">
          {index + 1} of {n}
        </p>
      )}

      {gallery !== null && (
        <Gallery
          name={current.name}
          images={images}
          start={gallery}
          onClose={closeGallery}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <CustomCursor />
      <main>
        <Hero />
        <Stats />

        <Section
          id="about"
          label="About"
          title="Engineering software from start to finish."
          alt
        >
          <div className="about">
            <div className="prose">
              {about.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
            <dl className="facts">
              {facts.map((f) => (
                <div key={f.small}>
                  <dt>{f.big}</dt>
                  <dd>{f.small}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        <Section
          id="services"
          label="What I build"
          title="Where I usually get involved."
        >
          <ol className="rows">
            {services.map((s, i) => (
              <li key={s.title} className="rows__item">
                <div className="rows__title">
                  <span>0{i + 1}</span>
                  <h3>{s.title}</h3>
                </div>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          id="skills"
          label="Skills"
          title="The tools I work with."
          alt
        >
          <div className="skills">
            {skills.map((s) => (
              <div key={s.group} className="skills__row">
                <h3>{s.group}</h3>
                <p>{s.items.join(", ")}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          label="Selected work"
          title="Products I've built."
        >
          <ProjectShowcase />
        </Section>

        <section id="contact" className="container contact-wrap">
          <div className="contact">
            <div className="contact__info">
              <p className="label label--light">Contact</p>
              <h2 className="section__title section__title--light">
                Have a project or role in mind?
              </h2>
              <p className="contact__lead">
                Send me a message and I'll get back to you. You can also reach
                me directly on WhatsApp, email or LinkedIn.
              </p>
              <div className="contact__actions">
                <Socials />
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <p>
            © {new Date().getFullYear()} {profile.name} · {profile.role}
          </p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
