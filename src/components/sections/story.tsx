import { storyCards, storyPhilosophy } from "@/data/landing";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Story() {
  return (
    <section id="design" className="pb-20 sm:pb-24">
      <Container>
        <Reveal>
          <div className="surface overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="border-b border-white/10 p-7 sm:p-8 lg:border-b-0 lg:border-r">
                <SectionHeading
                  eyebrow={storyPhilosophy.eyebrow}
                  title={storyPhilosophy.title}
                  description={storyPhilosophy.description}
                />
                <p className="mt-8 max-w-xl border-t border-white/10 pt-6 text-sm leading-7 text-white/48 sm:text-[15px]">
                  {storyPhilosophy.closing}
                </p>
              </div>

              <div className="grid gap-px bg-white/10 sm:grid-cols-2">
                {storyCards.map((item, index) => (
                  <div key={item.label} className="bg-[#09101a] p-6 sm:p-7">
                    <p className="text-sm uppercase tracking-[0.18em] text-white/34">
                      {item.label}
                    </p>
                    <p className="mt-5 text-base leading-8 text-white/72">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
