import { ArrowRight, ChevronRight, CircleDashed, Sparkles } from "lucide-react";
import { heroBullets, heroMetrics, heroSignals, heroTrustLine } from "@/data/landing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GridOverlay } from "@/components/ui/grid-overlay";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="pb-20 pt-16 text-center sm:pb-24 sm:pt-20 lg:pb-28">
      <Container size="wide">
        <Reveal className="mx-auto max-w-5xl" y={18}>
          <Badge variant="accent">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            BullBearMagnet
          </Badge>

          <h1 className="mx-auto mt-7 max-w-6xl font-display text-5xl font-medium leading-[0.9] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.4rem]">
            A simple system to stay
            <span className="mt-1 block bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              on the right side of the market.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/66 sm:text-xl">
            Instead of predicting tops and bottoms, focus on confirmation and trend direction.
          </p>

          <div className="mx-auto mt-8 grid max-w-4xl gap-3 text-left sm:grid-cols-3">
            {heroBullets.map((item, index) => (
              <Reveal
                key={item.text}
                delay={0.06 + index * 0.04}
                y={14}
                className="rounded-[22px] border border-white/8 bg-white/[0.025] px-4 py-4"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-cyan-300">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-6 text-white/78 sm:text-[15px]">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#cta" icon={ArrowRight} size="lg">
              Start Free Trial
            </Button>
            <Button href="#features" variant="secondary" icon={ChevronRight} size="lg">
              Get Full Access
            </Button>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/42 sm:text-[15px]">
            {heroTrustLine}
          </p>
        </Reveal>

        <Reveal
          className="surface relative mx-auto mt-14 max-w-6xl overflow-hidden p-4 shadow-[0_30px_120px_rgba(6,12,28,0.46)] sm:mt-16 sm:p-6"
          delay={0.12}
          y={22}
        >
          <GridOverlay />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(78,161,255,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(79,227,190,0.08),transparent_28%)]" />
          <div className="absolute inset-x-20 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />

          <div className="relative rounded-[26px] border border-white/10 bg-[#07101a]/95 p-5 sm:p-7 lg:p-8">
            <div className="flex flex-col gap-5 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-left">
                <p className="text-xs uppercase tracking-[0.26em] text-white/35">
                  Confirmation board
                </p>
                <p className="mt-2 font-display text-2xl tracking-tight text-white">
                  Confirmation and trend direction
                </p>
              </div>
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-200">
                <CircleDashed className="h-3.5 w-3.5" />
                7-day free trial
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="rounded-[24px] border border-cyan-300/10 bg-white/[0.03] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/56">Directional pressure</span>
                  <span className="text-cyan-300">Bull structure holds</span>
                </div>
                <div className="grid-fade mt-6 grid h-48 grid-cols-12 items-end gap-2 sm:h-56">
                  {[36, 54, 61, 58, 74, 90, 84, 106, 99, 120, 114, 138].map((height, index) => (
                    <div
                      key={`${height}-${index}`}
                      className={cn(
                        "w-full rounded-full bg-gradient-to-t",
                        index > 8 ? "from-accentSoft/70 to-accent" : "from-white/15 to-cyan-200/70",
                      )}
                      style={{ height }}
                    />
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {heroSignals.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[20px] border border-white/8 bg-black/20 p-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                    >
                      <p className="text-xs uppercase tracking-[0.22em] text-white/36">{item.label}</p>
                      <p className={cn("mt-3 text-sm font-medium", item.tone)}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm text-white/56">Bias stack</p>
                  <div className="mt-5 space-y-4">
                    {heroMetrics.map((item) => (
                      <div key={item.label}>
                        <div className="mb-2 flex justify-between text-sm">
                          <span className="text-white/70">{item.label}</span>
                          <span className="text-white/92">{item.value}</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/6">
                          <div
                            className={cn("h-2 rounded-full bg-gradient-to-r", item.barClass)}
                            style={{ width: item.value }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[24px] border border-emerald-300/12 bg-emerald-400/[0.06] p-5 text-left">
                  <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/60">
                    Execution discipline
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/74">
                    Confirmation remains stronger than prediction while price respects the current
                    support magnet and fails to lose structure on retest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
