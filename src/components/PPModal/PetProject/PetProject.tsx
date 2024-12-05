import styles from './PetProject.module.css'

const PetProject = ({
  title,
  description,
  githubLink,
  websiteLink,
}: {
  title: string
  description: string
  githubLink: string
  websiteLink: string
}) => {
  return (
    <>
      <div className={styles.line}></div>
      <div className={styles.project}>
        <div className={styles.preview}>
          <span>¯⁠\⁠_⁠(⁠-_-⁠)⁠_⁠/⁠¯</span>
        </div>

        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <ul className={styles.links}>
          <li>
            <a href={githubLink}>GitHub </a>
          </li>
          <li>
            <a href={websiteLink}>WebSite</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default PetProject
