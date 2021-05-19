import React from 'react'

import '../App.css'

import Header from '../Components/Header'
import FormSuccess from '../Components/Form/FormSuccess'
import Footer from '../Components/Footer'

class FormSuccessPage extends React.Component {

    render(){
        return (
            <section>
                <Header />
                <FormSuccess />
                <Footer />
            </section>
        );
    }
    
  }
  
  export default FormSuccessPage