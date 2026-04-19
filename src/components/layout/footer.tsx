import { Waves } from "lucide-react";
import { footerLinks, footerMeta } from "@/data/landing";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="pb-8 pt-10">
      <Container>
        <div className="flex flex-col gap-8 rounded-[28px] border border-white/8 bg-white/[0.02] px-6 py-6 text-sm text-white/52 sm:px-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-glow text-slate-950 shadow-lg shadow-cyan-500/20">
                  <Waves className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="font-display text-base text-white/84">BullBearMagnet</p>
                  <p className="mt-1 text-white/48">{footerMeta.productLine}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between lg:gap-12">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/30">Navigation</p>
                <div className="mt-4 flex flex-wrap gap-5">
                  {footerLinks.map((item) => (
                    <a key={item.label} href={item.href} className="transition hover:text-white/86">
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/30">Social</p>
                <div className="mt-4 flex flex-wrap gap-5">
                  {footerMeta.socials.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-white/86"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/8 pt-5 text-white/38">
            {footerMeta.copyright}
          </div>
        </div>
      </Container>
    </footer>
  );
}
