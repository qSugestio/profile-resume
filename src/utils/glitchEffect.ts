export default function glitchEffect(
  linkTitle: string,
  setLinkTitle: React.Dispatch<React.SetStateAction<string>>
) {
  const glitchLetters = '!$%\\/#@^&?*+_-=[]{}<>.,'

  for (let i = 0; i < linkTitle.length; i++) {
    const chance = Math.round(Math.random())
    if (chance) {
      const glitchLetter =
        glitchLetters[Math.floor(Math.random() * glitchLetters.length)]
      setLinkTitle(prev => prev.slice(0, i) + glitchLetter + prev.slice(i + 1))
    }
  }
}
