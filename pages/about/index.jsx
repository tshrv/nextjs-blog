import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function About(props) {
    return (
      <Layout>  
        <div className={styles.container}>
          <Head>
            <title>About TS</title>
          </Head>
          <h1 className={styles.title}>About Me</h1>
          <h2>CSR {getTimestamp()}</h2>
          <h2>SSR {props.server_side_timestamp}</h2>
          <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>About me</Link></li>
            <li><Link href='/about/work'>Work Experience</Link></li>
          </ul>
          <Image
            src="/images/profile.jpeg" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="TS"
          />
          {/* <img src="/images/profile.jpeg" alt="Tushar Srivastava ke Head ka Photo" /> */}
          <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolores architecto? Voluptate quis dolorem ex itaque illum harum minus velit! Iusto, et! Quos quia facilis accusantium veniam odio quidem praesentium?
          </p>
          <style jsx global>
            {`
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
            `}
          </style>
        </div>
      </Layout>
    )
}

function getTimestamp() {
 let time = getCurrentTime()
 console.log('client side rendering', time)
 return time
}

function getCurrentTime() {
  let now = new Date()
  return now.toTimeString()
}

export async function getServerSideProps() {
  let server_side_timestamp = getCurrentTime()
  console.log('server side rendering', server_side_timestamp)
  return {
    'props': {server_side_timestamp}
  }
}