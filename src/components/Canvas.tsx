import React, { useEffect, useRef, useState } from 'react'
import Circle from '../utils/Circle'

const Canvas: React.FC = () => {
  const cavnasRef = useRef<HTMLCanvasElement>(null)
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)

  const [circle, setCircle] = useState<Circle | null>(null)
  const [width, setWidth] = useState<number>(window.innerWidth)
  const [height, setHeight] = useState<number>(window.innerHeight)
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })

  const handleMouseMove = (event: MouseEvent) => {
    setMousePos({ x: event.clientX, y: event.clientY })
  }

  useEffect(() => {
    setCircle(new Circle(50, 50, 10, 'red'))
  }, [])

  useEffect(() => {
    const canvas = cavnasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctxRef.current = ctx

    let animationFrameId: number

    const animate = () => {
      animationFrameId = window.requestAnimationFrame(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        if (circle === null) return
        circle.update(mousePos)
        circle.draw(ctx)

        // Circle.allCircles.forEach(circle => {
        //           circle.update(
        //             canvas,
        //             ctx,
        //             mousePos,
        //             settings.massFactor,
        //             settings.isAttraction,
        //             settings.isAttractionToCursor,
        //             settings.isDrawConnectingLines,
        //             settings.isCollision,
        //             settings.isTail,
        //             settings.gravity
        //           )
        //           circle.draw(ctx, settings.isTail)
        //         })

        animate()
      })
    }

    animate()

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mousePos])

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
      onClick={() => console.log(circle)}
    />
  )
}

export default Canvas
