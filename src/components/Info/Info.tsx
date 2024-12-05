import styles from './Info.module.css'
const Info = () => {
  return (
    <div className={styles.info}>
      <div className={styles.avatar}>
        <img src='/avatar.svg' alt='avatar' />
      </div>
      <p className={styles.nickname}>Sugestio</p>
      <span className={styles.bio}>Важная инфа обо мне ^_^</span>
    </div>
  )
}

export default Info
