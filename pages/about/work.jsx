import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function About(props) {
    return (
      <Layout>
        <div className={styles.container}>
            <h1 className={styles.title}>Work Experience</h1>
            <h2>SSG {props.last_build_time}</h2>
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
      </Layout>
    )
}

function getCurrentTime() {
  let now = new Date()
  return now.toTimeString()
}

export async function getStaticProps() {
  let last_build_time = getCurrentTime()
  console.log('static site generation', last_build_time)
  return {
    'props': {last_build_time}
  }
}
