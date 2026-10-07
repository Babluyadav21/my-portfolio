import { marquee } from '../../data/skills'
export default function Marquee() {
  return <div className="marquee" aria-hidden="true"><div className="marquee-track">{[...marquee, ...marquee].map((t, i) => <span key={i}>{t}</span>)}</div></div>
}
