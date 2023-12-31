import React from 'react'
import Hero from '../Components/Elements/Hero'
import Services from '../Components/Elements/Services'
import Founded from '../Components/Elements/Founded'
import What from '../Components/Elements/What'
import Contactus from '../Components/Elements/Contactus'
import Aboutus from '../Components/Elements/Aboutus'
import Web from '../Components/Elements/Web'
import Digital from '../Components/Elements/Digital'
import Content from '../Components/Elements/Content'
import Graphic from '../Components/Elements/Graphic'
import Hrsolution from '../Components/Elements/Hrsolution'
import Chooseus from '../Components/Elements/Chooseus'
import Workingprocedure from '../Components/Elements/Workingprocedure'
import Feedbacks from '../Components/Elements/Feedbacks'
import Websitefaqs from '../Components/Elements/Websitefaqs'
import ScrollToTopButton from '../Components/Elements/ScrollToTopButton'

function Home() {
  return (
    <div>
        <Hero/>
        {/* <Services/> */}
        <ScrollToTopButton/>
        {/* <Hero2/> */}
        <Aboutus/>
        <Chooseus/>
        <Workingprocedure/>
        <What/>
        {/* <Web/>
        <Digital/>
        <Content/>
      <Graphic/> */}
        {/* <Hrsolution/> */}
        <Contactus/>
      <Founded/>
        <Feedbacks/>
      <Websitefaqs/>

        
    </div>
  )
}

export default Home