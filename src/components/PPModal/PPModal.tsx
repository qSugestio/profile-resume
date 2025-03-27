import { useEffect, useState } from 'react'
import Repo from './IRepo'
import styles from './PPModal.module.css'
import PetProject from './PetProject/PetProject'

const getRepositories = async (): Promise<Repo[]> => {
  const response = await fetch('https://api.github.com/users/qSugestio/repos')
  const repos = await response.json()
  return repos
}

const PPModal = ({ onClose }: { onClose: () => void }) => {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)
  // const getReadme = async (repoName: string) => {
  //   try {
  //     const readme = await fetch(
  //       `https://api.github.com/repos/qSugestio/${repoName}/readme`
  //     )
  //     const data = await readme.json()
  //     return atob(data.content)
  //   } catch (error) {
  //     console.error('Failed to fetch readme:', error)
  //   }
  // }
  useEffect(() => {
    const getAndSetRepos = async () => {
      try {
        const repositories = await getRepositories()
        setRepos(repositories)
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
      } finally {
        setLoading(false)
      }
    }

    getAndSetRepos()
  }, [])

  return (
    <div className={styles.modal}>
      <button className={styles.close} onClick={onClose}>
        ⨉
      </button>
      <div className={styles.projects}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          repos.map((repo: Repo) => <PetProject repo={repo} />)
        )}
      </div>
    </div>
  )
}

export default PPModal
