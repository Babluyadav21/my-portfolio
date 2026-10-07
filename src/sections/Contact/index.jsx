import { useState } from 'react'
import Footer from './Footer'
// Frontend-only: set VITE_FORM_ENDPOINT (e.g. Formspree) and VITE_CONTACT_EMAIL in .env.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT
const EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'hello@example.com'
const field = 'w-full border border-[var(--border)] bg-[var(--surface)] p-3.5 text-base focus:border-[var(--accent)] focus:outline-none aria-[invalid=true]:border-red-400'
const lab = 'mono grid gap-1.5 text-xs uppercase tracking-widest muted'
export default function Contact() {
  const [status, setStatus] = useState('idle'); const [errs, setErrs] = useState({})
  async function submit(e) {
    e.preventDefault()
    const form = e.target, d = Object.fromEntries(new FormData(form)), er = {}
    if (d.name.trim().length < 2) er.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) er.email = 'Enter a valid email.'
    if (d.message.trim().length < 10) er.message = 'Message should be at least 10 characters.'
    setErrs(er); if (Object.keys(er).length) return
    setStatus('loading')
    try {
      if (ENDPOINT) {
        const r = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(d) })
        if (!r.ok) throw new Error()
      } else {
        location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Portfolio enquiry: ' + d.type)}&body=${encodeURIComponent(`${d.message}\n\n— ${d.name} (${d.email})`)}`
      }
      setStatus('success'); form.reset()
    } catch { setStatus('error') }
  }
  return (<>
    <section id="contact" className="section"><div className="inner grid gap-12 lg:grid-cols-2 lg:gap-20">
      <div><p className="label">Contact</p>
        <h2 className="h2">Have a project in mind? <em className="not-italic text-[var(--accent)]">Let's build something great.</em></h2></div>
      <form onSubmit={submit} noValidate className="grid gap-4">
        {['name', 'email'].map(k => (
          <label key={k} className={lab}>{k}<input name={k} type={k === 'email' ? 'email' : 'text'} autoComplete={k} className={field} aria-invalid={!!errs[k]} />
            <span className="normal-case tracking-normal text-red-400">{errs[k]}</span></label>))}
        <label className={lab}>Project type<select name="type" className={field}><option>Web application</option><option>Website</option><option>API / Backend</option><option>Other</option></select></label>
        <label className={lab}>Message<textarea name="message" rows={5} className={field} aria-invalid={!!errs.message} /><span className="normal-case tracking-normal text-red-400">{errs.message}</span></label>
        <button disabled={status === 'loading'} className="mono min-h-12 bg-[var(--accent)] text-sm uppercase tracking-widest text-[var(--on-accent)] disabled:opacity-60">{status === 'loading' ? 'Loading...' : 'Send message ↗'}</button>
        <div role="status" aria-live="polite" className="mono text-sm">
          {status === 'success' && <span className="text-[var(--accent)]">Message sent successfully. I'll get back to you soon.</span>}
          {status === 'error' && <span className="text-red-400">Something went wrong. Please try again.</span>}</div>
      </form></div></section>
    <Footer />
  </>)
}
