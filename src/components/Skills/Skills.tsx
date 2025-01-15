import { useEffect, useState } from 'react'
import gradualOutput from '../../utils/gradualOutput'
import styles from './Skills.module.css'

const Skills = () => {
  const [name, setName] = useState('')
  // const a = useMemo(
  //   () => (name.current ? gradualOutput(name.current, 'sugestio', 100) : ''),
  //   []
  // )

  // useMemo(() => gradualOutput(name, setName, 'sugestio', 100), [])
  // useCallback(() => gradualOutput(name, setName, 'sugestio', 100), [])

  useEffect(() => {
    const cleanup = gradualOutput(setName, 'sugestio', 100)
    return () => cleanup()
  }, [])

  return (
    <div className={styles.skillsContainer}>
      <span>{name}</span>
    </div>
  )
}

export default Skills
