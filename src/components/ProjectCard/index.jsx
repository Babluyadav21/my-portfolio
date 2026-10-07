import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/motion'
export default function ProjectCard({ project: p, index }) {
  return (
    <motion.article variants={fadeUp}>
      <Link to={`/work/${p.slug}`} aria-label={`View ${p.title}`} className="group grid items-center gap-6 border-t border-[var(--border)] py-8 md:grid-cols-2 md:gap-12">
        <div className={`relative aspect-[16/10] overflow-hidden border border-[var(--border)] bg-[var(--surface-2)] ${index % 2 ? 'md:order-2' : ''}`}>
          <div className="grid h-full place-items-center text-8xl font-bold text-[var(--accent)] transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent 0 31px,var(--border) 31px 32px),repeating-linear-gradient(90deg,transparent 0 31px,var(--border) 31px 32px)' }}>
            {p.image ? <img src={p.image} alt={`${p.title} preview`} loading="lazy" className="h-full w-full object-cover" /> : p.n}</div>
          <div className="mono absolute inset-0 flex items-center justify-center gap-2 bg-[color-mix(in_srgb,var(--bg)_70%,transparent)] text-[13px] tracking-widest opacity-0 transition-opacity group-hover:opacity-100">VIEW PROJECT ↗</div>
        </div>
        <div>
          <span className="mono inline-block text-[13px] text-[var(--accent)] transition-transform group-hover:translate-x-2">{p.n}</span>
          <h3 className="my-3 text-3xl font-bold uppercase leading-none tracking-tight md:text-5xl">{p.title}</h3>
          <p className="muted">{p.description}</p>
          <ul className="mt-5 flex flex-wrap gap-1.5">{p.technologies.map(t => <li key={t} className="tag transition-transform group-hover:-translate-y-0.5">{t}</li>)}</ul>
          <span className="mono mt-5 inline-block text-[13px] tracking-widest transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--accent)]">VIEW PROJECT ↗</span>
        </div>
      </Link>
    </motion.article>)
}
