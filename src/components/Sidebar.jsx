import { Pencil } from 'phosphor-react'

import styles from './Sidebar.module.css'
import Avatar from './Avatar'

export function Sidebar() {
    return (
        <aside className={styles.siderbar}>
            <img className={styles.cover}
                src="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/Gab-Pereir.png"/>
                <strong>Gabriel Pereira</strong>
                <span>Estágiario em Desenvolvimento</span>
            </div>

            <footer>
                <a href="#">
                    <Pencil />
                    Editar seu
                </a>
            </footer>
        </aside>
    )
}