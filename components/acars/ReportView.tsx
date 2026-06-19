'use client';

import Reveal from '@/components/motion/Reveal';
import {kpis, insights, sources} from './data';
import {MauChart, AdoptionFunnel, AccuracyBySpecialty, PerformanceComparison, OutcomesDistribution} from './ReportCharts';
import ReportToc from './ReportToc';

const severityClass: Record<string, string> = {
  positive: 'border-ink text-ink',
  notable: 'border-signal text-signal',
  critical: 'border-signal-deep text-signal-deep',
};

export default function ReportView({onBack}: {onBack: () => void}) {
  return (
    <div className="py-20">
      <button
        onClick={onBack}
        className="flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-widest mb-12 hover:opacity-60 transition-opacity"
      >
        <span>&larr;</span> Kembali ke Dashboard
      </button>

      {/* Report header */}
      <div className="mb-12 pb-10 border-b-[3px] border-ink">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-ink flex items-center justify-center" style={{borderRadius: '2px'}}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L3 6v8l7 4 7-4V6l-7-4z" stroke="var(--paper)" strokeWidth="1.5" fill="none" />
              <path d="M10 7v6M7 10h6" stroke="var(--paper)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-ink-soft">Sentra Assist</span>
        </div>
        <h1 className="font-display text-[clamp(32px,5vw,48px)] font-semibold leading-[1.05] tracking-tight mb-4">
          Laporan Performa Produk.
        </h1>
        <div className="flex items-center gap-4 flex-wrap">
          <span className="font-mono text-xs text-ink-soft">Q1 2026 &middot; Analitik Clinical Decision Support</span>
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.1em] px-2 py-1 border border-ink/30">v1.2.0</span>
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.1em] px-2 py-1 border border-line text-ink-soft">Data Ilustratif</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-16">
        <div className="min-w-0">
          <Reveal as="section" className="mb-16" id="executive-summary">
            <h2 className="font-display text-2xl font-semibold tracking-tight border-b border-line pb-3 mb-6">Ringkasan Eksekutif.</h2>
            <p className="text-ink-soft leading-relaxed mb-4 max-w-[65ch]">
              Sentra Assist menunjukkan pertumbuhan dan dampak klinis yang substansial selama Q1 2026. Adopsi dokter
              aktif mencapai 12.847 pengguna di 142 fasilitas kesehatan, merepresentasikan peningkatan 18% dari kuartal
              sebelumnya. Platform ini memproses lebih dari 284.000 encounter klinis, dengan akurasi diagnostik yang
              stabil di 94,2% &mdash; peningkatan 2,1 poin persentase dari periode pelaporan sebelumnya dan 5,9 poin di
              atas baseline klinis tanpa bantuan.
            </p>
            <p className="text-ink-soft leading-relaxed mb-4 max-w-[65ch]">
              Peningkatan paling signifikan muncul di spesialisasi berkompleksitas tinggi. Departemen Kardiologi dan
              Pulmonologi mencapai tingkat akurasi masing-masing 96,4% dan 95,1%, sementara Praktik Umum mempertahankan
              90,8% yang andal. Rata-rata waktu-to-insight turun menjadi 4,2 detik, mencerminkan fokus tim engineering
              pada kecepatan point-of-care. Integrasi alur kerja tetap menjadi pendorong adopsi utama, dengan 82%
              pengguna teraktivasi melanjutkan engagement mingguan setelah 90 hari.
            </p>
            <p className="text-ink-soft leading-relaxed max-w-[65ch]">
              Dua area yang perlu perhatian: funnel konversi aktivasi-ke-penggunaan harian menunjukkan penurunan 34%
              antara engagement mingguan dan harian, dan akurasi Praktik Umum, meskipun di atas benchmark, tertinggal
              4&ndash;6 poin dari spesialisasi lain. Keduanya menjadi target perbaikan prioritas untuk Q2.
            </p>
            <div className="bg-paper-pure border-t-[3px] border-ink p-6 mt-6">
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-ink mb-2">Temuan Utama</div>
              <div className="font-display text-base font-medium leading-relaxed">
                Sentra Assist mengurangi tingkat kesalahan diagnostik sebesar 2,1 poin persentase menjadi 5,8%,
                sementara adopsi dokter mengalami akselerasi 31% dalam volume encounter klinis &mdash; mengkonfirmasi
                trajektori produk menuju dampak point-of-care yang terukur.
              </div>
            </div>
          </Reveal>

          <Reveal as="section" className="mb-16" id="key-metrics">
            <h2 className="font-display text-2xl font-semibold tracking-tight border-b border-line pb-3 mb-6">Metrik Utama.</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {kpis.map((k) => (
                <div key={k.label} className="border border-line border-t-[3px] border-t-ink p-5 bg-paper">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-ink-soft mb-3">{k.label}</div>
                  <div className="font-display text-3xl font-semibold tabular-nums tracking-tight">{k.value}</div>
                  <div className="font-mono text-xs font-bold mt-1 text-signal">{k.delta}</div>
                  <div className="mt-2 h-6">
                    <svg viewBox="0 0 100 24" preserveAspectRatio="none" className="w-full h-full">
                      <polyline points={k.spark} fill="none" stroke="var(--ink)" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" opacity="0.4" />
                      <polygon points={`${k.spark} 100,24 0,24`} fill="var(--ink)" opacity="0.05" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-mono text-[10px] text-ink-soft mt-4">Seluruh metrik mencerminkan Q1 2026 (Jan&ndash;Mar) vs. Q4 2025. Data bersifat ilustratif.</p>
          </Reveal>

          <Reveal as="section" className="mb-16" id="usage-trends">
            <h2 className="font-display text-2xl font-semibold tracking-tight border-b border-line pb-3 mb-6">Tren Penggunaan &amp; Adopsi.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <MauChart />
              <AdoptionFunnel />
            </div>
          </Reveal>

          <Reveal as="section" className="mb-16" id="diagnostic-performance">
            <h2 className="font-display text-2xl font-semibold tracking-tight border-b border-line pb-3 mb-6">Performa Diagnostik.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AccuracyBySpecialty />
              <PerformanceComparison />
            </div>
          </Reveal>

          <Reveal as="section" className="mb-16" id="clinical-outcomes">
            <h2 className="font-display text-2xl font-semibold tracking-tight border-b border-line pb-3 mb-6">Luaran Klinis.</h2>
            <p className="text-ink-soft leading-relaxed mb-6 max-w-[65ch]">
              Luaran encounter yang disegmentasi berdasarkan kohort pengalaman dokter. Data menunjukkan distribusi
              luaran di seluruh kelompok pengguna Baru (&lt;3 bulan), Menengah (3&ndash;6 bulan), dan Berpengalaman
              (&gt;6 bulan).
            </p>
            <OutcomesDistribution />
          </Reveal>

          <Reveal as="section" className="mb-16" id="insights">
            <h2 className="font-display text-2xl font-semibold tracking-tight border-b border-line pb-3 mb-6">Insight Utama.</h2>
            <div>
              {insights.map((ins, i) => (
                <div key={i} className="py-5 border-b border-line grid grid-cols-[32px_1fr] gap-4 items-start last:border-b-0">
                  <div className="w-7 h-7 flex items-center justify-center font-mono text-[10px] font-bold text-ink-soft bg-paper-pure rounded-full">{i + 1}</div>
                  <div>
                    <div className="font-display text-[15px] font-medium leading-relaxed">
                      {ins.summary}
                      <span className={`inline-block font-mono text-[9px] font-bold uppercase tracking-[0.08em] px-1.5 py-0.5 ml-2 border ${severityClass[ins.severity]}`}>{ins.severity}</span>
                    </div>
                    <div className="text-sm text-ink-soft leading-relaxed mt-1 max-w-[60ch]">{ins.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal as="section" className="mb-16" id="sources">
            <h2 className="font-display text-2xl font-semibold tracking-tight border-b border-line pb-3 mb-6">Sumber &amp; Metodologi.</h2>
            <div>
              {sources.map((src, i) => (
                <div key={i} className="py-2.5 border-b border-line grid grid-cols-[28px_1fr] gap-3 last:border-b-0">
                  <div className="font-mono text-[11px] font-bold text-ink-soft pt-0.5">[{i + 1}]</div>
                  <div className="text-ink-soft leading-relaxed text-[13px]">{src}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-5 bg-paper-pure border border-line">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-ink">Catatan metodologi: </span>
              <span className="text-xs text-ink-soft leading-relaxed">
                Seluruh metrik performa dihitung dari data encounter teranonymisasi dan diagregasi yang dikumpulkan dari
                142 fasilitas kesehatan. Akurasi diagnostik diukur sebagai proporsi saran diagnostik yang dihasilkan AI
                yang dikonfirmasi oleh diagnosis akhir dokter yang menangani. Data dalam laporan ini bersifat ilustratif.
              </span>
            </div>
          </Reveal>
        </div>

        <div className="lg:sticky lg:top-32 lg:self-start">
          <ReportToc />
        </div>
      </div>
    </div>
  );
}
