import { useEffect, useState } from 'react'
import Repo from './IRepo'
import PP from './PP/PP'
import styles from './PPColumn.module.css'

const getRepositories = async (): Promise<Repo[]> => {
  const response = await fetch('https://api.github.com/users/qSugestio/repos')
  const repos = await response.json()
  return repos
}

const PPColumn = () => {
  const [repos, setRepos] = useState<Repo[]>([])
  const [isActiveVisiblePPContainer, setIsActiveVisiblePPContainer] =
    useState(false)

  useEffect(() => {
    const getAndSetRepos = async () => {
      try {
        const repos = await getRepositories()
        setRepos(repos)
      } catch (error) {
        console.error('Error fetching repos:', error)
        setRepos([
          {
            name: 'Репозитории не найдены',
            description: '¯\\_(ツ)_/¯',
            html_url: '',
            language: '',
            url: '',
          },
        ])
      }
    }

    getAndSetRepos()
  }, [])

  useEffect(() => {
    setTimeout(() => setIsActiveVisiblePPContainer(true), 1000)
  }, [])

  return (
    <div
      className={`${styles.pp_container} ${
        isActiveVisiblePPContainer && styles.active
      }`}
    >
      <h5>Pet-Projects</h5>
      {repos.map((repo: Repo) => (
        <PP repo={repo} key={repo.name} />
      ))}
    </div>
  )
}

export default PPColumn
