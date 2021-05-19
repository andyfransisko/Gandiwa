import React from 'react'
import Fade from 'react-reveal/Fade'
import {Helmet} from 'react-helmet'

import '../../App.css'
import '../../Assets/CSS/Contact/ContactContent1.css'

import ContactImage from '../../Assets/Images/Contact.png'

class ContactContent1 extends React.Component {

    render(){
        return (
            <section>
                <Helmet>
                    <title>Kontak | Media Pintar Untuk Semua | Gandiwa Nusantara</title>
                    <meta name="title" content="Kontak | Media Pintar Untuk Semua | Gandiwa Nusantara" />
                    <meta name="description" content="Kontak Kami | Gandiwa Nusantara" />
                    <link rel="canonical" href="http://gandiwa.id/Contact" />
                </Helmet>
                <div className="contact-container">
                    <div className="contact-header">
                        <Fade bottom>
                            <h2>
                                Hubungi Kami
                            </h2>
                        </Fade>
                    </div>
                    <div className="contact-picture">
                        <img src={ContactImage} className="contact-img-size" alt="contact" />
                    </div>
                    <div className="contact-icon-1">
                        <i class="material-icons" style={{fontSize:"40px",color:"#fed03f"}}>location_on</i>
                    </div>
                    <div className="contact-icon-2">
                        <i class="material-icons" style={{fontSize:"40px",color:"#fed03f"}}>email</i>
                    </div>
                    <div className="contact-icon-3">
                        <i class="material-icons" style={{fontSize:"40px",color:"#fed03f"}}>phone</i>
                    </div>
                    <div className="contact-desc-1">
                        <Fade bottom>
                            Centennial Tower, 29th Floor Jl Jend Gatot Subroto no 24-25, Jakarta Selatan 12950
                        </Fade>
                    </div>

                    <div className="contact-desc-2">
                        <Fade bottom>
                            info@gandiwa.id
                        </Fade>
                    </div>

                    <div className="contact-desc-3">
                        <Fade bottom>
                            021-29608389
                        </Fade>
                    </div>
                    <div className="contact-space" />
                </div>
            </section>
        )
    }
}

export default ContactContent1