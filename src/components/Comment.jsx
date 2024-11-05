import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import Avatar from './Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>

            <Avatar hasBorder={false} src="https://github.com/Gab-Pereir.png" alt="" />

            <div className={styles.commentBox}>

                <div className={styles.commentContent}>

                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Pereira</strong>
                            <time title='28 de outubro de 2024' dateTime='2024-28-10 13:10:00'>Publicado há 1h</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom gabriel, parabéns! 👍🏾</p>

                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>


        </div>
    )
}