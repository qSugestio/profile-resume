import React, { useEffect, useRef, useState } from 'react'
import Particle from '../../utils/Particle'
import './Canvas.module.css'

const Canvas: React.FC = () => {
  const cavnasRef = useRef<HTMLCanvasElement>(null)

  const [width, setWidth] = useState<number>(window.innerWidth)
  const [height, setHeight] = useState<number>(window.innerHeight)
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })

  const mousePosRef = useRef<typeof mousePos>(mousePos)

  useEffect(() => {
    mousePosRef.current = mousePos
  }, [mousePos])

  const handleMouseMove = (event: MouseEvent) =>
    setMousePos({ x: event.clientX, y: event.clientY })

  useEffect(() => {
    const canvas = cavnasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const particles: Particle[] = []
    for (let i = 0; i < 150; i++) {
      particles.push(new Particle(cavnasRef.current!))
    }
    Particle.particles = particles

    const animate = () => {
      const currentMousePos = mousePosRef.current
      ctx.clearRect(0, 0, width, height)
      Particle.updateAll(currentMousePos)
      window.requestAnimationFrame(animate)
    }
    animate()

    canvas.addEventListener('mousemove', handleMouseMove)
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove) // Очистка обработчика при размонтировании
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={cavnasRef}
      width={width}
      height={height}
      onClick={() => console.log(Particle.particles)}
    />
  )
}

export default Canvas
