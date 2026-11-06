import { useEffect, useRef } from "react";

const INTERACTIVE =
  'a, button, summary, label[for], [role="button"], .btn, select, input[type="submit"], input[type="checkbox"], input[type="radio"]';
const TEXT_FIELD =
  'input:not([type="submit"]):not([type="checkbox"]):not([type="radio"]), textarea';
const ZOOM = ".slide__main, .lightbox, .lightbox__main img";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!fine || reduce) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    const root = document.documentElement;
    root.classList.add("has-custom-cursor");

    let mx = -100,
      my = -100; // mouse
    let rx = -100,
      ry = -100; // ring (lerped)
    let raf = 0;
    let shown = false;

    const setState = (s, text = "") => {
      if (ring.dataset.state !== s) {
        ring.dataset.state = s;
        dot.dataset.state = s;
      }
      label.textContent = text;
    };

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (!shown) {
        shown = true;
        rx = mx;
        ry = my;
        dot.classList.add("is-visible");
        ring.classList.add("is-visible");
      }

      const t = e.target instanceof Element ? e.target : null;
      if (!t) return;
      if (t.closest(TEXT_FIELD)) setState("text");
      else if (t.closest(ZOOM)) {
        const out = t.closest(".lightbox") && !t.closest(".lightbox__body");
        setState("zoom", out ? "Close" : "View");
      } else if (t.closest(INTERACTIVE)) setState("link");
      else setState("default");
    };

    const onDown = () => {
      ring.classList.add("is-down");
    };
    const onUp = () => ring.classList.remove("is-down");
    const onLeave = () => {
      shown = false;
      dot.classList.remove("is-visible");
      ring.classList.remove("is-visible");
    };
    const onEnter = () => {};

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-dot"
        ref={dotRef}
        data-state="default"
        aria-hidden="true"
      />
      <div
        className="cursor-ring"
        ref={ringRef}
        data-state="default"
        aria-hidden="true"
      >
        <span className="cursor-ring__label" ref={labelRef} />
      </div>
    </>
  );
}
