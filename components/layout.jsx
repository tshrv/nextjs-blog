import styles from './layout.module.css'

export default function Layout({children}) {
    return <div id="lout" className={styles.layout_bg_light}>{children}</div>
}