import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { experience, education } from '../../data/experience'
import { fadeUp, reveal } from '../../lib/motion'
export default function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  return (
    <section id="experience" className="section"><motion.div {...reveal} className="inner">
      <motion.p variants={fadeUp} className="label">Experience</motion.p><motion.h2 variants={fadeUp} className="h2">Experience</motion.h2>
      <div ref={ref} className="relative border-l border-[var(--border)] pl-7 md:pl-12">
        <motion.span aria-hidden="true" style={{ scaleY }} className="absolute -left-px top-0 h-full w-px origin-top bg-[var(--accent)]" />
        {experience.map(e => (
          <motion.article key={e.role} variants={fadeUp} className="relative max-w-3xl">
            <i className="absolute -left-[33px] top-1 h-2.5 w-2.5 bg-[var(--accent)] md:-left-[53px]" />
            <p className="label">{e.period}</p><h3 className="mt-3 text-3xl font-bold uppercase tracking-tight md:text-4xl">{e.role}</h3>
            <p className="mb-3 mt-1">{e.company}</p><p className="muted">{e.text}</p>
            <ul className="mt-5 flex flex-wrap gap-2">{e.tags.map(t => <li key={t} className="tag">{t}</li>)}</ul>
          </motion.article>))}
      </div>
      <motion.div variants={fadeUp} className="mt-20 border-t border-[var(--border)] pt-8">
        <p className="label">Education</p>
        {education.map(ed => <div key={ed.short} className="mt-4"><h3 className="text-2xl font-bold uppercase tracking-tight md:text-4xl">{ed.degree}</h3><p className="mono muted mt-1">{ed.short}</p></div>)}
      </motion.div></motion.div></section>)
}
