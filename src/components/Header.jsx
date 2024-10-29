import styles from './Header.module.css'
import igninitelogo from '../assets/ignite-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igninitelogo} alt="Logotipo do Ignite" />
        </header>
    )
}