import { showcaseFrames } from "@/data/landing";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function VisualShowcase() {
  return (
    <section id="showcase" className="pb-20 sm:pb-24">
      <Container>
        <SectionHeading
          eyebrow="Visual Showcase"
          title="A dedicated place for chart previews and future screenshot swaps."
          description="The frames below are styled as dark embedded panels now, and they are ready to be replaced later with real TradingView or product screenshots."
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal y={12}>
            <article className="surface relative overflow-hidden p-4 sm:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(83,161,255,0.14),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_28%)]" />
              <div className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />

              <div className="relative rounded-[26px] border border-white/10 bg-[#081019] p-4 shadow-[0_16px_40px_rgba(3,8,20,0.18)] sm:p-5">
                <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/34">Primary frame</p>
                    <h3 className="mt-2 font-display text-2xl text-white">{showcaseFrames[0].title}</h3>
                  </div>
                  <Badge variant="subtle">{showcaseFrames[0].assetLabel}</Badge>
                </div>

                <div className="mt-5 rounded-[22px] border border-white/8 bg-[#060b12] p-4">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/40" />
                  </div>

                  <div className="relative h-[18rem] overflow-hidden rounded-[18px] border border-white/6 bg-[linear-gradient(180deg,#09111a_0%,#05080d_100%)] sm:h-[23rem]">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:42px_42px] opacity-35" />
                    <div className="absolute inset-x-6 bottom-8 top-8 flex items-end gap-2">
                      {[24, 40, 58, 44, 72, 96, 82, 104, 94, 126, 110, 134, 120, 146].map((height, index) => (
                        <div
                          key={`${height}-${index}`}
                          className={`w-full rounded-full bg-gradient-to-t ${
                            index > 8 ? "from-cyan-500/90 to-cyan-300/80" : "from-white/14 to-white/5"
                          }`}
                          style={{ height }}
                        />
                      ))}
                    </div>
                    <div className="absolute left-[8%] top-[20%] h-20 w-20 rounded-full bg-cyan-400/8 blur-xl" />
                    <div className="absolute right-[10%] top-[32%] h-24 w-24 rounded-full bg-emerald-300/6 blur-xl" />
                    <div className="absolute bottom-5 left-5 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-200">
                      Screenshot placeholder
                    </div>
                  </div>
                </div>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/58">
                  {showcaseFrames[0].description}
                </p>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-5">
            {showcaseFrames.slice(1).map((frame, index) => (
              <Reveal key={frame.title} disabled>
                <article className="surface overflow-hidden p-4">
                  <div className="rounded-[24px] border border-white/8 bg-[#081019] p-4 shadow-[0_12px_28px_rgba(4,10,24,0.14)]">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-white/34">Preview frame</p>
                        <h3 className="mt-2 font-display text-xl text-white">{frame.title}</h3>
                      </div>
                      <Badge variant="subtle" className="text-[10px]">
                        {frame.assetLabel}
                      </Badge>
                    </div>

                    <div className="mt-4 h-40 rounded-[18px] border border-white/6 bg-[linear-gradient(180deg,#09111a_0%,#05080d_100%)] p-4">
                      <div className="h-full rounded-[14px] border border-dashed border-cyan-300/18 bg-[radial-gradient(circle_at_top,rgba(83,161,255,0.08),transparent_42%)]" />
                    </div>

                    <p className="mt-4 text-sm leading-7 text-white/58">{frame.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
