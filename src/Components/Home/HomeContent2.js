import React from 'react'
import Fade from 'react-reveal/Fade'

import '../../App.css'
import '../../Assets/CSS/Home/HomeContent2.css'

import Product1 from '../../Assets/Images/tv-screen-2.png'
import Product2 from '../../Assets/Images/smartphone1.png'
import Product3 from '../../Assets/Images/monitor1.png'

class HomeContent2 extends React.Component {

    render(){
        return (
            <section>
                <div className="home-second-container">
                    <div className="home-second-header">
                        <Fade bottom>
                            <h2>
                                Produk
                            </h2>
                        </Fade>
                    </div>
                    <div className="home-second-pic-1">
                        <img src={Product1} className="product-img-width2" alt="pic" />
                    </div>
                    <div className="home-second-pic-2">
                        <img src={Product2} className="product-img-width" alt="pic" />
                    </div>
                    <div className="home-second-pic-3">
                        <img src={Product3} className="product-img-width" alt="pic" />
                    </div>

                    <div className="home-second-desc-1">
                        <Fade bottom>
                            <h3>
                                Gandiwa Smartmedia
                            </h3>
                        </Fade>
                        <div className="product-desc">
                            <Fade bottom>
                                Layar TV di ruang publik untuk menayangkan TVC Anda 
                                dapat menjadi media komunikasi dan promosi yang efektif 
                                dan mampu menjangkau market yang lebih luas.
                            </Fade>
                        </div>
                    </div>
                    <div className="home-second-desc-2">
                        <Fade bottom>
                            <h3>
                                Gandiwa Smartwifi
                            </h3>
                        </Fade>
                        <div className="product-desc">
                            <Fade bottom>
                                Iklan Anda akan tampil pada saat pengunjung menggunakan 
                                wifi gratis yang tersedia. Dengan kecepatan tinggi kenyamanan 
                                pengunjung selama berada di lokasi pelayanan pasti terjamin.
                            </Fade>
                        </div>
                    </div>
                    <div className="home-second-desc-3">
                        <Fade bottom>
                            <h3>
                                Gandiwa Analytics
                            </h3>
                        </Fade>
                        <div className="product-desc">
                            <Fade bottom>
                                Dashboard yang bisa Anda akses dari laptop maupun smartphone, 
                                menampilkan laporan kegiatan promosi bisnis Anda secara 
                                realtime.
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default HomeContent2