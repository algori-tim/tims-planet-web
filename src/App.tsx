import './App.css'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import Planet from './Components/Planet/Planet'
import SectionHeader from './Components/SectionHeader/SectionHeader'

const App = () => {
  return (
    <>
      <NavBar />
      <Canvas>
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
      <Planet />
      <div className='lower'>
        <div className='ground'>
          <img id='mountains-left' src='mountains-left.svg' alt='mountains in the distance' />
          <img id='space-man-img' src='space-man.svg' alt='space man' />
          <img id='rocket-img' src='rocket.svg' alt='rocket ship' />
          <div className='buffer'></div>
          <article>
            <div className='section-one section'>
              <SectionHeader id='hello-world' content='.about_me' />
              <p>
                As a web developer, I thrive on the ever-evolving landscape of technology. My passion for coding is
                matched only by my curiosity for tech trends and innovations. With each project, I aim to integrate
                cutting-edge solutions that enhance user interaction and deliver impactful digital experiences.
              </p>
              <p>
                Animation is not just a hobby—it's a powerful storytelling tool in my development arsenal. I specialize
                in creating fluid, dynamic animations that breathe life into web interfaces, making every interaction a
                visual journey that captivates and engages.
              </p>
              <p>
                My fascination with 3D design transcends traditional boundaries, blending creativity with technical
                prowess. From conceptualization to execution, I craft immersive 3D worlds that invite users to explore
                beyond the flat confines of their screens, offering them a glimpse into rich, interactive environments.
              </p>
              <p>
                Together, these passions drive my work as a web developer, pushing me to innovate and redefine the
                digital experiences we encounter daily.
              </p>
            </div>
            <div className='section-two section'>
              <SectionHeader id='projects' content='.projects' />
              <p>
                As a web developer, I thrive on the ever-evolving landscape of technology. My passion for coding is
                matched only by my curiosity for tech trends and innovations. With each project, I aim to integrate
                cutting-edge solutions that enhance user interaction and deliver impactful digital experiences.
              </p>
              <p>
                Animation is not just a hobby—it's a powerful storytelling tool in my development arsenal. I specialize
                in creating fluid, dynamic animations that breathe life into web interfaces, making every interaction a
                visual journey that captivates and engages.
              </p>
              <p>
                My fascination with 3D design transcends traditional boundaries, blending creativity with technical
                prowess. From conceptualization to execution, I craft immersive 3D worlds that invite users to explore
                beyond the flat confines of their screens, offering them a glimpse into rich, interactive environments.
              </p>
              <p>
                Together, these passions drive my work as a web developer, pushing me to innovate and redefine the
                digital experiences we encounter daily.
              </p>
            </div>
          </article>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
