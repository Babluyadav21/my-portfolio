import { useEffect, useRef, useState } from 'react'
export default function CustomCursor() {
  const ref = useRef(null); const [on, setOn] = useState(false)
  useEffect(() => {
    const fine = matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!fine || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setOn(true)
    const move = e => { const el = ref.current; if (!el) return
      el.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)`
      el.dataset.h = String(!!e.target.closest?.('a,button,[data-cursor]')) }
    addEventListener('mousemove', move, { passive: true })
    return () => removeEventListener('mousemove', move)
  }, [])
  return on ? <div ref={ref} className="cursor-dot" aria-hidden="true" /> : null
}
