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

  return (
    <div className={styles.pp_container}>
      <h5>Pet-Projects</h5>
      {repos.map((repo: Repo) => (
        <PP repo={repo} key={repo.name} />
      ))}
    </div>
  )
}

export default PPColumn
