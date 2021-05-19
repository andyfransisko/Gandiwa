import React from 'react'

import '../App.css'

import Header from '../Components/Header'
import LocationContent1 from '../Components/Location/LocationContent1'
import Footer from '../Components/Footer'

class Location extends React.Component {

    render(){
        return (
            <section>
                <Header />
                <LocationContent1 />
                <Footer />
            </section>
        );
    }
    
  }
  
  export default Location