import { trialDetails } from "@/data/landing";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function FinalCta() {
  return (
    <section id="cta" className="pb-16 sm:pb-20">
      <Container>
        <Reveal>
          <div className="surface relative overflow-hidden p-8 sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(126,205,255,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(97,235,190,0.12),transparent_26%)]" />
            <div className="absolute inset-x-20 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="eyebrow">BullBearMagnet</span>
                <h2 className="mt-6 font-display text-4xl font-medium tracking-tight text-white sm:text-5xl">
                  Start with clarity.
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-white/66">
                  Get 7 days of full access and see how BullBearMagnet helps you stay aligned with trend direction.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button href={`mailto:${trialDetails.contact}`}>
                  Start Free Trial
                </Button>
                <Button href="https://www.tradingview.com/" variant="secondary">
                  View on TradingView
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
