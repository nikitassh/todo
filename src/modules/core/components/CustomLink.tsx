import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom'

export const CustomLink = ({ children, to, ...props }: LinkProps) => {
    const resolved = useResolvedPath(to)
    const match = useMatch({ path: resolved.pathname, end: true })

    return (
        <Link to={to} {...props} style={{ textDecoration: match ? 'underline' : 'none' }}>
            {children} {match && ' (active)'}
        </Link>
    )
}