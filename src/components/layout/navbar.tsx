"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Waves, X } from "lucide-react";
import { useState } from "react";
import { landingNav } from "@/data/landing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="absolute inset-x-0 top-0 h-full border-b border-white/8 bg-[#050911]/55 backdrop-blur-2xl" />
      <Container className="relative py-4 sm:py-5">
        <div className="rounded-[30px] border border-white/10 bg-white/[0.035] px-4 py-3 shadow-[0_20px_60px_rgba(2,6,18,0.32)] backdrop-blur-xl sm:px-5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-glow text-slate-950 shadow-lg shadow-cyan-500/20">
                  <Waves className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold tracking-tight text-white">
                    BullBearMagnet
                  </p>
                  <p className="text-sm text-white/55">Trend confirmation system</p>
                </div>
              </Link>
            </div>

            <nav className="hidden items-center gap-7 text-sm text-white/60 lg:flex">
              {landingNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-2 py-1 transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Badge variant="subtle">BTC + Alts</Badge>
              <Button href="#cta" variant="secondary" size="sm">
                Request Preview
              </Button>
            </div>

            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/78 transition hover:bg-white/[0.08] lg:hidden"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {isOpen ? (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -8 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -8 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden lg:hidden"
              >
                <div className="mt-4 border-t border-white/8 pt-4">
                  <div className="flex flex-col gap-2">
                    {landingNav.map((item, index) => (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{
                          duration: 0.24,
                          delay: index * 0.04,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="rounded-2xl border border-transparent px-4 py-3 text-sm text-white/74 transition hover:border-white/8 hover:bg-white/[0.04] hover:text-white"
                      >
                        {item.label}
                      </motion.a>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-col gap-3 rounded-[24px] border border-white/8 bg-white/[0.03] p-4">
                    <Badge variant="subtle" className="w-fit">
                      BTC + Alts
                    </Badge>
                    <Button href="#cta" variant="primary" fullWidth>
                      Request Preview
                    </Button>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </Container>
    </header>
  );
}
