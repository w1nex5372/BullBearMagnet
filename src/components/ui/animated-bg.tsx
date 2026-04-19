export function AnimatedBg() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(33,85,162,0.16),transparent_34%),linear-gradient(180deg,#03050a_0%,#07101a_42%,#04060a_100%)]" />

      <div className="absolute left-1/2 top-[-10rem] hidden h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,146,255,0.16)_0%,rgba(59,146,255,0.07)_34%,transparent_72%)] blur-3xl motion-safe:animate-[ambient-float_28s_ease-in-out_infinite] md:block" />

      <div className="absolute left-[-8rem] top-[24%] hidden h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(46,120,247,0.1)_0%,rgba(46,120,247,0.04)_40%,transparent_74%)] blur-[110px] motion-safe:animate-[ambient-float-alt_32s_ease-in-out_infinite] lg:block" />

      <div className="absolute bottom-[-8rem] right-[-6rem] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(54,205,177,0.06)_0%,rgba(54,205,177,0.025)_42%,transparent_76%)] blur-[100px] motion-safe:animate-[ambient-float_30s_ease-in-out_infinite]" />

      <div className="absolute inset-0 opacity-[0.12]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black_24%,transparent_88%)]" />
      </div>

      <div className="absolute inset-0 opacity-[0.035] mix-blend-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22)_0%,transparent_26%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.12)_0%,transparent_22%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08)_0%,transparent_18%)] blur-2xl" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,5,10,0.02)_0%,rgba(3,5,10,0.12)_45%,rgba(3,5,10,0.24)_100%)]" />
    </div>
  );
}
