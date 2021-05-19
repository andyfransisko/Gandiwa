import React from 'react'
import { Link } from 'react-router-dom'

import '../Assets/CSS/Footer.css'

import LogoWhite from '../Assets/Images/Logo-Gandiwa-White.png'

class Footer extends React.Component{

    constructor(){
        super()
        this.state = {
            MouseIn1: false,
            MouseIn2: false,
            MouseIn3: false
        }
        this.MouseIn1 = this.MouseIn1.bind(this)
        this.MouseIn2 = this.MouseIn2.bind(this)
        this.MouseIn3 = this.MouseIn3.bind(this)
        this.MouseOut1 = this.MouseOut1.bind(this)
        this.MouseOut2 = this.MouseOut2.bind(this)
        this.MouseOut3 = this.MouseOut3.bind(this)
    }

    MouseIn1 (e) {
        this.setState({
            MouseIn1: true
        });
        e.preventDefault()
    }

    MouseIn2 (e) {
        this.setState({
            MouseIn2: true
        });
        e.preventDefault()
    }

    MouseIn3 (e) {
        this.setState({
            MouseIn3: true
        });
        e.preventDefault()
    }

    MouseOut1 (e) {
        this.setState({
            MouseIn1: false
        });
        e.preventDefault()
    }

    MouseOut2 (e) {
        this.setState({
            MouseIn2: false
        });
        e.preventDefault()
    }

    MouseOut3 (e) {
        this.setState({
            MouseIn3: false
        });
        e.preventDefault()
    }

    render(){

        const iconColor1 = {
            color: "white"
        }

        const iconColor2 = {
            color: "white"
        }

        const iconColor3 = {
            color: "white"
        }

        if(this.state.MouseIn1){
            iconColor1.color= "#fed03f"
        }
        else if(!this.state.MouseIn1){
            iconColor1.color= "white"
        }

        if(this.state.MouseIn2){
            iconColor2.color= "#fed03f"
        }
        else if(!this.state.MouseIn2){
            iconColor2.color= "white"
        }

        if(this.state.MouseIn3){
            iconColor3.color= "#fed03f"
        }
        else if(!this.state.MouseIn3){
            iconColor3.color= "white"
        }

        return(    
            <footer>
                <div className="foot-container">
                    <div className="foot-logo">
                        <img src = {LogoWhite} className="foot-img" alt="logo" />
                    </div>
                    <div className="foot-info">
                        Centennial Tower, 29th Floor <br/> Jl Jend Gatot Subroto no 24-25, Jakarta Selatan 12950
                        <br />
                        <div className="foot-phone">
                            021-29608389
                        </div>
                    </div>

                    <div className="foot-menu-1 footer-link">
                        <Link to = "/" className="linkStyle" >
                            Home
                        </Link>
                    </div>
                    <div className="foot-menu-2 footer-link">
                        <Link to = "/About" className="linkStyle" >
                            Smart Media
                        </Link>
                    </div>
                    <div className="foot-menu-3 footer-link">
                        Karir
                    </div>
                    <div className="foot-menu-4 footer-link">
                        <Link to = "/Location" className="linkStyle" >
                            Lokasi
                        </Link>
                    </div>
                    <div className="foot-menu-5 footer-link">
                        <Link to = "/Contact" className="linkStyle" >
                            Kontak
                        </Link>
                    </div>
                    <div className="foot-menu-6">
                        
                    </div>
                    <div className="foot-menu-7 footer-link">
                        <Link to = "/TermsConditions" className="linkStyle" >
                            Ketentuan & Kebijakan
                        </Link>
                    </div>
                    <div className="foot-menu-8 footer-link">
                        <Link to = "/PrivacyPolicy" className="linkStyle" >
                            Kebijakan Privasi
                        </Link>
                    </div>

                    
                    <div className="foot-sosmed-1">
                        <div className="foot-circle" onMouseEnter={this.MouseIn1} onMouseLeave={this.MouseOut1}>
                            <a href="https://www.facebook.com/Gandiwa-Nusantara-101536638251244/" rel="noreferrer" target="_blank">
                                <div className="foot-sosmed-container">
                                    <div className="foot-sosmed-img">
                                        <span class="fa fa-facebook-f" style={iconColor1}></span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="foot-sosmed-2">
                        <div className="foot-circle" onMouseEnter={this.MouseIn2} onMouseLeave={this.MouseOut2}>
                            <a href="https://www.instagram.com/gandiwa_nusantara" rel="noreferrer" target="_blank">
                                <div className="foot-sosmed-container">
                                    <div className="foot-sosmed-img">
                                        <span class="fa fa-instagram" style={iconColor2}></span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="foot-sosmed-3">
                        <div className="foot-circle" onMouseEnter={this.MouseIn3} onMouseLeave={this.MouseOut3}>
                            <a href="http://www.linkedin.com/company/gandiwanusantara" rel="noreferrer" target="_blank">
                                <div className="foot-sosmed-container">
                                    <div className="foot-sosmed-img">
                                        <span className="fa fa-linkedin" style={iconColor3}></span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="foot-copyright">
                        &copy; Copyright 2020 PT Gandiwa Nusantara Mediatek . All Right Reserved
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer