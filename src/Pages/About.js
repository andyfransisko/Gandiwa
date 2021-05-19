import React from 'react'

import '../App.css'

import Header from '../Components/Header'
import AboutContent1 from '../Components/About/AboutContent1'
import Footer from '../Components/Footer'

class About extends React.Component {

    render(){
        return (
            <section>
                <Header />
                <AboutContent1 />
                <Footer />
            </section>
        );
    }
    
  }
  
  export default About