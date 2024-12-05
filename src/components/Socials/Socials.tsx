import styles from './Socials.module.css'

const Socials = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <div className={styles.socials}>
      <ul>
        <li>
          <a href='https://t.me/sugestio' target='_blank' rel='noreferrer'>
            TELEGRAM
          </a>
        </li>
        <li>
          <span className={styles.dot_color}>°</span>
        </li>
        <li>
          <a
            href='https://github.com/qSugestio'
            target='_blank'
            rel='noreferrer'
          >
            GITHUB
          </a>
        </li>
        <li>
          <span onClick={onOpen}>Pet-Projects</span>
        </li>
      </ul>
    </div>
  )
}

export default Socials
