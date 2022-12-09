import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function About() {
    return (
    <div className={styles.container}>
        <h1 className={styles.title}>Work Experience</h1>
        <ul>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/about'>About me</Link></li>
          <li><Link href='/about/work'>Work Experience</Link></li>
        </ul>
        <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolores architecto? Voluptate quis dolorem ex itaque illum harum minus velit! Iusto, et! Quos quia facilis accusantium veniam odio quidem praesentium?
        </p>
        <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
    )
}