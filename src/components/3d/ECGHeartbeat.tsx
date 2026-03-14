'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function HeartbeatLine() {
  const lineRef = useRef<THREE.Line>(null)
  const progressRef = useRef(0)

  const { geometry, fullPoints } = useMemo(() => {
    // ECG pattern: flat → P wave → flat → QRS complex → T wave → flat
    const points: THREE.Vector3[] = []
    const segments = 200

    for (let i = 0; i <= segments; i++) {
      const t = i / segments
      const x = (t - 0.5) * 14
      let y = 0

      // P wave (0.1-0.2)
      if (t >= 0.1 && t < 0.2) {
        const pt = (t - 0.1) / 0.1
        y = 0.3 * Math.sin(pt * Math.PI)
      }
      // Q dip (0.3-0.35)
      else if (t >= 0.3 && t < 0.35) {
        const pt = (t - 0.3) / 0.05
        y = -0.3 * pt
      }
      // R spike (0.35-0.45)
      else if (t >= 0.35 && t < 0.45) {
        const pt = (t - 0.35) / 0.1
        y = pt < 0.5 ? -0.3 + 2.3 * (pt / 0.5) : 2.0 - 2.0 * ((pt - 0.5) / 0.5)
      }
      // S dip (0.45-0.5)
      else if (t >= 0.45 && t < 0.5) {
        const pt = (t - 0.45) / 0.05
        y = -0.4 * Math.sin(pt * Math.PI)
      }
      // T wave (0.55-0.75)
      else if (t >= 0.55 && t < 0.75) {
        const pt = (t - 0.55) / 0.2
        y = 0.6 * Math.sin(pt * Math.PI)
      }

      points.push(new THREE.Vector3(x, y, 0))
    }

    const geo = new THREE.BufferGeometry().setFromPoints(points)
    return { geometry: geo, fullPoints: points }
  }, [])

  useFrame((_, delta) => {
    progressRef.current = (progressRef.current + delta * 0.4) % 1

    if (lineRef.current) {
      const material = lineRef.current.material as THREE.LineBasicMaterial
      material.dashOffset = -progressRef.current * 20
    }
  })

  return (
    <line ref={lineRef as any} geometry={geometry}>
      <lineBasicMaterial
        color="#C41E3A"
        linewidth={2}
        transparent
        opacity={0.9}
      />
    </line>
  )
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null)

  const { positions, colors } = useMemo(() => {
    const count = 600
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10

      // Mix crimson and gold colors
      const isCrimson = Math.random() > 0.5
      if (isCrimson) {
        colors[i * 3] = 0.769; colors[i * 3 + 1] = 0.118; colors[i * 3 + 2] = 0.227
      } else {
        colors[i * 3] = 0.831; colors[i * 3 + 1] = 0.686; colors[i * 3 + 2] = 0.216
      }
    }
    return { positions, colors }
  }, [])

  useFrame((_, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.03
      particlesRef.current.rotation.x += delta * 0.01
    }
  })

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    return geo
  }, [positions, colors])

  return (
    <points ref={particlesRef} geometry={geometry}>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

export default function ECGHeartbeat({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <HeartbeatLine />
        <ParticleField />
      </Canvas>
    </div>
  )
}
