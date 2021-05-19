import React from 'react'
import { Link } from 'react-router-dom'
import Flip from 'react-reveal/Flip';

import '../Assets/CSS/Header.css'

import LogoGandiwa from '../Assets/Images/gandlogo.png'
import LogoWhite from '../Assets/Images/Logo-Gandiwa-White.png'
import IndonesiaFlag from '../Assets/Images/IndonesiaFlag.png'

class Header extends React.Component{

    constructor(){
        super()
        this.state = {
            scroll: false,
            openMenu: false
        }
        this.scrolled = this.scrolled.bind(this);
        this.openMenu = this.openMenu.bind(this);
    }

    componentDidMount(){
        window.addEventListener('scroll', this.scrolled)
    }

    scrolled = () => {
        if (window.scrollY >= 120) {
            this.setState({
                scroll: true
            });
        }else{
            this.setState({
                scroll: false
            });
        }    
    }

    openMenu (e) {
        
        this.setState({
            openMenu: !this.state.openMenu
        });
        console.log(this.state.openMenu)
        e.preventDefault()
    }

    render(){

        const navbarScroll = {
            backgroundColor: "transparent",
            transition: "0.6s"
        }

        const menuStyle = {
            width : "0%"
        }

        const menuListStyle = {
            display: "none"
        }

        if(this.state.scroll){
            navbarScroll.backgroundColor= "white"
        }
        else{
            navbarScroll.backgroundColor= "transparent"
        }

        if(this.state.openMenu){
            menuStyle.width= "65%"
        }

        if(this.state.openMenu){
            menuListStyle.display= "block"
        }
/*

<li className="desktop">
                        
                            <span className="navbar-position">
                                <button className="header-button">
                                    <img src={IndonesiaFlag} alt="pic" className="flag-img-size" />
                                    <i class="fas fa-chevron-down"></i>
                                </button>
                            </span>                
                        
                    </li>
                    
*/
        return(    
            <header className="navbar" style={navbarScroll}>
                <ul>
                    <li className="desktop-mobile">
                        <span>
                            <Link to = "/" className="linkStyle" >
                                <Flip top>
                                    <img src= { LogoGandiwa } className="small-img-size" alt="LOGO" align="left" />
                                </Flip>
                            </Link>
                        </span>                            
                    </li>
                    <li className="desktop">
                        <Link to = "/" className="linkStyle" >
                            <b className="underlined-effect">
                                <span className="navbar-position">
                                    Home
                                </span>
                            </b>                
                        </Link>
                    </li>
                    <li className="desktop">
                        <Link to = "/About" className="linkStyle" >
                            <b className="underlined-effect"> 
                                <span className="navbar-position">
                                    Smart Media
                                </span>
                            </b>                
                        </Link>
                    </li>
                    
                    <li className="desktop">
                        <Link to = "/Location" className="linkStyle" >
                            <b className="underlined-effect"> 
                                <span className="navbar-position">
                                    Lokasi
                                </span>
                            </b>                
                        </Link>
                    </li>

                    <li className="desktop">
                        <Link to = "/Contact" className="linkStyle" >
                            <b className="underlined-effect"> 
                                <span className="navbar-position">
                                    Kontak
                                </span>
                            </b>                
                        </Link>
                    </li>

                    <li className="mobile" onClick={this.openMenu} >
                        <span className="menu-size">
                            <i class="material-icons">dehaze</i>
                        </span>
                    </li>
                </ul>
                
                <div className="menu-container" style={menuStyle}>
                    <div className="menu-content">
                        <div className="menu-content-logo">
                            <img src= { LogoWhite } className="small-img-size" alt="LOGO" />
                        </div>
                        <div className="menu-content-close" onClick={this.openMenu}>
                            &times;
                        </div>

                        <div className="menu-content-list1 menu-content-font">
                            <Link to = "/" className="linkStyle" >
                                <b>
                                    Beranda
                                </b>
                            </Link>
                        </div>
                        <div className="menu-content-list2 menu-content-font">
                            <Link to = "/About" className="linkStyle" >
                                <b>
                                    Smart Media
                                </b>
                            </Link>
                        </div>
                        <div className="menu-content-list3 menu-content-font">
                            <Link to = "/Location" className="linkStyle" >
                                <b>
                                    Lokasi
                                </b>
                            </Link>
                        </div>
                        <div className="menu-content-list4 menu-content-font">
                            <Link to = "/Contact" className="linkStyle" >
                                <b>
                                    Kontak
                                </b>
                            </Link>
                        </div>

                        <div className="menu-content-list5">
                            <div>
                                <a href="https://www.facebook.com/Gandiwa-Nusantara-101536638251244/" rel="noreferrer" target="_blank">
                                    <span class="fa fa-facebook-f" style={{paddingRight:"15px"}}></span>
                                </a>
                                <a href="https://www.instagram.com/gandiwa_nusantara" rel="noreferrer" target="_blank">
                                    <span class="fa fa-instagram" style={{paddingRight:"15px",paddingLeft:"15px"}}></span>
                                </a>
                                <a href="http://www.linkedin.com/company/gandiwanusantara" rel="noreferrer" target="_blank">
                                    <span class="fa fa-linkedin" style={{paddingLeft:"15px"}}></span>
                                </a>
                            </div>                            
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header