import Link from 'next/link';
import SplitText from '@/components/motion/SplitText';
import Reveal from '@/components/motion/Reveal';

export default function Hero() {
  return (
    <section className="pt-32 pb-48 border-b border-ink">
      <div className="flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="max-w-[800px]">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-soft block mb-12 font-bold">
            Pusat Komando Intelijen
          </span>
          <h1 className="font-display text-[clamp(48px,8vw,120px)] leading-[0.85] tracking-tighter font-medium mb-12">
            <SplitText as="span" className="block" text="Sentra" trigger="inview" delay={0.1} stagger={0.08} />
            <SplitText as="span" className="block" text="ACARS." trigger="inview" delay={0.24} stagger={0.08} />
          </h1>
          <Reveal as="p" className="text-2xl text-ink-soft leading-relaxed max-w-[32ch]" delay={0.4}>
            Sistem Peringatan dan Pelaporan Klinis Otomatis untuk Memberdayakan Presisi dalam Diagnosis.
          </Reveal>
          <Reveal as="div" className="mt-10 flex flex-wrap gap-4" delay={0.5}>
            <Link
              href="/"
              className="inline-flex items-center justify-center border border-ink bg-ink px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-paper transition-all duration-300 hover:bg-transparent hover:text-ink"
            >
              Buka Landing Sentra
            </Link>
            <Link
              href="#spatial"
              className="inline-flex items-center justify-center border border-line px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-ink transition-all duration-300 hover:border-ink hover:bg-paper-pure"
            >
              Lihat Node Spasial
            </Link>
          </Reveal>
        </div>
        <div className="text-right hidden md:block">
          <div className="opacity-10 font-display text-[80px] font-bold uppercase tracking-[0.4em] -translate-y-12" style={{writingMode: 'vertical-rl'}}>
            SENTRA
          </div>
        </div>
      </div>
    </section>
  );
}
