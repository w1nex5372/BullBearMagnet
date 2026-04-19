"use client";

import { pricingCards, trialDetails } from "@/data/landing";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { WidgetScript } from "@/components/ui/widget-script";

export function Pricing() {
  const trialCard = pricingCards[0];
  const secondaryAction = trialDetails.secondaryLinks[0];

  return (
    <section id="pricing" className="pb-20 sm:pb-24">
      <WidgetScript />
      <Container>
        <SectionHeading
          eyebrow="Trial Access"
          title="One clear offer. Start with a 7-day free trial."
          description="A simple premium trial block for traders who want to test BullBearMagnet on TradingView before doing anything else."
          align="center"
        />

        <div className="mx-auto mt-12 max-w-4xl">
          <Reveal y={10}>
            <article className="surface relative overflow-hidden p-7 sm:p-8 lg:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(88,162,255,0.12),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_26%)]" />
              <div className="absolute inset-x-20 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-3xl font-medium text-white sm:text-4xl">
                    {trialCard.name}
                  </p>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-white/64">
                    {trialDetails.description}
                  </p>
                </div>
                {trialCard.badge ? <span className="eyebrow">{trialCard.badge}</span> : null}
              </div>

              <div className="relative mt-8">
                <p className="font-display text-5xl text-white sm:text-6xl">{trialCard.price}</p>
                <p className="mt-2 text-sm text-white/48">{trialCard.subtext}</p>
              </div>

              <div className="relative mt-8 grid gap-3 sm:grid-cols-3">
                {trialCard.items.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/8 bg-black/15 px-4 py-3 text-sm text-white/72">
                    {item}
                  </div>
                ))}
              </div>

              <div className="relative mt-8 rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                <label className="text-sm font-medium text-white/84">{trialDetails.helper}</label>
                <p className="mt-2 text-sm text-white/48">{trialDetails.helperText}</p>
                <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/34">
                  tradingview_username
                </div>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Button href={`mailto:${trialDetails.contact}`} className="sm:flex-1">
                    {trialDetails.primaryCta}
                  </Button>
                  <Button href={`mailto:${trialDetails.contact}`} variant="secondary">
                    Contact Access
                  </Button>
                </div>
              </div>

              <div className="relative mt-6 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-start sm:justify-between">
                <a
                  href={secondaryAction.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-cyan-200 transition hover:text-cyan-100"
                >
                  {secondaryAction.label}
                </a>
                <a
                  href={`mailto:${trialDetails.contact}`}
                  className="text-sm text-white/54 transition hover:text-white/82"
                >
                  {trialDetails.contact}
                </a>
              </div>

              <div className="relative mt-6 rounded-[24px] border border-emerald-300/10 bg-emerald-400/[0.05] p-5">
                <p className="text-sm leading-7 text-white/72">{trialDetails.disclaimer}</p>
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
