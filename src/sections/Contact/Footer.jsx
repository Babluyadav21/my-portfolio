import { profile } from '../../data/experience'
import Button from '../../components/Button'
export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-14">
      <div className="inner">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div><b className="block text-4xl font-bold tracking-tighter md:text-5xl">BABLU KUMAR</b>
            <p className="mono mt-2 text-xs tracking-[.12em] muted">FULL STACK DEVELOPER</p>
            <p className="muted mt-4 max-w-xs">Building modern digital experiences with code, design and technology.</p>
            <div className="mono mt-5 flex gap-6 text-xs tracking-widest">{profile.socials.map(([n, h]) => <a key={n} href={h} rel="noopener" className="hover:text-[var(--accent)]">{n.toUpperCase()}</a>)}</div></div>
          <Button href="#top" onClick={e => { e.preventDefault(); scrollTo({ top: 0, behavior: 'smooth' }) }}>Back to top</Button>
        </div>
        <p className="mono mt-12 text-xs muted">© {new Date().getFullYear()} Bablu Kumar</p>
      </div>
    </footer>)
}
