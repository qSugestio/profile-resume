import { useEffect, useState } from 'react'
import PetProject from './PetProject/PetProject'
import styles from './PPModal.module.css'

const PPModal = ({ onClose }: { onClose: () => void }) => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // fetchRepos()
  }, [])

  const fetchRepos = async () => {
    try {
      const repos = await fetch('https://api.github.com/users/qSugestio/repos')
      if (!repos.ok) throw new Error('Failed to fetch repos')

      const data = await repos.json()

      // GET README
      // data.map(async (repo: any) => {
      //   const desc = (await getReadme(repo.name)) as string
      //   repo.description = decodeURIComponent(escape(desc))
      // })

      setProjects(data)
    } catch (error) {
      console.error('Failed to fetch repos:', error)
    } finally {
      setLoading(false)
    }
  }
  const getReadme = async (repoName: string) => {
    try {
      const readme = await fetch(
        `https://api.github.com/repos/qSugestio/${repoName}/readme`
      )
      const data = await readme.json()
      return atob(data.content)
    } catch (error) {
      console.error('Failed to fetch readme:', error)
    }
  }

  return (
    <div className={styles.modal} onClick={() => console.log(projects)}>
      <button className={styles.close} onClick={onClose}>
        ⨉
      </button>
      <div className={styles.projects}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          projects.map(
            (project: {
              name: string
              description: string
              svn_url: string
            }) => (
              <PetProject
                key={project.name}
                title={project.name}
                description={
                  project.description
                    ? project.description.slice(0, 50)
                    : 'Description is none'
                }
                githubLink={project.svn_url}
                websiteLink='/'
              />
            )
          )
        )}
      </div>
    </div>
  )
}

export default PPModal
