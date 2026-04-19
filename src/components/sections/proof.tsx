import { proofCards, proofPositioning } from "@/data/landing";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Proof() {
  return (
    <section className="pb-20 sm:pb-24">
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
            <Reveal>
              <div className="surface h-full p-7 sm:p-8">
                <SectionHeading
                  eyebrow={proofPositioning.eyebrow}
                  title={proofPositioning.title}
                  description={proofPositioning.description}
                  compact
                />
                <p className="mt-8 max-w-xl border-t border-white/10 pt-6 text-sm leading-7 text-white/48 sm:text-[15px]">
                  {proofPositioning.trustLine}
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-3">
              {proofCards.map((card, index) => (
                <Reveal key={card.label} delay={index * 0.06}>
                  <article className="h-full rounded-[28px] border border-white/10 bg-white/[0.025] p-5 shadow-[0_12px_40px_rgba(3,8,20,0.18)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/14 bg-cyan-400/[0.08] text-cyan-200">
                      <card.icon className="h-4.5 w-4.5" />
                    </div>
                    <p className="mt-5 text-xs uppercase tracking-[0.22em] text-white/36">{card.label}</p>
                    <p className="mt-3 font-display text-2xl tracking-tight text-white">{card.value}</p>
                    <p className="mt-4 text-sm leading-7 text-white/62">{card.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
