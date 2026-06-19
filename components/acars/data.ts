export type User = {
  name: string;
  degree: string;
  role: string;
  stats: {total: number; assist: number; sideab: number};
  lat: number;
  lng: number;
};

export const users: User[] = [
  {name: 'dr Ferdi Iskandar', degree: '', role: 'Dokter / Auditor', stats: {total: 142, assist: 98, sideab: 44}, lat: -7.822, lng: 112.015},
  {name: 'Josep Arianto', degree: '', role: 'Triage Officer', stats: {total: 89, assist: 62, sideab: 27}, lat: -7.818, lng: 112.012},
  {name: 'Novia Angraini', degree: '', role: 'Dokter', stats: {total: 56, assist: 34, sideab: 22}, lat: -7.825, lng: 112.018},
  {name: 'dr Lusiana Dewi', degree: '', role: 'Dokter', stats: {total: 72, assist: 45, sideab: 27}, lat: -7.830, lng: 112.020},
  {name: 'dr Boyong Baskoro', degree: 'SPOG', role: 'Spesialis / Auditor', stats: {total: 115, assist: 80, sideab: 35}, lat: -7.815, lng: 112.008},
  {name: 'Oriza Rahmawati', degree: 'Amd.Keb', role: 'Bidan / Auditor', stats: {total: 68, assist: 40, sideab: 28}, lat: -7.812, lng: 112.017},
  {name: 'dr Dibya Arfianda', degree: 'SPOG', role: 'Spesialis / Auditor', stats: {total: 104, assist: 72, sideab: 32}, lat: -7.808, lng: 112.010},
];

export type GlobalLog = {
  time: string;
  id: string;
  event: string;
  status: 'TERVERIFIKASI' | 'TERTUNDA';
  agent: string;
  confidence: string;
};

export const globalLogs: GlobalLog[] = [
  {time: '18:12:45', id: 'REQ-99283-X', event: 'Interpretasi CXR untuk Batuk Kronis. Agent mendeteksi opasitas di lobus kanan atas.', status: 'TERVERIFIKASI', agent: 'Imaging-V3', confidence: '99,4%'},
  {time: '18:09:12', id: 'REQ-99282-A', event: 'Analisis Irama EKG. Terdeteksi Sinus Bradycardia dengan Normal Axis.', status: 'TERTUNDA', agent: 'Cardio-Core', confidence: '97,8%'},
  {time: '17:55:30', id: 'REQ-99281-B', event: 'Orkestrasi Hasil Lab: HbA1c 7,2%. Penilaian risiko selesai.', status: 'TERVERIFIKASI', agent: 'Endo-Agent', confidence: '99,1%'},
  {time: '17:42:01', id: 'REQ-99280-M', event: 'Analisis Grafik Pertumbuhan Anak. Pasien berada di persentil ke-85.', status: 'TERVERIFIKASI', agent: 'Peds-Oracle', confidence: '95,5%'},
];

export type UserLog = {
  time: string;
  id: string;
  event: string;
  status: string;
  location: string;
  agent: string;
  confidence: string;
};

export const userLogs: UserLog[] = [
  {time: '18:12:45', id: 'REQ-99283-X', event: 'Interpretasi CXR untuk Batuk Kronis. Agent mendeteksi opasitas di lobus kanan atas.', status: 'DIVERIFIKASI OLEH DR. FERDI ISKANDAR', location: 'Puskesmas Balowerti', agent: 'Imaging-V3', confidence: '99,4%'},
  {time: '18:09:12', id: 'REQ-99282-A', event: 'Analisis Irama EKG. Terdeteksi Sinus Bradycardia dengan Normal Axis.', status: '', location: 'RSUD Dr. Soedono', agent: 'Cardio-Core', confidence: '97,8%'},
  {time: '17:55:30', id: 'REQ-99281-B', event: 'Orkestrasi Hasil Lab: HbA1c 7,2%. Penilaian risiko selesai.', status: 'DIVERIFIKASI OLEH DR. RINA W.', location: 'Lab Sentral', agent: 'Endo-Agent', confidence: '99,1%'},
  {time: '17:42:01', id: 'REQ-99280-M', event: 'Analisis Grafik Pertumbuhan Anak. Pasien berada di persentil ke-85.', status: '', location: 'Klinik Satria', agent: 'Peds-Oracle', confidence: '95,5%'},
];

export type Kpi = {
  label: string;
  value: string;
  delta: string;
  positive: boolean;
  spark: string;
};

export const kpis: Kpi[] = [
  {label: 'Pengguna Aktif', value: '12.847', delta: '+18%', positive: true, spark: '0,21 9,19 18,17 27,15 36,16 45,13 55,10 64,8 73,7 82,5 91,3 100,1'},
  {label: 'Akurasi Diagnostik', value: '94,2%', delta: '+2,1pp', positive: true, spark: '0,16 9,14 18,12 27,14 36,10 45,8 55,10 64,6 73,4 82,3 91,2 100,1'},
  {label: 'Encounter Klinis', value: '284K', delta: '+31%', positive: true, spark: '0,22 9,20 18,18 27,15 36,12 45,14 55,10 64,7 73,6 82,4 91,2 100,1'},
  {label: 'Tingkat Adopsi', value: '67%', delta: '+8pp', positive: true, spark: '0,18 9,17 18,15 27,14 36,12 45,11 55,9 64,8 73,6 82,5 91,3 100,2'},
  {label: 'Waktu-to-Insight', value: '4,2d', delta: '\u22121,3d', positive: true, spark: '0,2 9,4 18,5 27,7 36,9 45,10 55,12 64,14 73,16 82,18 91,20 100,21'},
];

export type Insight = {
  severity: 'positive' | 'notable' | 'critical';
  summary: string;
  detail: string;
};

export const insights: Insight[] = [
  {severity: 'positive', summary: 'Akurasi diagnostik meningkat 2,1 poin persentase, mencapai 94,2% di seluruh spesialisasi.', detail: 'Ini merupakan peningkatan kuartal tunggal terbesar sejak peluncuran dan memperlebar jarak dari baseline tanpa bantuan (88,3%) menjadi hampir 6 poin. Peningkatan ini terutama didorong oleh perbaikan pada model Pulmonologi dan Neurologi setelah update inference v1.2. [1][3]'},
  {severity: 'positive', summary: 'Kardiologi dan Pulmonologi memimpin adopsi, mencakup 41% dari seluruh encounter klinis.', detail: 'Spesialisasi dengan kompleksitas tinggi menunjukkan engagement terkuat, dengan Kardiologi mencapai akurasi 96,4% dan Pulmonologi di 95,1%. Departemen ini juga melaporkan tingkat churn terendah (6,2% kuartalan). [2]'},
  {severity: 'critical', summary: 'Konversi aktivasi-ke-penggunaan harian menunjukkan penurunan 34%, mengindikasikan hambatan onboarding bagi dokter umum.', detail: 'Meskipun 75% pengguna terinstal melakukan aktivasi (\u22653 kueri di minggu pertama), hanya 28% yang mencapai status aktif harian. Umpan balik kualitatif menunjukkan bahwa pengaturan konteks klinis awal membutuhkan terlalu banyak langkah untuk alur kerja layanan primer yang terbatas waktu. [5][7]'},
  {severity: 'positive', summary: 'Waktu-to-insight menurun menjadi 4,2 detik, peningkatan 24% dari Q4 2025.', detail: 'Migrasi tim engineering ke endpoint inference dengan edge-cache mengurangi latency respons median dari 5,5d menjadi 4,2d. Latency P95 turun dari 9,8d menjadi 7,1d. [6]'},
  {severity: 'notable', summary: 'Pengguna berpengalaman menunjukkan tingkat konfirmasi 17 poin persentase lebih tinggi daripada pengguna baru.', detail: 'Tingkat diagnosis terkonfirmasi 55% di antara kohort berpengalaman (>6 bulan) vs. 38% untuk pengguna baru (<3 bulan) menunjukkan kurva pembelajaran yang signifikan, konsisten dengan literatur CDSS. [4]'},
  {severity: 'critical', summary: 'Akurasi Praktik Umum di 90,8% tertinggal 4\u20136 poin dari spesialisasi lain.', detail: 'Encounter praktik umum melibatkan diagnosis banding yang lebih luas dengan sinyal spesifisitas yang lebih rendah dalam data EHR. Roadmap fine-tuning model Q2 mencakup korpus pelatihan khusus praktik umum yang diturunkan dari database kasus layanan primer. [3][8]'},
  {severity: 'positive', summary: '82% pengguna teraktivasi mempertahankan engagement mingguan setelah 90 hari, melampaui target produk 70%.', detail: 'Retensi D90 di antara kohort teraktivasi melampaui target internal sebesar 12 poin. Kurva retensi mendatar setelah hari ke-45, menunjukkan bahwa enam minggu pertama adalah jendela kritis untuk pembentukan kebiasaan. [5]'},
  {severity: 'positive', summary: 'Sensitivitas dan spesifisitas keduanya melampaui 93%, mengungguli benchmark CDSS yang dipublikasikan sebesar 1\u20137 poin.', detail: 'Sensitivitas Sentra Assist sebesar 94,8% dan spesifisitas 93,1% dibandingkan secara menguntungkan dengan benchmark meta-analisis CDSS yaitu 93,1% dan 92,0%. [4][6]'},
];

export const sources: string[] = [
  'Platform Analitik Internal Sentra Assist. Dashboard Metrik Produk Kuartalan, Q1 2026. Data penggunaan teranonymisasi yang diagregasi dari 142 fasilitas kesehatan yang berpartisipasi.',
  'Studi Dampak Klinis Sentra Assist. Analisis Akurasi Diagnostik Tingkat Spesialisasi, Jan\u2013Mar 2026. Studi observasional prospektif di 5 departemen, N=284.128 encounter.',
  'Sutton, R.T. et al. (2024). "Diagnostic accuracy of clinical decision support systems: a systematic review and meta-analysis." The Lancet Digital Health, 6(4), e245\u2013e258.',
  'Konsorsium Benchmark CDSS. Benchmark Performa Industri untuk Diagnostik Berbantuan AI, Edisi 2025. Dataset validasi multi-institusi mencakup 1,2 juta encounter klinis.',
  'Tim Riset Pengguna Sentra Assist. Studi Integrasi Alur Kerja Dokter, Q4 2025 \u2013 Q1 2026. Studi metode campuran: 24 wawancara mendalam, 156 responden survei.',
  'Engineering Sentra Assist. Laporan Performa Platform, Q1 2026. Metrik latency infrastruktur, benchmark endpoint inference, dan hit rate edge cache.',
  'Chen, M.L. & Patel, A.K. (2025). "Onboarding friction in clinical AI tools: barriers to adoption in primary care." JAMIA, 32(8), 1412\u20131423.',
  'World Health Organization. Clinical Decision Support in Primary Care: Implementation Guidelines, 2024. WHO Technical Report Series, No. 1042.',
];

export type TocItem = {id: string; label: string};

export const tocItems: TocItem[] = [
  {id: 'executive-summary', label: 'Ringkasan Eksekutif'},
  {id: 'key-metrics', label: 'Metrik Utama'},
  {id: 'usage-trends', label: 'Penggunaan & Adopsi'},
  {id: 'diagnostic-performance', label: 'Performa Diagnostik'},
  {id: 'clinical-outcomes', label: 'Luaran Klinis'},
  {id: 'insights', label: 'Insight Utama'},
  {id: 'sources', label: 'Sumber'},
];

export const transparencyStats = [
  {val: '14.204', label: 'Rekaman Teriorkestrasi'},
  {val: '98,2%', label: 'Keyakinan Klinis'},
  {val: '128', label: 'Agent Aktif'},
  {val: '42', label: 'Fasilitas Kesehatan'},
];
