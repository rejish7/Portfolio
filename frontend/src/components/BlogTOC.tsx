"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List } from "lucide-react";

interface TocItem {
  id: string;
  label: string;
  level: number;
}

interface BlogTOCProps {
  items: TocItem[];
}

export function BlogTOC({ items }: BlogTOCProps) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    for (const { id } of items) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  }, []);

  if (items.length < 3) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div ref={panelRef} className="fixed right-4 bottom-6 z-50 lg:right-6 lg:bottom-8">
          {/* Panel */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.96 }}
                transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                className="absolute bottom-14 right-0 w-72 max-h-[60vh] overflow-y-auto
                  rounded-2xl bg-card/90 backdrop-blur-xl border border-border/50
                  shadow-xl shadow-black/10 p-2"
              >
                <p className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  On This Page
                </p>
                <nav className="flex flex-col gap-0.5">
                  {items.map((item) => {
                    const isActive = activeId === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className={`text-left px-3 py-2 rounded-lg text-sm leading-snug transition-colors duration-150 ${
                          item.level >= 3 ? "pl-6 text-[13px]" : "font-medium"
                        } ${
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            onClick={() => setOpen(!open)}
            aria-label="Table of contents"
            aria-expanded={open}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full
              bg-card/80 backdrop-blur-xl border border-border/50 shadow-lg shadow-black/10
              text-sm font-medium text-foreground hover:bg-card transition-colors duration-150"
          >
            <List className="h-4 w-4 text-primary" />
            <span className="hidden sm:inline">Contents</span>
            {items.length > 0 && (
              <span className="text-xs text-muted-foreground">({items.length})</span>
            )}
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
