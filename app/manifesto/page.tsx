import type {Metadata} from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import SideRail from '@/components/SideRail';
import SplitText from '@/components/motion/SplitText';
import Reveal from '@/components/motion/Reveal';
import MaskWipe from '@/components/motion/MaskWipe';
import {Stagger, StaggerItem} from '@/components/motion/Stagger';

export const metadata: Metadata = {
  title: 'Manifesto',
  description: 'Mengapa Sentra Assist dibangun: lapisan kecerdasan klinis yang hidup di titik kerja dokter Indonesia, bukan AI terpisah yang meminta dokter pindah kerja.',
  alternates: {canonical: 'https://sentraassist.id/manifesto'},
  openGraph: {
    title: 'Manifesto — Sentra Assist',
    description: 'Mengapa Sentra Assist dibangun.',
    url: 'https://sentraassist.id/manifesto',
    type: 'article',
    images: [{url: '/og-image.png', width: 1200, height: 630, alt: 'Manifesto Sentra Assist'}],
  },
  twitter: {
    title: 'Manifesto — Sentra Assist',
    description: 'Mengapa Sentra Assist dibangun.',
    images: ['/og-image.png'],
  },
};

const ARTICLE_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Kecerdasan klinis yang tidak menggantikan dokter',
  datePublished: '2026-01-01',
  dateModified: '2026-06-01',
  inLanguage: 'id-ID',
  url: 'https://sentraassist.id/manifesto',
  author: {'@type': 'Organization', name: 'Sentra Assist', url: 'https://sentraassist.id/'},
  publisher: {'@type': 'Organization', name: 'Sentra Assist', url: 'https://sentraassist.id/'},
};

export default function ManifestoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(ARTICLE_JSONLD)}}
      />
      <SiteHeader current="manifesto" />
      <main id="main">
        <article className="page">
          <SideRail />
          <Link href="/" className="back-link">&larr; Sentra</Link>
          <MaskWipe as="p" className="page-eyebrow" from="up" delay={0.08}>Manifesto</MaskWipe>
          <SplitText as="h1" className="page-title" text="Kecerdasan klinis yang tidak menggantikan dokter." delay={0.2} />
          <Reveal as="p" className="lede-paragraph" delay={0.32}>Sentra Assist adalah lapisan clinical decision support yang menempel pada workflow ePuskesmas &mdash; bukan aplikasi tambahan yang meminta dokter pindah kerja. Ini asisten yang bekerja di dalam kebiasaan dokter sendiri, di titik kerja nyata, dengan pagar klinis yang membuat setiap bantuan dapat dipertanggungjawabkan.</Reveal>

          <hr className="thin" />

          <Stagger as="div" stagger={0.1}>
            <StaggerItem as="h2" className="page-section-title">Premis</StaggerItem>
            <StaggerItem as="p" className="prose">Sentra Assist dibangun bukan karena dokter Indonesia butuh AI lagi. Banyak solusi AI kesehatan sudah ada di pasaran. Sentra Assist dibangun karena layanan primer Indonesia butuh AI yang hidup di titik kerja klinisi &mdash; di antara anamnesa dan rujukan &mdash; tanpa memutus perhatian dari pasien atau workflow yang sudah terbangun di lapangan. Kebutuhan ini tidak dijawab oleh produk generik, karena generik tidak dirancang untuk dipasang di antara ePuskesmas dan dokter, melainkan untuk meminta dokter pindah ke produk tersebut.</StaggerItem>
          </Stagger>

          <Stagger as="div" stagger={0.1}>
            <StaggerItem as="h2" className="page-section-title">Tiga alasan Sentra Assist dibangun</StaggerItem>
            <StaggerItem as="p" className="prose">Dokter dan perawat menanggung beban dokumentasi yang tidak proporsional: anamnesa, tanda vital, diagnosa, resep, dan rujukan sering kali harus dimasukkan terpisah-pisah dengan friksi yang menghambat kerja klinis. Sentra Assist menurunkan friksi itu lewat OCR, ekstraksi data, dan autofill terkontrol &mdash; sehingga waktu yang tersisa kembali ke pasien.</StaggerItem>
            <StaggerItem as="p" className="prose">Kualitas klinis antar tenaga medis tidak pernah seragam. Membaca pola kegawatdaruratan, menyusun differential diagnosis, dan menilai korelasi gejala dengan vital sign membutuhkan pengalaman yang tidak selalu tersedia di setiap poli. Sentra Assist hadir sebagai <em>clinical safety amplifier</em> &mdash; bukan untuk menggantikan membaca klinis melainkan untuk memperkuatinya, terutama di layanan primer dengan heterogenitas skill yang tinggi.</StaggerItem>
            <StaggerItem as="p" className="prose">Produk AI kesehatan sering gagal bukan karena tidak cerdas, melainkan karena terlalu cepat terlihat pintar tanpa cukup aman. Sentra Assist justru dibangun dengan pagar: gate klinis bertingkat, confidence layer, explainability, dan pemisahan yang jelas antara hasil ukur, saran, dan yang butuh konfirmasi manual.</StaggerItem>
          </Stagger>

          <Stagger as="div" stagger={0.1}>
            <StaggerItem as="h2" className="page-section-title">Posisi unik</StaggerItem>
            <StaggerItem as="p" className="prose">Sentra Assist bukan EMR/RME pengganti. Bukan chatbot klinis generik. Bukan AI demo yang hidup terpisah dari workflow lapangan. Sentra Assist adalah embedded clinical intelligence layer untuk layanan primer Indonesia &mdash; sidepanel yang bekerja saat dokter sedang membuka ePuskesmas, mengurangi double entry, mempercepat dokumentasi, membantu penilaian klinis, dan tetap membiarkan keputusan akhir berada pada tenaga medis.</StaggerItem>
          </Stagger>

          <Stagger as="div" stagger={0.1}>
            <StaggerItem as="h2" className="page-section-title">Tiga pilar pendekatan</StaggerItem>
            <StaggerItem as="p" className="prose"><strong>Workflow-native.</strong> Sentra Assist tidak meminta dokter membuka platform baru. Ia bekerja di titik kerja nyata, sehingga adopsi lebih mudah, resistensi lebih rendah, dan waktu belajar lebih singkat. Untuk pemegang keputusan dan investor, ini berarti time-to-value lebih cepat dan risiko kegagalan adopsi lebih kecil.</StaggerItem>
            <StaggerItem as="p" className="prose"><strong>Non-disruptive.</strong> Tidak menuntut fasilitas mengganti ePuskesmas atau melakukan migrasi besar sebelum trial. Ini penting di Indonesia, di mana implementasi digital kesehatan sering terkendala anggaran, kesiapan SDM, kesiapan infrastruktur, dan birokrasi. Sentra Assist menempel, tidak menggantikan.</StaggerItem>
            <StaggerItem as="p" className="prose"><strong>Local-fit.</strong> Bukan mesin generik yang ditempel begitu saja. Sentra Assist dikalibrasi untuk konteks layanan primer Indonesia: prior penyakit berbasis kasus klinis lokal, formulary dan konteks obat yang relevan, pola kerja puskesmas dan poli umum, serta realitas peran dokter, perawat, triage officer, dan admin.</StaggerItem>
          </Stagger>

          <Stagger as="div" stagger={0.1}>
            <StaggerItem as="h2" className="page-section-title">Keselamatan klinis bukan fitur tambahan</StaggerItem>
            <StaggerItem as="p" className="prose">Sentra Assist tidak mengejar AI yang impresif melainkan AI yang dapat dipertanggungjawabkan. Prinsip ini bukan slogan: gate klinis aktif secara default, input manual tenaga medis diperlakukan sebagai otoritas tertinggi, sistem tidak boleh override tanda vital manual, dan setiap bantuan dijelaskan &mdash; mana hasil ukur, mana saran, mana yang butuh konfirmasi.</StaggerItem>

            <StaggerItem as="p" className="prose emphasis-p"><Link className="emphasis" href="/contact">Untuk pilot trial atau diskusi riset &rarr;</Link></StaggerItem>
          </Stagger>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
