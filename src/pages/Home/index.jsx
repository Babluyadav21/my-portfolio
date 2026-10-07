import { motion } from 'framer-motion'
import Hero from '../../sections/Hero'
import About from '../../sections/About'
import Services from '../../sections/Services'
import Projects from '../../sections/Projects'
import Process from '../../sections/Process'
import Skills from '../../sections/Skills'
import Experience from '../../sections/Experience'
import Contact from '../../sections/Contact'
import { pageFade } from '../../lib/motion'
export default function Home() {
  return <motion.main {...pageFade}><Hero /><About /><Services /><Projects /><Process /><Skills /><Experience /><Contact /></motion.main>
}
