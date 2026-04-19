import { featureCards } from "@/data/landing";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Features() {
  return (
    <section id="features" className="pb-20 sm:pb-24">
      <Container>
        <SectionHeading
          eyebrow="Product"
          title="Six focused ways BullBearMagnet keeps the read clean."
          description="The feature set is built around trend direction, confirmation, and cleaner execution context without adding unnecessary dashboard noise."
          align="center"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {featureCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08}>
              <article className="group surface relative h-full overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/16 hover:bg-white/[0.045] hover:shadow-[0_24px_60px_rgba(5,14,32,0.28)]">
                <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.05] text-accent transition-colors duration-300 group-hover:border-cyan-300/18 group-hover:bg-cyan-400/[0.08]">
                  <card.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-white/62">{card.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
