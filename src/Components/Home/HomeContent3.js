import React from 'react'
import Fade from 'react-reveal/Fade'

import '../../App.css'
import '../../Assets/CSS/Home/HomeContent3.css'

import About1 from '../../Assets/Images/about1.png'
import About2 from '../../Assets/Images/about2.png'

class HomeContent3 extends React.Component {

    render(){
        return (
            <section>
                <div className="home-third-container">
                    <div className="home-third-background" />
                    <Fade left>
                        <div className="home-third-pic-1">
                            <img src = {About2} className="home-picture-width" alt="pic" />
                        </div>
                    </Fade>
                    <div className="home-third-header">
                        <Fade right>
                            <h2>
                                Tentang Kami
                            </h2>
                            <h3 className="word-space">
                                Media iklan berbiaya rendah pertama yang berlokasi 
                                di kantor layanan publik di Indonesia. TV dan Wifi gratis 
                                tersedia untuk mempromosikan bisnis dan merek Anda. 
                                Menggabungkan DOOH dan teknologi terbaru untuk menyediakan 
                                jaringan media pintar yang Efektif - Ekonomis - Tepat Sasaran.
                            </h3>
                        </Fade>
                    </div>
                </div>
            </section>
        )
    }
}

export default HomeContent3