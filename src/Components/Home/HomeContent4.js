import React from 'react'
import Fade from 'react-reveal/Fade'

import '../../App.css'
import '../../Assets/CSS/Home/HomeContent4.css'

import Why1 from '../../Assets/Images/why-1.png'
import Why2 from '../../Assets/Images/why-2.png'
import Why3 from '../../Assets/Images/why-3.png'
import Why4 from '../../Assets/Images/why-4.png'

class HomeContent4 extends React.Component {

    render(){
        return (
            <section>
                <div className="home-forth-container">
                    <div className="home-forth-bg" />
                    <div className="home-forth-header">
                        <Fade bottom>
                            <h2>
                                Alasan Beriklan dengan Gandiwa
                            </h2>
                        </Fade>
                    </div>
                    <div className="home-forth-pic-1">
                        <Fade bottom>
                            <img src = {Why1} className="why-picture-width" alt="pic" />
                        </Fade>
                    </div>
                    <div className="home-forth-desc-1">
                        <Fade bottom>
                            <h3>
                                Ekonomis
                            </h3>
                        </Fade>
                        <div className="forth-desc">
                            <Fade bottom>
                                Perusahaan harus membelanjakan biaya besar untuk 
                                menayangkan iklan. Kami menyediakan media yang akan 
                                menghemat biaya pemasaran Anda, sehingga promosi bisnis 
                                dapat Anda lakukan secara luas.
                            </Fade>
                        </div>
                    </div>
                    
                    <div className="home-forth-pic-2">
                        <Fade bottom>
                            <img src = {Why2} className="why-picture-width" alt="pic" />
                        </Fade>
                    </div>
                    <div className="home-forth-desc-2">
                        <Fade bottom>
                            <h3>
                                Area Publik
                            </h3>
                        </Fade>
                        <div className="forth-desc">
                            <Fade bottom>
                                Pengunjung yang datang banyak dan beragam setiap harinya. 
                                Waktu tunggu yang lama memungkinkan iklan Anda lebih 
                                terlihat oleh calon konsumen.
                            </Fade>
                        </div>
                    </div>

                    <div className="home-forth-pic-3">
                        <Fade bottom>
                            <img src = {Why3} className="why-picture-width" alt="pic" />
                        </Fade>
                    </div>
                    <div className="home-forth-desc-3">
                        <Fade bottom>
                            <h3>
                                Pantauan Real Time
                            </h3>
                        </Fade>
                        <div className="forth-desc">
                            <Fade bottom>
                                Media iklan sekarang ini tidak menyediakan measurement 
                                secara realtime. Sulit bagi Anda untuk bisa memantau 
                                keefektifitasan dan statistik konten iklan Anda. Gandiwa 
                                Dashboard menyediakan informasi yang Anda butuhkan secara 
                                online.
                            </Fade>
                        </div>
                    </div>

                    <div className="home-forth-pic-4">
                        <Fade bottom>
                            <img src = {Why4} className="why-picture-width" alt="pic" />
                        </Fade>
                    </div>
                    <div className="home-forth-desc-4">
                        <Fade bottom>
                            <h3>
                                Profil Audiens
                            </h3>
                        </Fade>
                        <div className="forth-desc">
                            <Fade bottom>
                                Profil pengunjung yang spesifik sulit diperoleh. 
                                Gandiwa Dashboard menyediakan profil lokasi yang dapat 
                                membantu Anda untuk mengetahui target market yang sesuai 
                                dengan bisnis Anda.
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default HomeContent4