import React from 'react'

import '../App.css'

import Header from '../Components/Header'
import HomeContent1 from '../Components/Home/HomeContent1'
import HomeContent2 from '../Components/Home/HomeContent2'
import HomeContent3 from '../Components/Home/HomeContent3'
import HomeContent4 from '../Components/Home/HomeContent4'
import HomeContent5 from '../Components/Home/HomeContent5'
import HomeContent6 from '../Components/Home/HomeContent6'
import Footer from '../Components/Footer'

class Home extends React.Component {

    render(){
        return (
            <section>
                <Header />
                <HomeContent1 />
                <HomeContent2 />
                <HomeContent3 />
                <HomeContent4 />
                <HomeContent6 />
                <HomeContent5 />
                <Footer />
            </section>
        );
    }
    
  }
  
  export default Home