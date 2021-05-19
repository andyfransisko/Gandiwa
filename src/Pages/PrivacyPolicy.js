import React from 'react'

import '../App.css'

import Header from '../Components/Header'
import PPContent from '../Components/PPContent'
import Footer from '../Components/Footer'

class PrivacyPolicy extends React.Component {

    render(){
        return (
            <section>
                <Header />
                <PPContent />
                <Footer />
            </section>
        );
    }
    
  }
  
  export default PrivacyPolicy