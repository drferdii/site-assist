import Link from 'next/link';

type Section = {key: string; title: string; items: {label: string; href: string; ariaCurrent?: boolean}[]};

const SECTIONS: Section[] = [
  {
    key: 'pages',
    title: 'Pages',
    items: [
      {label: 'Manifesto', href: '/manifesto'},
      {label: 'Capabilities', href: '/capabilities'},
      {label: 'Principles', href: '/principles'},
      {label: 'Contact', href: '/contact'},
      {label: 'ACARS', href: '/acars'},
    ],
  },
  {
    key: 'legal',
    title: 'Legal',
    items: [
      {label: 'Privacy', href: '/privacy'},
      {label: 'Terms', href: '/terms'},
      {label: 'Press', href: 'mailto:press@sentraassist.id'},
    ],
  },
  {
    key: 'contact',
    title: 'Contact',
    items: [
      {label: 'halo@sentraassist.id', href: 'mailto:halo@sentraassist.id'},
      {label: 'Kirim brief', href: '/contact'},
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div>
        <Link className="col-mark" href="/">SENTRA&nbsp;ASSIST</Link>
        <span className="col-tagline">Clinical intelligence untuk layanan primer Indonesia.</span>
      </div>
      {SECTIONS.map((section) => (
        <div key={section.key}>
          <p className="col-title">{section.title}</p>
          <ul className="col-list">
            {section.items.map((item) => (
              <li key={item.label}>
                <Link href={item.href} aria-current={item.ariaCurrent ? 'page' : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="legal">
        <span>&copy; 2026 Sentra&nbsp;Assist</span>
        <span>Assistensi yang tenang, audited, dan dapat dipertanggungjawabkan.</span>
      </div>
    </footer>
  );
}
