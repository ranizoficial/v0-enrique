'use client'

import { useEffect, useRef, useCallback } from 'react'

interface GradientPoint {
  x: number
  y: number
  vx: number
  vy: number
  color: string
  radius: number
}

const COLORS = [
  'rgba(249, 115, 22, 0.4)',  // orange-warm
  'rgba(249, 115, 22, 0.25)', // orange-warm lighter
  'rgba(26, 35, 50, 0.8)',    // slate-deep
  'rgba(42, 55, 73, 0.6)',    // slate mid
  'rgba(250, 247, 242, 0.08)', // cream-white hint
]

export function AnimatedGradientMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>(0)
  const pointsRef = useRef<GradientPoint[]>([])

  const initPoints = useCallback((width: number, height: number) => {
    const points: GradientPoint[] = []
    const numPoints = 5

    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        color: COLORS[i % COLORS.length],
        radius: Math.random() * 300 + 200,
      })
    }

    pointsRef.current = points
  }, [])

  const draw = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Clear with base color
    ctx.fillStyle = '#1a2332'
    ctx.fillRect(0, 0, width, height)

    // Update and draw each point
    pointsRef.current.forEach((point) => {
      // Update position
      point.x += point.vx
      point.y += point.vy

      // Bounce off edges with padding
      if (point.x < -100 || point.x > width + 100) point.vx *= -1
      if (point.y < -100 || point.y > height + 100) point.vy *= -1

      // Draw gradient circle
      const gradient = ctx.createRadialGradient(
        point.x,
        point.y,
        0,
        point.x,
        point.y,
        point.radius
      )
      gradient.addColorStop(0, point.color)
      gradient.addColorStop(1, 'transparent')

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
    })

    // Add subtle noise overlay for texture
    ctx.fillStyle = 'rgba(26, 35, 50, 0.1)'
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const size = Math.random() * 2
      ctx.fillRect(x, y, size, size)
    }
  }, [])

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    draw(ctx, canvas.width, canvas.height)
    animationFrameRef.current = requestAnimationFrame(animate)
  }, [draw])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()

      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr

      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.scale(dpr, dpr)
      }

      // Reinitialize points on resize
      initPoints(rect.width, rect.height)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    // Start animation
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [animate, initPoints])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ width: '100%', height: '100%' }}
    />
  )
}
