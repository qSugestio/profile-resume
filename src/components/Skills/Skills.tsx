import { useEffect, useRef, useState } from 'react'
import gradualOutput from '../../utils/gradualOutput'
import styles from './Skills.module.css'
import SocialLink from './SocialLink/SocialLink'

const Skills = () => {
  const [name, setName] = useState('')
  const out = useRef<HTMLDivElement>(null)
  const text = `
  sugestio<br/>
  frontend - developer<br/>
  <br/>
  <span class=${styles.blue}>+ typescript</span><br/>
  + react<br/>
  + next.js<br/>
  + ...`

  useEffect(() => {
    const cleanup1 = gradualOutput(setName, text, 100)

    return () => cleanup1()
  }, [])

  useEffect(() => {
    if (out.current !== null) out.current.innerHTML = name
  }, [name])

  return (
    <div className={styles.skillsContainer}>
      <div ref={out}></div>
      <div>
        <div>
          <div>socials:</div>
          <div>
            <SocialLink
              socialLink='https://t.me/sugestio'
              socialName='telegram'
            />
          </div>
        </div>
        <div>portfolio:</div>
      </div>
    </div>
  )
}

export default Skills
