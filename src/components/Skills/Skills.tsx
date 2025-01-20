import { useEffect, useRef, useState } from 'react'
import gradualOutput from '../../utils/gradualOutput'
import Link from './Link/Link'
import styles from './Skills.module.css'

const Skills = () => {
  const [name, setName] = useState('')
  const [isActiveVisibleBottomBlock, setIsActiveVisibleBottomBlock] =
    useState(false)

  const out = useRef<HTMLDivElement>(null)
  const bottom_block = useRef<HTMLDivElement>(null)

  const text = `
  sugestio<br/>
  frontend - developer<br/>
  <br/>
  <span class=${styles.blue}>+ typescript</span><br/>
  + react<br/>
  + next.js<br/>
  + ...`

  useEffect(() => {
    const cleanup1 = gradualOutput(setName, text, 50)

    return () => cleanup1()
  }, [])

  useEffect(() => {
    if (out.current) out.current.innerHTML = name
  }, [name])

  useEffect(() => {
    setTimeout(() => setIsActiveVisibleBottomBlock(true), 1000)
  }, [])

  return (
    <div className={styles.skills_container}>
      <div ref={out} className={styles.top_block}></div>
      <div
        ref={bottom_block}
        className={`${styles.bottom_block} ${
          isActiveVisibleBottomBlock && styles.active
        }`}
      >
        <div>
          <div>socials:</div>
          <div>
            <Link link='https://t.me/sugestio' title='telegram' />
          </div>
        </div>
        <div>
          <div>portfolio:</div>
          <div>
            <Link link='https://github.com/qSugestio' title='github' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
