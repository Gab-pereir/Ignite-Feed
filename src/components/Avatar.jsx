import styles from './Avatar.module.css'

export default function ({ hasBorder = true, src }) {

    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}
        />
    )
}