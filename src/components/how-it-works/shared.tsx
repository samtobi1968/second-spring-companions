"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const SectionEyebrow = ({
  children,
  centered = false,
  className,
}: {
  children: ReactNode;
  centered?: boolean;
  className?: string;
}) => (
  <div className={cn("flex items-center gap-3 mb-5", centered && "justify-center", className)}>
    <div className="rule" />
    <span className="eyebrow text-foreground/60">{children}</span>
    {centered && <div className="rule" />}
  </div>
);

export const FadeInSection = ({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -32px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0.24,1)] motion-reduce:transition-none",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 motion-reduce:opacity-100 motion-reduce:translate-y-0",
        className,
      )}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
};

export const stepCardClass =
  "group rounded-2xl border border-border bg-card p-8 md:p-10 shadow-soft transition-shadow duration-300 hover:shadow-card h-full flex flex-col";

export const goldCardClass =
  "rounded-2xl border border-gold/25 bg-gold-soft/40 p-8 md:p-10 shadow-soft h-full flex flex-col";
