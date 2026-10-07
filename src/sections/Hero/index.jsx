import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../../components/Button'
import Marquee from './Marquee'
import { profile } from '../../data/experience'
import { fadeUp, stagger } from '../../lib/motion'
const lines = ['$ npm run build', '', '✓ React compiled', '✓ API connected', '✓ Database connected', '✓ Production ready', '', 'STATUS: ONLINE ●']
function Terminal() {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(lines.length); return }
    if (n < lines.length) { const t = setTimeout(() => setN(n + 1), n ? 380 : 900); return () => clearTimeout(t) }
  }, [n])
  return (
    <div className="border border-[var(--border)] bg-[var(--surface)] mono text-[13px] leading-8" role="img" aria-label="Terminal showing a successful production build">
      <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-3 text-xs muted">
        {[0, 1, 2].map(i => <i key={i} className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />)}<span className="ml-2">bablu@developer ~ %</span></div>
      <pre className="min-h-[260px] whitespace-pre-wrap p-5" aria-hidden="true">
        {lines.slice(0, n).map((l, i) => <div key={i} className={l.startsWith('✓') || l.startsWith('$') ? 'text-[var(--accent)]' : ''}>{l}</div>)}
        <span className="blink inline-block h-4 w-2 bg-[var(--accent)] align-middle" /></pre>
    </div>)
}
export default function Hero() {
  return (<>
    <section id="top" className="flex min-h-svh items-center pb-16 pt-32">
      <div className="inner grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.p variants={fadeUp} className="label flex items-center gap-2.5"><i className="blink h-2 w-2 rounded-full bg-[var(--accent)]" />Available for opportunities</motion.p>
          <motion.h1 variants={fadeUp} className="my-6 text-[clamp(44px,8.6vw,112px)] font-bold uppercase leading-[.95] tracking-tighter">I build<br />digital products<br /><span className="text-[var(--accent)]">that work.</span></motion.h1>
          <motion.p variants={fadeUp} className="muted max-w-lg text-lg">I'm Bablu Kumar, a Full Stack Developer focused on building modern, performant and user-centric web applications using React.js, Node.js and modern web technologies.</motion.p>
          <motion.div variants={fadeUp} className="my-8 flex flex-wrap gap-3">
            <Button to={{ pathname: '/', hash: '#work' }} variant="primary" className="w-full sm:w-auto">View my work</Button>
            <Button href={profile.resume} download className="w-full sm:w-auto">Download resume</Button></motion.div>
          <motion.div variants={fadeUp} className="mono flex gap-6 text-xs tracking-widest muted">
            {profile.socials.map(([n, h]) => <a key={n} href={h} rel="noopener" className="hover:text-[var(--text)]">{n.toUpperCase()}</a>)}</motion.div>
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: .3 }}><Terminal /></motion.div>
      </div>
    </section>
    <Marquee />
  </>)
}
