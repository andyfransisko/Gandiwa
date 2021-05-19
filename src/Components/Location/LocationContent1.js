import React from 'react'
import Fade from 'react-reveal/Fade'
import {Helmet} from 'react-helmet'

import '../../App.css'
import '../../Assets/CSS/Location/LocationContent1.css'

import SatpasGender from '../../Assets/Images/satpas_gender.png'
import SatpasBrand from '../../Assets/Images/satpas_brands.png'
import SatpasDwell from '../../Assets/Images/satpas_dwell-time.png'
import SatpasSegmen from '../../Assets/Images/satpas_segmentation.png'
import SamsatGender from '../../Assets/Images/samsat_gender.png'
import SamsatBrand from '../../Assets/Images/samsat_brands.png'
import SamsatDwell from '../../Assets/Images/samsat_dwell.png'
import SamsatSegmen from '../../Assets/Images/samsat_segmentation.png'

class LocationContent1 extends React.Component {

    render(){
        return (
            <section>
                <Helmet>
                    <title>Lokasi | Media Pintar Untuk Semua | Gandiwa Nusantara</title>
                    <meta name="title" content="Lokasi | Media Pintar Untuk Semua | Gandiwa Nusantara" />
                    <meta name="description" content="Berbagai Lokasi yang telah Menjadi Partner dengan Gandiwa Nusantara" />
                    <link rel="canonical" href="http://gandiwa.id/Location" />
                </Helmet>
                <div className="location-container">
                    <div className="location-header">
                        <Fade bottom>
                            <h2>
                                Profil Lokasi
                            </h2>
                        </Fade>
                    </div>
                    
                    <div className="location-name-1">
                        <Fade bottom>
                            <h3>
                                Satpas
                            </h3>
                        </Fade>
                    </div>
                    <div className="location-name-desc-1">
                        <Fade bottom>
                            <h4>
                                Satuan Penyelenggara Administrasi SIM
                            </h4>
                        </Fade>
                    </div>
                    <div className="location-name-desc-info-1-1">
                        <Fade bottom>
                            <img src={SatpasGender} className="location-img-size" alt="pic" />
                        </Fade>
                    </div>
                    <div className="location-name-desc-infoname-1-1">
                        <Fade bottom>
                            <h4>
                                Gender
                            </h4>
                        </Fade>
                    </div>
                    <div className="location-name-desc-info-1-2">
                        <Fade bottom>
                            <img src={SatpasBrand} className="location-img-size" alt="pic" />
                        </Fade>
                    </div>
                    <div className="location-name-desc-infoname-1-2">
                        <Fade bottom>
                            <h4>
                                Top Brands
                            </h4>
                        </Fade>
                    </div>
                    <div className="location-name-desc-info-1-3">
                        <Fade bottom>
                            <img src={SatpasDwell} className="location-img-size" alt="pic" />
                        </Fade>
                    </div>
                    <div className="location-name-desc-infoname-1-3">
                        <Fade bottom>
                            <h4>
                                Dwell Time
                            </h4>
                        </Fade>
                    </div>
                    <div className="location-name-desc-info-1-4">
                        <Fade bottom>
                            <img src={SatpasSegmen} className="location-img-size" alt="pic" />
                        </Fade>
                    </div>
                    <div className="location-name-desc-infoname-1-4">
                        <Fade bottom>
                            <h4>
                                Segmentation
                            </h4>
                        </Fade>
                    </div>

                    <div className="location-name-2">
                        <Fade bottom>
                            <h3>
                                Samsat
                            </h3>
                        </Fade>
                    </div>
                    <div className="location-name-desc-2">
                        <Fade bottom>
                            <h4>
                                Sistem Administrasi Manunggal Satu Atap
                            </h4>
                        </Fade>
                    </div>
                    <div className="location-name-desc-info-2-1">
                        <Fade bottom>
                            <img src={SamsatGender} className="location-img-size" alt="pic" />
                        </Fade>
                    </div>
                    <div className="location-name-desc-infoname-2-1">
                        <Fade bottom>
                            <h4>
                                Gender
                            </h4>
                        </Fade>
                    </div>
                    <div className="location-name-desc-info-2-2">
                        <Fade bottom>
                            <img src={SamsatBrand} className="location-img-size" alt="pic" />
                        </Fade>
                    </div>
                    <div className="location-name-desc-infoname-2-2">
                        <Fade bottom>
                            <h4>
                                Top Brands
                            </h4>
                        </Fade>
                    </div>
                    <div className="location-name-desc-info-2-3">
                        <Fade bottom>
                            <img src={SamsatDwell} className="location-img-size" alt="pic" />
                        </Fade>
                    </div>
                    <div className="location-name-desc-infoname-2-3">
                        <Fade bottom>
                            <h4>
                                Dwell Time
                            </h4>
                        </Fade>
                    </div>
                    <div className="location-name-desc-info-2-4">
                        <Fade bottom>
                            <img src={SamsatSegmen} className="location-img-size" alt="pic" />
                        </Fade>
                    </div>
                    <div className="location-name-desc-infoname-2-4">
                        <Fade bottom>
                            <h4>
                                Segmentation
                            </h4>
                        </Fade>
                    </div>
                </div>

                <div className="location-timeline-container">
                    <div className="location-timeline-header">
                        <Fade bottom>
                            <h2>
                                Rencana Kami
                            </h2>
                        </Fade>
                    </div>
                    {/*
                    <div className="location-timeline-line-space location-timeline-line" />
                    <div className="location-timeline-circle-space-1 location-timeline-circle" />
                    <div className="location-timeline-circle-space-2 location-timeline-circle" />
                    <div className="location-timeline-circle-space-3 location-timeline-circle" />
                    <div className="location-timeline-circle-space-4 location-timeline-circle" />

                    <div className="location-timeline-year-1 location-timeline-year">
                        2020
                    </div>
                    <div className="location-timeline-year-2 location-timeline-year">
                        2021
                    </div>
                    <div className="location-timeline-year-3 location-timeline-year">
                        2022
                    </div>
                    <div className="location-timeline-year-4 location-timeline-year">
                        2023
                    </div>

                    <div className="location-timeline-goal-1 location-timeline-border">
                        <div className="location-timeline-goal">
                            500 + <br />
                            <b>Kantor Samsat</b>
                        </div>
                    </div>

                    <div className="location-timeline-goal-2 location-timeline-border">
                        <div className="location-timeline-goal">
                            2200 + <br />
                            <b>RSUD</b>
                        </div>
                    </div>

                    <div className="location-timeline-goal-3 location-timeline-border">
                        <div className="location-timeline-goal">
                            150 + <br />
                            <b>Kantor BPJS</b>
                        </div>
                    </div>

                    <div className="location-timeline-goal-4 location-timeline-border">
                        <div className="location-timeline-goal">
                            300 + <br />
                            <b>Kantor Imigrasi</b>
                        </div>
                    </div>
                    */ }
                    <div className="location-timeline-picture" />
                    <div className="location-timeline-space" />
                </div>
            </section>
        )
    }
}

export default LocationContent1