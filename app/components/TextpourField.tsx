"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";

/**
 * Ambient hero accent that dogfoods the `textpour` library (https://github.com/beansint/textpour).
 * A short phrase is poured into a sequence of shapes; a void follows the cursor and the text
 * re-flows live (textpour's ShapeFlow.reflow). Deliberately CALM for a portfolio:
 *  - frozen/still until the pointer enters the hero, eases back to rest and stops the loop on leave
 *  - low presence so the name + CTAs always dominate
 *  - respects prefers-reduced-motion (single static frame) and pauses when scrolled off-screen
 */
const BASE =
  "textpour pours text into any shape circles polygons app frames dashboards reflowing live on the client one tiny open source kernel for any application by vincent pacaña ";
const PHRASE = BASE.repeat(4);

export default function TextpourField({ presence = 0.16 }: { presence?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !host || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const FS = 14;
    const LH = 19;
    const font = `600 ${FS}px ui-sans-serif, system-ui, -apple-system, sans-serif`;
    const wAlpha = presence * 0.5;
    const mAlpha = Math.min(0.9, presence * 0.95 + 0.04);

    let tp: any = null;
    let flower: any = null;
    let W = 0;
    let H = 0;
    let curX = 0;
    let curY = 0;
    let tgtX = 0;
    let tgtY = 0;
    let hovering = false;
    let onScreen = true;
    let running = false;
    let raf = 0;
    let si = 0;
    let lastSwap = 0;
    let settle = 0;
    let disposed = false;
    let cleanupExtra = () => {};

    const shapeRegion = (i: number) => {
      const { circle, subtract, polygon, rect } = tp;
      const cx = W / 2;
      const cy = H / 2;
      const S = Math.min(W, H);
      const R = S * 0.64;
      const k = ((i % 5) + 5) % 5;
      if (k === 0) return subtract(circle(cx, cy, R), circle(cx, cy, R * 0.36)); // donut
      if (k === 1) {
        const p: [number, number][] = [];
        for (let n = 0; n < 6; n++) {
          const a = -Math.PI / 2 + (n * Math.PI) / 3;
          p.push([cx + Math.cos(a) * R, cy + Math.sin(a) * R]);
        }
        return polygon(p); // hexagon
      }
      if (k === 2) {
        const w = S * 0.72;
        const h = H * 0.84;
        return rect(cx - w / 2, cy - h / 2, w, h); // app frame (portrait)
      }
      if (k === 3) {
        const w = W * 0.88;
        const h = H * 0.6;
        return rect(cx - w / 2, cy - h / 2, w, h); // dashboard (wide)
      }
      const p: [number, number][] = [];
      for (let n = 0; n < 8; n++) {
        const a = -Math.PI / 2 + (n * Math.PI) / 4 + Math.PI / 8;
        p.push([cx + Math.cos(a) * R, cy + Math.sin(a) * R]);
      }
      return polygon(p); // octagon
    };

    const render = () => {
      if (!flower) return;
      let res: any;
      try {
        const region = tp.subtract(shapeRegion(si), tp.circle(curX, curY, Math.min(W, H) * 0.15));
        res = flower.reflow(region);
      } catch {
        return;
      }
      ctx.clearRect(0, 0, W, H);
      ctx.font = font;
      ctx.textBaseline = "alphabetic";
      for (const line of res.lines as Array<{ text: string; x: number; baseline: number }>) {
        const accent = /textpour|shape|app|application|client|live|kernel|any|vincent|paca/i.test(line.text);
        ctx.globalAlpha = accent ? mAlpha : wAlpha;
        ctx.fillStyle = accent ? "#00ff9d" : "#ffffff";
        ctx.fillText(line.text, line.x, line.baseline);
      }
      ctx.globalAlpha = 1;
    };

    const loop = (t: number) => {
      if (disposed) {
        running = false;
        return;
      }
      if (hovering) {
        if (t - lastSwap > 3200) {
          si += 1;
          lastSwap = t;
        }
      } else {
        tgtX = W / 2;
        tgtY = H / 2;
      }
      const ease = hovering ? 0.12 : 0.07;
      curX += (tgtX - curX) * ease;
      curY += (tgtY - curY) * ease;
      const moving = Math.abs(tgtX - curX) > 0.4 || Math.abs(tgtY - curY) > 0.4;
      if (hovering || moving || settle < 2) {
        render();
        settle = moving ? 0 : settle + 1;
      }
      if (!hovering && !moving && settle >= 2) {
        running = false;
        return; // calm: stop the loop entirely until next interaction
      }
      raf = requestAnimationFrame(loop);
    };

    const ensureLoop = () => {
      if (!running && !reduce && onScreen && !disposed) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };

    const resize = () => {
      W = host.clientWidth;
      H = host.clientHeight;
      if (!W || !H) return;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      curX = tgtX = W / 2;
      curY = tgtY = H / 2;
      settle = 0;
      render();
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      tgtX = e.clientX - r.left;
      tgtY = e.clientY - r.top;
      hovering = true;
      ensureLoop();
    };
    const onLeave = () => {
      hovering = false;
      settle = 0;
      ensureLoop();
    };

    (async () => {
      try {
        tp = await import("textpour");
      } catch {
        return;
      }
      if (disposed) return;
      ctx.font = font;
      const measurer = tp.canvasMeasurer(ctx, font);
      const source = new tp.PretextLineSource(PHRASE, font, measurer);
      flower = new tp.ShapeFlow(source, { lineHeight: LH, multiSpan: "fill", align: "left" });

      resize();

      const ro = new ResizeObserver(() => resize());
      ro.observe(host);
      const io = new IntersectionObserver(
        (entries) => {
          onScreen = entries[0]?.isIntersecting ?? true;
          if (onScreen) {
            settle = 0;
            ensureLoop();
          }
        },
        { threshold: 0 }
      );
      io.observe(host);

      if (!reduce) {
        host.addEventListener("pointermove", onMove);
        host.addEventListener("pointerleave", onLeave);
      }

      cleanupExtra = () => {
        ro.disconnect();
        io.disconnect();
        host.removeEventListener("pointermove", onMove);
        host.removeEventListener("pointerleave", onLeave);
      };
    })();

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      cleanupExtra();
    };
  }, [presence]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ zIndex: 0 }}
    />
  );
}
