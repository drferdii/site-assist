import Link from 'next/link';

type HeaderProps = {
  current?: 'manifesto' | 'capabilities' | 'principles' | 'contact' | 'privacy' | 'terms' | 'acars';
  dark?: boolean;
};

const NAV_ITEMS: {key: NonNullable<HeaderProps['current']>; label: string; href: string}[] = [
  {key: 'manifesto', label: 'Manifesto', href: '/manifesto'},
  {key: 'capabilities', label: 'Capabilities', href: '/capabilities'},
  {key: 'principles', label: 'Principles', href: '/principles'},
  {key: 'contact', label: 'Contact', href: '/contact'},
  {key: 'acars', label: 'ACARS', href: '/acars'},
];

export default function SiteHeader({current, dark = false}: HeaderProps) {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/">SENTRA&nbsp;ASSIST</Link>
      <nav aria-label="Primary">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            aria-current={current === item.key ? 'page' : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
