import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Button from '../Button'
import { profile } from '../../data/experience'
const links = [['Work','work'],['About','about'],['Skills','skills'],['Experience','experience'],['Contact','contact']]
const to = id => ({ pathname: '/', hash: '#' + id })

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false); const [open, setOpen] = useState(false); const [active, setActive] = useState('')
  const [light, setLight] = useState(() => { try { const s = localStorage.getItem('theme'); return s ? s === 'light' : matchMedia('(prefers-color-scheme: light)').matches } catch { return false } })
  useEffect(() => { document.documentElement.dataset.theme = light ? 'light' : 'dark'; try { localStorage.setItem('theme', light ? 'light' : 'dark') } catch {} }, [light])
  useEffect(() => { const f = () => setScrolled(scrollY > 20); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [open])
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-40% 0px -55% 0px' })
    links.forEach(([, id]) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  return (<>
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${scrolled ? 'border-[var(--border)] backdrop-blur-md bg-[color-mix(in_srgb,var(--bg)_80%,transparent)]' : 'border-transparent'}`}>
      <nav aria-label="Primary" className="inner flex h-[72px] items-center justify-between">
        <Link to="/" className="font-bold tracking-wide">BABLU KUMAR</Link>
        <div className="mono hidden gap-8 text-xs tracking-[.12em] md:flex">
          {links.map(([n, id]) => <Link key={id} to={to(id)} aria-current={active === id ? 'true' : undefined}
            className={`border-b py-1.5 transition-colors ${active === id ? 'border-[var(--accent)]' : 'border-transparent muted hover:text-[var(--text)]'}`}>{n.toUpperCase()}</Link>)}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setLight(l => !l)} aria-label="Toggle theme" className="h-11 w-11 border border-[var(--border)] hover:border-[var(--accent)]">{light ? '☼' : '☾'}</button>
          <Button to={to('contact')} variant="primary" className="hidden md:inline-flex">Let's talk</Button>
          <button onClick={() => setOpen(true)} aria-expanded={open} className="mono h-11 border border-[var(--border)] px-4 text-xs tracking-widest md:hidden">MENU</button>
        </div>
      </nav>
    </header>
    <AnimatePresence>{open && (
      <motion.div className="fixed inset-0 z-[60] flex flex-col bg-[var(--bg)] px-6 pb-10 pt-24" initial={{ y: '-100%' }} animate={{ y: 0 }} exit={{ y: '-100%' }} transition={{ duration: .5, ease: [.7, 0, .2, 1] }}>
        <button onClick={() => setOpen(false)} className="mono absolute right-5 top-4 h-11 border border-[var(--border)] px-4 text-xs tracking-widest">CLOSE</button>
        {[['Home','top'], ...links].map(([n, id], i) => (
          <motion.div key={id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: .15 + i * .05 } }}>
            <Link onClick={() => setOpen(false)} to={id === 'top' ? '/' : to(id)} className="block min-h-14 py-1.5 text-[clamp(36px,11vw,56px)] font-bold uppercase tracking-tighter">{n}</Link></motion.div>))}
        <div className="mono mt-auto flex gap-6 text-sm">{profile.socials.map(([n, h]) => <a key={n} href={h} rel="noopener">{n}</a>)}</div>
      </motion.div>)}</AnimatePresence>
  </>)
}
