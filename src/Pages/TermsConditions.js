import React from 'react'

import '../App.css'

import Header from '../Components/Header'
import TCContent from '../Components/TCContent'
import Footer from '../Components/Footer'

class TermsConditions extends React.Component {

    render(){
        return (
            <section>
                <Header />
                <TCContent />
                <Footer />
            </section>
        );
    }
    
  }
  
  export default TermsConditions