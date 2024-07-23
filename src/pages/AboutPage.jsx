import React from 'react'
import About from '../components/About/About'
import Team from '../components/About/Team'
// import ConferenceCards from '../components/About/ConferenceCards'
import Mission from '../components/About/Mission'

const AboutPage = () => {
  return (
    <>
      <About />
      <Team />
      {/* <ConferenceCards /> */}
      <Mission />
    </>
  )
}

export default AboutPage