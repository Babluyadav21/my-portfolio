import { motion } from 'framer-motion'
import { fadeUp, reveal } from '../../lib/motion'
const stats = [['2+', 'Years experience'], ['Full stack', 'React → Node → SQL/NoSQL'], ['Production', 'Responsive, accessible UIs']]
export default function About() {
  return (
    <section id="about" className="section"><motion.div {...reveal} className="inner grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
      <div>
        <motion.p variants={fadeUp} className="label">About me</motion.p>
        <motion.h2 variants={fadeUp} className="h2">About</motion.h2>
        <motion.p variants={fadeUp} className="mb-7 text-3xl font-medium leading-tight tracking-tight md:text-5xl">I don't just write code. <span className="muted">I build products that solve real problems.</span></motion.p>
        <motion.p variants={fadeUp} className="muted">I'm a Full Stack Developer with around 2 years of professional frontend development experience.</motion.p>
        <motion.p variants={fadeUp} className="muted mt-4">My core strength is building responsive and scalable interfaces with React.js while continuously expanding my expertise across backend development, APIs, databases and modern application architecture.</motion.p>
      </div>
      <motion.dl variants={fadeUp} className="self-start border border-[var(--border)]">
        {stats.map(([v, l]) => <div key={l} className="border-b border-[var(--border)] bg-[var(--surface)] p-6 last:border-0"><dt className="mono text-xs uppercase tracking-widest muted">{l}</dt><dd className="mt-1 text-4xl font-bold tracking-tight">{v}</dd></div>)}
      </motion.dl>
    </motion.div></section>)
}
