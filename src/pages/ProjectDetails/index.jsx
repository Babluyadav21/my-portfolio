import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../../components/Button'
import { projects } from '../../data/projects'
import { pageFade } from '../../lib/motion'
const Row = ({ h, children }) => (
  <div className="grid gap-4 border-t border-[var(--border)] py-6 md:grid-cols-[1fr_2fr]"><h2 className="label">{h}</h2><div className="muted">{children}</div></div>)
export default function ProjectDetails() {
  const p = projects.find(x => x.slug === useParams().slug)
  if (!p) return <Navigate to="/" replace />
  return (
    <motion.main {...pageFade} className="inner pb-24 pt-28">
      <Link to={{ pathname: '/', hash: '#work' }} className="mono inline-flex min-h-11 items-center text-sm tracking-widest">← BACK TO WORK</Link>
      <h1 className="my-6 text-4xl font-bold uppercase leading-none tracking-tighter md:text-7xl">{p.title}</h1>
      <div className="mb-10 grid aspect-video place-items-center overflow-hidden border border-[var(--border)] bg-[var(--surface)] text-8xl font-bold text-[var(--accent)]">
        {p.image ? <img src={p.image} alt={`${p.title} preview`} className="h-full w-full object-cover" /> : p.n}</div>
      <Row h="OVERVIEW">{p.description}</Row><Row h="CHALLENGE">{p.challenge}</Row><Row h="SOLUTION">{p.solution}</Row>
      <Row h="KEY FEATURES"><ul className="list-disc pl-5">{p.features.map(f => <li key={f}>{f}</li>)}</ul></Row>
      <Row h="TECH STACK"><ul className="flex flex-wrap gap-2">{p.technologies.map(t => <li key={t} className="tag">{t}</li>)}</ul></Row>
      <div className="mt-8 flex flex-wrap gap-3"><Button href={p.liveUrl} variant="primary">Live website</Button><Button href={p.githubUrl}>GitHub</Button></div>
    </motion.main>)
}
