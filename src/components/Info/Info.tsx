import styles from './Info.module.css'
const Info = () => {
  return (
    <div className={styles.info}>
      <div className={styles.avatar}>
        <img src='/avatar.svg' alt='avatar' />
      </div>
      <p className={styles.nickname}>Sugestio</p>
      <span className={styles.bio}>
        <span>Данила Князев</span>
        <span>Fullstack-разработчик</span>
        <span>
          Навыки:
          <ul>
            Frontend:
            <li>JS</li>
            <li>TS</li>
            <li>React.js</li>
            <li>React router</li>
          </ul>
          <ul>
            <li>Redux</li>
            <li>Next.js</li>
            <li>axios</li>
          </ul>
          <br />
          <ul>
            Backend:
            <li>Nest.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>JWT</li>
          </ul>
          <ul>
            <li>Postgresql</li>
            <li>REST API</li>
            <li>Socket.io</li>
          </ul>
        </span>
      </span>
    </div>
  )
}

export default Info
