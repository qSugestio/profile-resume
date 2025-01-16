import { useEffect, useState } from 'react'
import styles from './SocialLink.module.css'

interface props {
  socialLink: string
  socialName: string
}

const SocialLink = ({ socialLink, socialName }: props) => {
  const [name, setSocialName] = useState(socialName)
  const [isHover, setIsHover] = useState(false)

  const glitchLetters = '!$%\\/#@^&?*+_-=[]{}<>.,'

  const glitch = () => {
    for (let i = 0; i < name.length; i++) {
      const chance = Math.round(Math.random())
      if (chance) {
        const glitchLetter =
          glitchLetters[Math.floor(Math.random() * glitchLetters.length)]
        setSocialName(prev => {
          const letters = Array.from(prev) // Use Array.from to create a new array from the string
          letters[i] = glitchLetter
          return letters.join('')
        })
      }
    }
  }

  useEffect(() => {
    let intervalId: NodeJS.Timer | null = null
    if (isHover) intervalId = setInterval(() => glitch(), 250)
    if (!isHover && intervalId) {
      setSocialName(socialName)
      return clearInterval(intervalId)
    }
  }, [isHover])

  return (
    <a
      className={styles.link}
      href={socialLink}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {name}
    </a>
  )
}

export default SocialLink
