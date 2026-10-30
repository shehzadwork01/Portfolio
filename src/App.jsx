import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { getImages } from './projectImages.js'
import { profile, nav, about, experience, skills, projects, education } from './data.js'

const Icon = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3V9.75zm6.5 0h3.83v1.54h.05c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.79 2.66 4.79 6.11V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.59V21h-4V9.75z" /></svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.76 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" /></svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
  ),
}

function Socials() {
  return (
    <div className="socials">
      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">{Icon.linkedin}</a>
      <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">{Icon.github}</a>
      <a href={`mailto:${profile.email}`} aria-label="Send an email">{Icon.mail}</a>
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#top" className="nav__logo" aria-label="Back to top">{profile.initials}</a>
        <nav id="menu" className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Primary">
          {nav.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)}>{n}</a>
          ))}
        </nav>
        <Socials />
        <button className="nav__toggle" aria-expanded={open} aria-controls="menu" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}

function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return setShown(true)
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setShown(true), io.disconnect()), { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${shown ? 'is-in' : ''} ${className}`}>{children}</div>
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <Reveal>
          <h2 className="section__title">{title}</h2>
          {children}
        </Reveal>
      </div>
    </section>
  )
}

function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero__card">
        <div className="hero__text">
          <p className="eyebrow">MERN STACK DEVELOPER · FULL STACK</p>
          <h1>Engineering digital products that <span>work.</span></h1>
          <p className="hero__lead">
            I build scalable, responsive web applications with MongoDB, Express, React and Node.js, from healthcare systems and ERP tools to AI-powered apps and Shopify stores.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#projects">View My Work</a>
            <a className="btn btn--ghost" href="#contact">Get In Touch</a>
          </div>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__badge">
            <span>{profile.initials}</span>
            <small>{profile.location}</small>
          </div>
        </div>
      </div>
    </section>
  )
}

function Shot({ src, alt, big, onOpen }) {
  const cls = `shot ${big ? 'shot--big' : ''}`
  if (!src) return <div className={cls}><span className="shot__ph">Screenshot</span></div>
  return (
    <button type="button" className={`${cls} shot--btn`} onClick={onOpen} aria-label={`View larger: ${alt}`}>
      <img src={src} alt={alt} loading="lazy" />
    </button>
  )
}

function Gallery({ name, images, start, onClose }) {
  const [i, setI] = useState(start)
  const closeRef = useRef(null)
  const touchX = useRef(null)
  const n = images.length
  const go = (d) => setI((c) => (c + d + n) % n)

  useEffect(() => {
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') go(-1)
      else if (e.key === 'ArrowRight') go(1)
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose, n])

  useEffect(() => {
    document.querySelector('.thumb[aria-current="true"]')?.scrollIntoView({ block: 'nearest', inline: 'center' })
  }, [i])

  const stop = (e) => e.stopPropagation()
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
  }

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${name} screenshots`} onClick={onClose}>
      <button ref={closeRef} type="button" className="lightbox__btn lightbox__close" aria-label="Close gallery" onClick={onClose}>×</button>
      {n > 1 && (
        <button type="button" className="lightbox__btn lightbox__nav lightbox__nav--prev" aria-label="Previous image" onClick={(e) => (stop(e), go(-1))}>‹</button>
      )}
      <div className="lightbox__body" onClick={stop}>
        <img
          className="lightbox__main"
          src={images[i]}
          alt={`${name} screenshot ${i + 1} of ${n}`}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={onTouchEnd}
        />
        {n > 1 && <p className="lightbox__count">{i + 1} / {n}</p>}
        {n > 1 && (
          <div className="lightbox__thumbs">
            {images.map((src, k) => (
              <button key={src} type="button" className="thumb" aria-current={k === i} aria-label={`Show image ${k + 1}`} onClick={() => setI(k)}>
                <img src={src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>
      {n > 1 && (
        <button type="button" className="lightbox__btn lightbox__nav lightbox__nav--next" aria-label="Next image" onClick={(e) => (stop(e), go(1))}>›</button>
      )}
    </div>,
    document.body
  )
}

function ProjectCard({ p }) {
  const images = getImages(p.slug)
  const [open, setOpen] = useState(null)
  return (
    <article className="card project">
      {open !== null && <Gallery name={p.name} images={images} start={open} onClose={() => setOpen(null)} />}
      <div className="shots">
        {[0, 1, 2].map((i) => (
          <Shot key={i} big={i === 0} src={images[i]} alt={`${p.name} screenshot ${i + 1}`} onOpen={() => setOpen(i)} />
        ))}
      </div>
      <h3>{p.name}</h3>
      <p className="project__sub">{p.subtitle}</p>
      <p>{p.description}</p>
      <ul className="chips" aria-label={`${p.name} technologies`}>
        {p.stack.map((s) => <li key={s}>{s}</li>)}
      </ul>
      {(p.live || p.github) && (
        <div className="project__links">
          {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer">Live site ↗</a>}
          {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer">Source code ↗</a>}
        </div>
      )}
    </article>
  )
}

export default function App() {
  const [all, setAll] = useState(false)
  const shown = all ? projects : projects.slice(0, 4)
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <Section id="about" title="About">
          <div className="prose">{about.map((t) => <p key={t}>{t}</p>)}</div>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.company} className="timeline__item">
                <div className="timeline__head">
                  <h3>{e.title} <span>· {e.company}</span></h3>
                  <p className="muted">{e.dates} · {e.place}</p>
                </div>
                <ul>{e.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid grid--3">
            {skills.map((s) => (
              <div key={s.group} className="card">
                <h3>{s.group}</h3>
                <ul className="chips">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid grid--2">{shown.map((p) => <ProjectCard key={p.slug} p={p} />)}</div>
          {projects.length > 4 && (
            <button className="btn btn--ghost more" onClick={() => setAll((a) => !a)}>
              {all ? 'Show fewer projects' : `Show all ${projects.length} projects`}
            </button>
          )}
        </Section>

        <Section id="education" title="Education">
          <ul className="edu">
            {education.map((e) => (
              <li key={e.title}><div><strong>{e.title}</strong><span className="muted">{e.place}</span></div><span className="muted">{e.date}</span></li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <div className="card contact">
            <p>Have a project or role in mind? Send me an email or reach out on LinkedIn.</p>
            <a className="btn btn--primary" href={`mailto:${profile.email}`}>{profile.email}</a>
            <Socials />
          </div>
        </Section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <p>© {new Date().getFullYear()} {profile.name} · {profile.role}</p>
          <div className="footer__right"><Socials /><a href="#top">Back to top ↑</a></div>
        </div>
      </footer>
    </>
  )
}
