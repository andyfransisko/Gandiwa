import React from 'react'

import '../App.css'

import Header from '../Components/Header'
import ContactContent1 from '../Components/Contact/ContactContent1'
import Footer from '../Components/Footer'

class Contact extends React.Component {

    render(){
        return (
            <section>
                <Header />
                <ContactContent1 />
                <Footer />
            </section>
        );
    }
    
  }
  
  export default Contact