import { motion } from 'framer-motion'
import ProjectCard from '../../components/ProjectCard'
import { projects } from '../../data/projects'
import { fadeUp, reveal } from '../../lib/motion'
export default function Projects() {
  return (
    <section id="work" className="section"><motion.div {...reveal} className="inner">
      <motion.p variants={fadeUp} className="label">Selected work</motion.p><motion.h2 variants={fadeUp} className="h2" style={{ marginBottom: 16 }}>Selected work</motion.h2>
      <motion.p variants={fadeUp} className="muted mb-10">A selection of applications and digital experiences I've designed and developed.</motion.p>
      {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
    </motion.div></section>)
}
