import styles from './menuLink.module.css'

const Menulink = ({item}) => {
    return (
        <Link href={item.path} className={styles.container}>
            {item.icon}
            {item.title}
        </Link>
    )
}

export default Menulink