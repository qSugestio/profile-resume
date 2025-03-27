import { useEffect, useState } from 'react'
import Repo from '../IRepo'
import styles from './PetProject.module.css'

interface props {
  repo: Repo
}
interface repoReadmeJson {
  content?: string
  status?: string
  message?: string
}

const getRepoDescription = async (url: string): Promise<string> => {
  try {
    const response = await fetch(`${url}/readme`)

    const json: repoReadmeJson = await response.json()
    if (json.status === '404' || json.content === undefined)
      return 'Описание отсутствует'

    let decodedContent = atob(json.content)
    let utf8Decoder = new TextDecoder('utf-8')
    let result = utf8Decoder.decode(
      new Uint8Array(decodedContent.split('').map(char => char.charCodeAt(0)))
    )

    const regex = /## О проекте([\s\S]*?)##/
    const description = result.match(regex)?.[1].trim() as string
    return description
  } catch (error) {
    console.error('Error fetching repo description:', error)
    return 'Описание отсутствует'
  }
}

const PetProject = ({ repo }: { repo: Repo }) => {
  const [description, setDescription] = useState('Описание отсутствует')

  useEffect(() => {
    const getAndSetDescription = async () => {
      try {
        const description = await getRepoDescription(repo.url)
        setDescription(description)
      } catch (error) {
        console.error('Error fetching readme:', error)
        setDescription('Возникла ошибка при загрузке описания')
      }
    }

    getAndSetDescription()
  }, [])

  return (
    <>
      <div className={styles.line}></div>
      <div className={styles.project}>
        <div className={styles.preview}>
          <span>¯⁠\⁠_⁠(⁠-_-⁠)⁠_⁠/⁠¯</span>
        </div>

        <h1 className={styles.title}>{repo.name}</h1>
        <p className={styles.description}>{description}</p>
        <ul className={styles.links}>
          <li>
            <a href={repo.html_url}>GitHub </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default PetProject
