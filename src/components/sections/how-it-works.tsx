import { workflowSteps } from "@/data/landing";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function HowItWorks() {
  return (
    <section id="framework" className="pb-20 sm:pb-24">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="A simple workflow you can understand in seconds."
          description="The logic is direct: read structure, wait for confirmation, follow strength, and stay out of obvious traps."
          align="center"
        />

        <div className="mt-12 grid gap-4 xl:grid-cols-4">
          {workflowSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.03} y={10} disabled={index > 1}>
              <article className="group surface relative h-full overflow-hidden p-6 sm:p-7">
                <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-semibold text-white/88">
                    {step.step}
                  </div>
                  <div className="hidden h-px flex-1 bg-gradient-to-r from-cyan-300/18 to-transparent xl:block" />
                </div>

                <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-white/62">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
