import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/Gab-Pereir.png" alt="" />
                    <div className={styles.authorinfo}>
                        <strong>Gabriel Pereira</strong>
                        <span>Estagiario em desenvolvimento</span>
                    </div>
                </div>

                <time title='28 de outubro de 2024' dateTime='2024-28-10 13:10:00'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="#">👉 jane.design/doctorcare</a></p>
                <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                placeholder='Deixe um comentario'>
                </textarea>

                <button type='submit'>Comentar</button>
            </form>
        </article>
    )
}