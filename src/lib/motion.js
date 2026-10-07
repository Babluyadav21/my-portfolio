export const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: .7, ease: [.2, .7, .2, 1] } } }
export const stagger = { hidden: {}, visible: { transition: { staggerChildren: .08 } } }
export const pageFade = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -12 } }
export const reveal = { variants: stagger, initial: 'hidden', whileInView: 'visible', viewport: { once: true, margin: '-80px' } }
