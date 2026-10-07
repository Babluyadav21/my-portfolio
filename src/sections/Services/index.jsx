import { motion } from 'framer-motion'
import { services } from '../../data/skills'
import { fadeUp, reveal } from '../../lib/motion'
export default function Services() {
  return (
    <section className="section" aria-labelledby="svc"><motion.div {...reveal} className="inner">
      <motion.p variants={fadeUp} className="label">Services</motion.p><motion.h2 id="svc" variants={fadeUp} className="h2">What I do</motion.h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <motion.article key={s.title} variants={fadeUp} className="card group">
            <span className="mono text-xs muted">0{i + 1}</span>
            <span aria-hidden="true" className="my-6 block text-3xl text-[var(--accent)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-6">{s.icon}</span>
            <h3 className="mb-2 text-2xl font-bold leading-tight tracking-tight">{s.title}</h3><p className="muted">{s.text}</p>
            <ul className="mt-5 flex flex-wrap gap-1.5">{s.tech.map(t => <li key={t} className="tag">{t}</li>)}</ul>
          </motion.article>))}
      </div></motion.div></section>)
}
