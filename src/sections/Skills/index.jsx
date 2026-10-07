import { motion } from 'framer-motion'
import { skillGroups } from '../../data/skills'
import { fadeUp, reveal } from '../../lib/motion'
export default function Skills() {
  return (
    <section id="skills" className="section"><motion.div {...reveal} className="inner">
      <motion.p variants={fadeUp} className="label">Stack</motion.p><motion.h2 variants={fadeUp} className="h2">Technical skills</motion.h2>
      <div className="grid gap-4 md:grid-cols-2">
        {Object.entries(skillGroups).map(([g, items]) => (
          <motion.div key={g} variants={fadeUp} className="card">
            <h3 className="label mb-5">{g}</h3>
            <ul className="flex flex-wrap gap-2">{items.map(t => <li key={t} className="mono cursor-default border border-[var(--border)] px-3.5 py-2 text-[13px] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]">{t}</li>)}</ul>
          </motion.div>))}
      </div></motion.div></section>)
}
