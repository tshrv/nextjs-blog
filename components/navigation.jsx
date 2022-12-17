import Link from 'next/link'

export default function Navigation() {
    return <nav>
        <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>About me</Link></li>
            <li><Link href='/about/work'>Work Experience</Link></li>
            <li><Link href='/blog'>Blog</Link></li>
        </ul>
    </nav>
}