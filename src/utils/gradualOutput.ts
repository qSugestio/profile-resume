export default function gradualOutput(
  setFunc: React.Dispatch<React.SetStateAction<string>>,
  content: string,
  interval: number
): any {
  let index = -1
  const intervalId = setInterval(() => {
    if (index < content.length) {
      ++index
      setFunc(prev => prev + content.charAt(index))
    } else {
      clearInterval(intervalId)
    }
  }, interval)
  return () => clearInterval(intervalId)
}
