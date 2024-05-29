import { useFrame } from '@react-three/fiber'
import { Selection, EffectComposer, SelectiveBloom } from '@react-three/postprocessing'
import { Cloud, Clouds, Sparkles, useGLTF } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import { Light, Mesh, MeshBasicMaterial } from 'three'
import { GLTF } from 'three/examples/jsm/Addons.js'

interface PlanetProps {
  lights: Light[]
}

const Planet3d = (props: PlanetProps) => {
  const planet = useGLTF('./planet.glb') as unknown as GLTF
  const planetRef = useRef<Mesh>(null!)

  const satellite = useGLTF('./satellite.glb') as unknown as GLTF
  const satelliteRef = useRef<Mesh>(null!)

  const [width, setWidth] = useState(screen.width)

  useFrame(() => {
    planetRef.current.rotateY(0.001)
    satelliteRef.current.rotateY(-0.001)
    satelliteRef.current.rotateZ(-0.001)
  })

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(() => window.innerWidth)
    })
  })
  console.log(screen.width)
  console.log(props.lights)

  return (
    <>
      <group position={width < 800 ? [-0.5, 1, 0] : [-1.5, 1, 0]}>
        {props.lights.length > 0 && (
          <EffectComposer multisampling={0}>
            <SelectiveBloom lights={props.lights} radius={1} luminanceThreshold={0.1} intensity={0.25} />
          </EffectComposer>
        )}
        <mesh scale={2}>
          <sphereGeometry />
        </mesh>
        <Sparkles scale={[2.6, 1.6, 1.6]} size={2} opacity={0.3} />
        <primitive ref={satelliteRef} object={satellite.scene} scale={0.02} />
        <primitive ref={planetRef} object={planet.scene} rotation={[0, 0, 0.3]} scale={0.03} />
      </group>
    </>
  )
}

export default Planet3d
