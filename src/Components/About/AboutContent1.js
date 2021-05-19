import React from 'react'
import {Helmet} from 'react-helmet'

import '../../App.css'
import '../../Assets/CSS/About/AboutContent1.css'

class AboutContent1 extends React.Component {

    render(){
        return (
            <section>
                <Helmet>
                    <title>Smart Media | Media Pintar Untuk Semua | Gandiwa Nusantara</title>
                    <meta name="title" content="Smart Media | Media Pintar Untuk Semua | Gandiwa Nusantara" />
                    <meta name="description" content="Teknologi terbaru kami gunakan untuk mendeteksi dan mengukur lalu lintas pengunjung di dalam Lokasi. Laporan yang kami tampilkan merupakan koleksi data aktual yang akurat, yang kami kumpulkan secara online dari setiap lokasi " />
                    <link rel="canonical" href="http://gandiwa.id/About" />
                </Helmet>
                <div className="about-first-container">
                    <div className="about-first-header">
                        <h2>
                            Kami adalah Smart Media
                        </h2>
                        <h3>
                            Menggabungkan media DOOH dan teknologi terbaru untuk 
                            menyediakan jaringan media pintar yang lebih Efektif - 
                            Ekonomis - Tepat Sasaran.
                            <br /> <br />
                            Kami membangun jaringan media pintar berbiaya rendah 
                            yang tersebar di seluruh wilayah Indonesia. Memiliki 
                            lalu lintas pengunjung yang tinggi dengan waktu tinggal 
                            yang lama untuk memastikan konten Anda akan mencapai 
                            hasil maksimum.
                            <br /> <br />
                            Teknologi terbaru kami gunakan untuk mendeteksi dan 
                            mengukur lalu lintas pengunjung di dalam Lokasi. 
                            Laporan yang kami tampilkan merupakan koleksi data 
                            aktual yang akurat, yang kami kumpulkan secara online 
                            dari setiap lokasi.
                        </h3>
                    </div>
                    <div className="about-first-picture" />
                    <div className="about-first-space" />
                </div>
            </section>
        )
    }
}

export default AboutContent1