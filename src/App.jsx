import { useState, useCallback, useEffect, lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'))

function ScrollManager({ ready }) {
  const { hash, pathname } = useLocation()
  useEffect(() => {
    if (!ready) return
    if (!hash) { scrollTo(0, 0); return }
    const t = setTimeout(() => document.querySelector(hash)?.scrollIntoView(), 80)
    return () => clearTimeout(t)
  }, [hash, pathname, ready])
  return null
}
export default function App() {
  const [ready, setReady] = useState(false); const loc = useLocation()
  const done = useCallback(() => setReady(true), [])
  return (<>
    <AnimatePresence>{!ready && <Preloader key="pre" onDone={done} />}</AnimatePresence>
    <CustomCursor /><Navbar /><ScrollManager ready={ready} />
    <Suspense fallback={<p className="p-10">Loading...</p>}>
      <AnimatePresence mode="wait">
        <Routes location={loc} key={loc.pathname}>
          <Route path="/" element={<Home />} /><Route path="/work" element={<Home />} />
          <Route path="/work/:slug" element={<ProjectDetails />} />
        </Routes></AnimatePresence></Suspense>
  </>)
}
