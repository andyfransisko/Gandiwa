import React from 'react'
import Fade from 'react-reveal/Fade'

import '../../App.css'
import '../../Assets/CSS/Home/HomeContent5.css'

import Client1 from '../../Assets/Images/client/client1.png'
import Client2 from '../../Assets/Images/client/client2.png'
import Client3 from '../../Assets/Images/client/client3.png'
import Client4 from '../../Assets/Images/client/client4.png'
import Client5 from '../../Assets/Images/client/client5.png'
import Client6 from '../../Assets/Images/client/client6.png'
import Client7 from '../../Assets/Images/client/client7.png'
import Client8 from '../../Assets/Images/client/client8.png'
import Client9 from '../../Assets/Images/client/client9.png'
import Client10 from '../../Assets/Images/client/client10.png'
import Client11 from '../../Assets/Images/client/client11.png'
import Client12 from '../../Assets/Images/client/client12.png'
import Client13 from '../../Assets/Images/client/client13.png'
import Client14 from '../../Assets/Images/client/client14.png'
import Client15 from '../../Assets/Images/client/client15.png'
import Client16 from '../../Assets/Images/client/client16.png'

import LogoAbidin from '../../Assets/Images/client/LogoAbidin.png'
import LogoCasio from '../../Assets/Images/client/LogoCasio.png'
import LogoOjeg from '../../Assets/Images/client/LogoOjeg1.png'
import LogoUMKM from '../../Assets/Images/client/LogoUMKM.png'

class HomeContent5 extends React.Component {

    render(){
        return (
            <section>
                <div className="home-fifth-container">
                    <div className="home-fifth-bg" />
                    
                    <div className="home-fifth-back-client">
                        <div className="home-fifth-client-container">
                            <div>
                                <img src = {Client1} className="client-opacity home-picture-width" alt="pic" />
                            </div>
                            <div>
                                <img src = {Client2} className="client-opacity home-picture-width" alt="pic" />
                            </div>
                            <div>
                                <img src = {Client3} className="client-opacity home-picture-width" alt="pic" />
                            </div>
                            <div>
                                <img src = {Client6} className="client-opacity home-picture-width" alt="pic" />
                            </div>
                            <div>
                                <img src = {LogoAbidin} className="client-opacity home-picture-width" alt="pic" />    
                            </div>
                            <div>
                                <img src = {LogoUMKM} className="client-opacity home-picture-width" alt="pic" />
                            </div>
                            <div>
                                <img src = {Client9} className="client-opacity home-picture-width" alt="pic" />    
                            </div>
                            <div>
                                <img src = {LogoOjeg} className="client-opacity home-picture-width" alt="pic" />
                            </div>
                            <div>
                                <img src = {LogoCasio} className="client-opacity home-picture-width" alt="pic" />
                            </div>
                            <div>
                                <img src = {Client10} className="client-opacity home-picture-width" alt="pic" />
                            </div>
                            <div>
                                <img src = {Client11} className="client-opacity home-picture-width" alt="pic" />
                            </div>
                            
                            <div>
                                <img src = {Client13} className="client-opacity home-picture-width" alt="pic" />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default HomeContent5