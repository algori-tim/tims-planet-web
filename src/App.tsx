import './App.css'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import SectionHeader from './Components/SectionHeader/SectionHeader'
import Projects from './Components/Projects/Projects'
import AboutMe from './Components/AboutMe/Aboutme'
import Planet3d from './Components/Planet3d/Planet3d'
import { useRef } from 'react'
import { AmbientLight } from 'three'
import Planet from './Components/Planet/Planet'

const App = () => {
  const ambientLightRef = useRef<AmbientLight>(null!)

  return (
    <>
      <NavBar />
      <Canvas>
        <directionalLight position={[1, 2, 3]} intensity={2} />
        <ambientLight ref={ambientLightRef} intensity={0.7} />
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
        {/* {ambientLightRef.current && <Planet3d lights={[ambientLightRef.current]} />} */}
      </Canvas>
      <Planet />
      <div className='lower'>
        <img id='mountains-left' src='mountains-left.svg' alt='mountains in the distance' />
        <div className='ground'>
          <img id='space-man-img' src='space-man.svg' alt='space man' />
          <img id='rocket-img' src='rocket.svg' alt='rocket ship' />
          <div className='buffer'></div>
          <article>
            <section>
              <SectionHeader id='hello-world' content='.about_me' />
              <AboutMe />
            </section>
            <section>
              <SectionHeader id='projects' content='.projects' />
              <Projects />
            </section>
          </article>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
