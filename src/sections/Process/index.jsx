import { motion } from 'framer-motion'
import { process } from '../../data/skills'
import { fadeUp, reveal } from '../../lib/motion'
export default function Process() {
  return (
    <section className="section"><motion.div {...reveal} className="inner">
      <motion.p variants={fadeUp} className="label">Process</motion.p><motion.h2 variants={fadeUp} className="h2">How I build</motion.h2>
      <ol className="grid border-l border-t border-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
        {process.map(([t, d], i) => (
          <motion.li key={t} variants={fadeUp} className="border-b border-r border-[var(--border)] bg-[var(--surface)] p-8">
            <b className="mono text-[13px] text-[var(--accent)]">0{i + 1}</b>
            <h3 className="my-4 text-3xl font-bold uppercase tracking-tight">{t}</h3><p className="muted">{d}</p></motion.li>))}
      </ol></motion.div></section>)
}
