import { useEffect, useState } from 'react'
import glitchEffect from '../../../utils/glitchEffect'
import styles from './Link.module.css'

interface props {
  link: string
  title: string
}

const Link = ({ link, title }: props) => {
  const [linkTitle, setLinkTitle] = useState(title)
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null

    if (isHover) {
      intervalId = setInterval(() => glitchEffect(linkTitle, setLinkTitle), 250)
      setTimeout(() => setLinkTitle(title), Math.round(Math.random() * 1000))
    } else {
      setLinkTitle(title)
    }
    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [isHover, linkTitle, setLinkTitle, title])

  return (
    <a
      className={styles.link}
      href={link}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {linkTitle}
    </a>
  )
}

export default Link
