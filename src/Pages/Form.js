import React from 'react'

import '../App.css'

import Header from '../Components/Header'
import FormContent from '../Components/Form/FormContent'
import Footer from '../Components/Footer'

class Form extends React.Component {

    render(){
        return (
            <section>
                <Header />
                <FormContent />
                <Footer />
            </section>
        );
    }
    
  }
  
  export default Form