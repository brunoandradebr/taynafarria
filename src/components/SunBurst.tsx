interface IProps {
  className?: string
}

export const SunBurst = ({ className }: IProps) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1">
    {Array.from({ length: 16 }).map((_, i) => {
      const a = (i * Math.PI * 2) / 16
      return (
        <line
          key={i}
          x1={50 + Math.cos(a) * 14}
          y1={50 + Math.sin(a) * 14}
          x2={50 + Math.cos(a) * 28}
          y2={50 + Math.sin(a) * 28}
        />
      )
    })}
    <circle cx="50" cy="50" r="6" />
  </svg>
)
