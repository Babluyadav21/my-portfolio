import { Link } from 'react-router-dom'
export default function Button({ to, href, variant = 'ghost', children, className = '', ...rest }) {
  const cls = `group inline-flex min-h-12 items-center justify-between gap-3 border px-6 font-mono text-[13px] uppercase tracking-widest transition-colors ${
    variant === 'primary' ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--on-accent)] hover:brightness-110' : 'border-[var(--border)] hover:border-[var(--accent)]'} ${className}`
  const arrow = <span aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
  const inner = <>{children}{arrow}</>
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>
  return <button className={cls} {...rest}>{inner}</button>
}
