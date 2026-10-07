import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
export default function Preloader({ onDone }) {
  const [v, setV] = useState(0)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { onDone(); return }
    const iv = setInterval(() => setV(p => Math.min(100, p + Math.random() * 9 + 4)), 60)
    return () => clearInterval(iv)
  }, [onDone])
  useEffect(() => { if (v >= 100) { const t = setTimeout(onDone, 250); return () => clearTimeout(t) } }, [v, onDone])
  const msg = ['INITIALIZING...','LOADING ASSETS...','CONNECTING API...','READY'][Math.min(3, Math.floor(v / 26))]
  return (
    <motion.div role="status" className="fixed inset-0 z-[100] grid place-items-center bg-[var(--bg)]" exit={{ y: '-100%' }} transition={{ duration: .8, ease: [.7, 0, .2, 1] }}>
      <div className="w-[min(380px,86vw)]">
        <b className="block text-4xl tracking-tight">BABLU KUMAR</b>
        <small className="mb-7 mt-1 block text-xs tracking-[.14em] muted">FULL STACK DEVELOPER</small>
        <div className="h-0.5 bg-[var(--border)]"><div className="h-full bg-[var(--accent)]" style={{ width: v + '%' }} /></div>
        <div className="mono mt-2 flex justify-between text-xs muted"><span>{msg}</span><span>{Math.floor(v)}%</span></div>
      </div>
    </motion.div>
  )
}
