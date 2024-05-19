import './AboutMe.css'

const AboutMe = () => {
  return (
    <>
      <p>
        Hello world! My name is Tim Johnson and I'm so glad you dropped in to check out my small slice of the internet.
        Here you you can learn more about me, my projects, my interests, and how to get in touch. This website is my
        first step into publishing content to the world, so check back later and you're likely to find some new and
        interesting things around here. Read, click, and scroll on to find out more.
      </p>
      <h3 className='section-subheader'>My Professional Journey</h3>
      <h4>The present...</h4>
      <p>
        Currently, I'm working at a pretty cool place called Subvrsive. Here, I wear many hats. Often swapping between
        them multiple times a day! Depending on when you look, I can be found leading a project to build or upgrade
        webapps that are deployed globally. Or maybe later I'm updating our AWS or Azure cloud infrastructure using
        custom built Terraform templates. Perhaps I'm wrestling with a CI\CD pipeline because a version of Node or Lunux
        just went out of support or designing and building a custom API to manage data securely in a cloud database?
      </p>
      <p>
        No matter the task, I'm always looking for opportunities to build more flexible, resiliant, and beautiful web
        applications.
      </p>
      <h4>The past...</h4>
      <p>
        Before joining Subvrsive, I spent some time at Tech9, where I had my first foreys into developing full-stack
        solutions. While there, I crafted a custom C#.NET/Typescript/React cloud application for streamlining QA
        processes and boosting developer productivity. My role involved learning a variety of new technologies and
        staying ahead of the curve to deliver reliable and efficient applications with a focus on high quality and
        extensive test coverage.
      </p>
      <p>
        Prior to that, I cut my teeth at American National, starting as an eager intern and quickly rising to lead
        roles. While there I helped develop pivotal C# ASP.NET APIs that became central to the company's operations. My
        journey there included implementing custom content management solutions and driving best practices in unit
        testing and API design. Later, while leading and mentoring teams, I guided architectural decisions and ensured
        seamless project delivery. It was here that I truly honed my skills in building scalable, secure, and
        high-performing web applications while fostering a collaborative and innovative work environment.
      </p>
    </>
  )
}

export default AboutMe
