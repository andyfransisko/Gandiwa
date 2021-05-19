import React from 'react'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'

import '../../App.css'
import '../../Assets/CSS/Home/HomeContent1.css'

import HomePicture1 from '../../Assets/Images/Homme2.png'

class HomeContent1 extends React.Component {

    render(){
        return (
            <section>
                <div className="home-container">
                    <div className="home-bg-pattern" />
                    <Fade right>
                        <div className="home-main-pic">
                            <img src = {HomePicture1} className="home-picture-width" alt="pic" />
                        </div>
                    </Fade>
                    <div className="home-header-1">
                        <Fade left>
                            <h1>
                                Promosikan<br />
                                Produk Anda<br />
                                di Ruang Publik
                            </h1>
                        </Fade>
                    </div>
                    <div className="home-header-button">
                        <Fade left>
                            <Link to = "/Form">
                                <button className="primary-button">
                                    Coba Sekarang
                                </button>
                            </Link>
                        </Fade>
                    </div>
                </div>
            </section>
        )
    }
}

export default HomeContent1