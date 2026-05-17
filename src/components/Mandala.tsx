interface IProps {
  className?: string
}

export const Mandala = ({ className }: IProps) => (
  <svg viewBox="0 0 400 400" className={className} fill="none" stroke="currentColor" strokeWidth="0.6">
    <circle cx="200" cy="200" r="180" />
    <circle cx="200" cy="200" r="150" />
    <circle cx="200" cy="200" r="120" />
    <circle cx="200" cy="200" r="90" />
    <circle cx="200" cy="200" r="60" />
    {Array.from({ length: 24 }).map((_, i) => {
      const a = (i * Math.PI * 2) / 24
      return <line key={i} x1={200} y1={200} x2={200 + Math.cos(a) * 180} y2={200 + Math.sin(a) * 180} />
    })}
    {Array.from({ length: 12 }).map((_, i) => {
      const a = (i * Math.PI * 2) / 12
      return <circle key={i} cx={200 + Math.cos(a) * 150} cy={200 + Math.sin(a) * 150} r={3} fill="currentColor" />
    })}
  </svg>
)
