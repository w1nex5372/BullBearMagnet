"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/data/landing";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="pb-20 sm:pb-24">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions, answered clearly."
          description="Everything here is meant to reduce friction: what BullBearMagnet is, who it is for, and how the free trial works."
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-4">
          {faqs.map((item, index) => (
            <Reveal key={item.question} disabled>
              <article className="surface overflow-hidden px-6 py-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="font-display text-xl text-white sm:text-[1.35rem]">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/66"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 max-w-3xl border-t border-white/8 pt-4 leading-8 text-white/64">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
