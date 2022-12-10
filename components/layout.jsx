import styles from './layout.module.css'
import Link from 'next/link'

export default function Layout({children, home}) {
    return (
        <div id="lout" className={styles.layout_bg_light}>
            <div>
                {home ? (
                    <h4>Home Page</h4>
                ) : (
                    <h4>
                        <Link href='/'>Back to home page</Link>
                    </h4>
                )}
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}