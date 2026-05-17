interface IProps {
  href: string
  children: React.ReactNode
  className?: string
}

export const ExtLink = ({ href, children, className }: IProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
    {children}
  </a>
)
