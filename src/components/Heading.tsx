type HeadingProps = {
    children: string
    styles: React.CSSProperties
}

export const Heading = ({children, styles}: HeadingProps) => {
    return <div style={styles}><h2>{children}</h2></div>
}