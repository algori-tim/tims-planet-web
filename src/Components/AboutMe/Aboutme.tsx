import './AboutMe.css'

const AboutMe = () => {
  return (
    <>
      <p>
        Hello world! My name is Tim Johnson and I'm so glad you dropped in to
        check out my small slice of the internet. Here you you can learn more
        about me, my projects, my interests, and how to get in touch. This
        website is my first step into publishing content to the world, so check
        back later and you're likely to find some new and interesting things
        around here. Read, click, and scroll on to find out more.
      </p>
      <h3 className='section-subheader'>My Professional Journey</h3>
      <h4>The present...</h4>
      <p>
        Currently, I'm excited to be working at{' '}
        <a
          href='https://www.getadmiral.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <strong>Admiral</strong>
        </a>
        , where I'm part of an innovative team dedicated to empowering
        publishers and championing a free, open internet. As a Software Engineer
        here, I'm contributing to projects that focus on helping publishers
        manage and grow their digital presence, whether it's through visitor
        relationship management, ad-block recovery, or data privacy tools. Every
        day presents new challenges and learning opportunities, and I'm thrilled
        to be part of a team that values innovation and user-first design.
      </p>
      <p>
        No matter the task, I'm always looking for opportunities to build
        flexible, resilient, and high-quality web applications.
      </p>

      <h4>The past...</h4>
      <p>
        Before joining Admiral, I spent two years at{' '}
        <a
          href='https://subvrsive.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <strong>Subvrsive</strong>
        </a>
        , where I worked on cutting-edge projects that spanned immersive 3D web
        experiences, location-based AR, and cloud solutions deployed worldwide.
        From building interactive, multilingual web games to designing custom
        APIs and supporting cloud infrastructure, I had the chance to work with
        an amazing team on some unforgettable projects.
      </p>
      <p>
        Prior to that, I was at <strong>Tech9</strong>, where I developed
        full-stack applications and crafted C#.NET/Typescript/React solutions to
        streamline QA processes and improve productivity. This role provided me
        with a strong foundation in agile development and test-driven design.
      </p>
      <p>
        My journey began at <strong>American National</strong>, where I
        transitioned from an intern to a lead role, working on pivotal C#
        ASP.NET APIs and implementing content management solutions. It was here
        that I truly honed my skills in building scalable, secure, and
        high-performing web applications, fostering a collaborative and
        innovative work environment.
      </p>
    </>
  )
}

export default AboutMe
