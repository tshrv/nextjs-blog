import '../styles/globals.css'

export default function App({Component, pageProps}) {
    console.log('loading from _app.js')
    return <Component {...pageProps}/>
}