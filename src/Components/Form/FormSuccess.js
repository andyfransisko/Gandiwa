import React from 'react'

import '../../App.css'
import '../../Assets/CSS/Form/FormSuccess.css'

import MailPhoto from '../../Assets/Images/success.png'

class FormSuccess extends React.Component {

    render(){
        
        return (
            <section>
                <div className="success-container">
                    <div className="success-headline">
                        <h1>
                            Berhasil
                        </h1>
                    </div>
                    <div className="success-picture">
                        <img src = {MailPhoto} className="success-pic" alt="success" />
                    </div>
                    <div className="success-headline2">
                        <h3>
                            Nantikan Informasi Selanjutnya Dari Kami
                        </h3>
                    </div>
                </div>
            </section>
        )
    }
}

export default FormSuccess