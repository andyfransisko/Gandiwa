import React from 'react'

import '../App.css'
import '../Video.css'
import '../Assets/CSS/HomeContents.css'

import HomePicture1 from '../Assets/Images/home-1.png'
import Product1 from '../Assets/Images/tv-screen-1.png'
import Product2 from '../Assets/Images/smartphone.png'
import Product3 from '../Assets/Images/monitor.png'
import About1 from '../Assets/Images/about.png'
import Why1 from '../Assets/Images/why-1.png'
import Why2 from '../Assets/Images/why-2.png'
import Why3 from '../Assets/Images/why-3.png'
import Why4 from '../Assets/Images/why-4.png'

import Client1 from '../Assets/Images/client/client1.png'
import Client2 from '../Assets/Images/client/client2.png'
import Client3 from '../Assets/Images/client/client3.png'
import Client4 from '../Assets/Images/client/client4.png'
import Client5 from '../Assets/Images/client/client5.png'
import Client6 from '../Assets/Images/client/client6.png'
import Client7 from '../Assets/Images/client/client7.png'
import Client8 from '../Assets/Images/client/client8.png'
import Client9 from '../Assets/Images/client/client9.png'
import Client10 from '../Assets/Images/client/client10.png'
import Client11 from '../Assets/Images/client/client11.png'
import Client12 from '../Assets/Images/client/client12.png'
import Client13 from '../Assets/Images/client/client13.png'
import Client14 from '../Assets/Images/client/client14.png'
import Client15 from '../Assets/Images/client/client15.png'
import Client16 from '../Assets/Images/client/client16.png'

import Video1 from '../Assets/Images/video/samsat-cikande.mp4'
import Video2 from '../Assets/Images/video/Samsat-Surabaya-Barat.mp4'
import Video3 from '../Assets/Images/video/Samsat-Palangkaraya.mp4'
import Video4 from '../Assets/Images/video/Samsat-Surabaya-Timur.mp4'

class HomeContents extends React.Component {

    render(){
        return (
            <section>
                <div className="home-container">
                    <div className="home-bg-pattern" />

                    <div className="home-main-pic">
                        <img src = {HomePicture1} className="home-picture-width" />
                    </div>
                    
                    <div className="home-header-1">
                        <h1>
                            Promosikan<br />
                            Produk Anda<br />
                            di Ruang Publik
                        </h1>
                    </div>
                    <div className="home-header-button">
                        <button className="primary-button">
                            Coba Sekarang
                        </button>
                    </div>
                </div>

                <div className="home-second-container">
                    <div className="home-second-header">
                        <h2>
                            Produk Kami
                        </h2>
                    </div>
                    <div className="home-second-pic-1">
                        <img src={Product1} className="product-img-width2" />
                    </div>
                    <div className="home-second-pic-2">
                        <img src={Product2} className="product-img-width" />
                    </div>
                    <div className="home-second-pic-3">
                        <img src={Product3} className="product-img-width" />
                    </div>

                    <div className="home-second-desc-1">
                        <h3>
                            Gandiwa Smartmedia
                        </h3>
                        <div className="product-desc">
                            Layar TV di ruang publik untuk menayangkan TVC Anda 
                            dapat menjadi media komunikasi dan promosi yang efektif 
                            dan mampu menjangkau market yang lebih luas.
                        </div>
                    </div>
                    <div className="home-second-desc-2">
                        <h3>
                            Gandiwa Smartwifi
                        </h3>
                        <div className="product-desc">
                            Iklan Anda akan tampil pada saat pengunjung menggunakan 
                            wifi gratis yang tersedia. Dengan kecepatan tinggi kenyamanan 
                            pengunjung selama berada di lokasi pelayanan pasti terjamin.
                        </div>
                    </div>
                    <div className="home-second-desc-3">
                    <h3>
                            Gandiwa Dashboard
                        </h3>
                        <div className="product-desc">
                            Dashboard yang bisa Anda akses dari laptop maupun smartphone, 
                            menampilkan laporan kegiatan promosi bisnis Anda secara 
                            realtime.
                        </div>
                    </div>
                </div>
                <div className="home-third-container">
                    <div className="home-third-background" />
                    <div className="home-third-pic-1">
                        <img src = {About1} className="home-picture-width" />
                    </div>
                    <div className="home-third-header">
                        <h2>
                            Tentang Kami
                        </h2>
                        <h3 className="word-space">
                            Media iklan berbiaya rendah pertama yang berlokasi 
                            di kantor layanan publik di Indonesia. TV dan Wifi gratis 
                            tersedia untuk mempromosikan bisnis dan merek Anda. 
                            Menggabungkan DOOH dan teknologi terbaru untuk menyediakan 
                            jaringan media pintar yang Efektif - Ekonomis - Tepat Sasaran.
                        </h3>
                    </div>
                </div>
                <div className="home-forth-container">
                    <div className="home-forth-bg" />
                    <div className="home-forth-header">
                        <h2>
                            Alasan Beriklan dengan Gandiwa
                        </h2>
                    </div>
                    <div className="home-forth-pic-1">
                        <img src = {Why1} className="why-picture-width" />
                    </div>
                    <div className="home-forth-desc-1">
                        <h3>
                            Ekonomis
                        </h3>
                        <div className="forth-desc">
                            Perusahaan harus membelanjakan biaya besar untuk 
                            menayangkan iklan. Kami menyediakan media yang akan 
                            menghemat biaya pemasaran Anda, sehingga promosi bisnis 
                            dapat Anda lakukan secara luas.
                        </div>
                    </div>
                    
                    <div className="home-forth-pic-2">
                        <img src = {Why2} className="why-picture-width" />
                    </div>
                    <div className="home-forth-desc-2">
                        <h3>
                            Area Publik
                        </h3>
                        <div className="forth-desc">
                            Pengunjung yang datang banyak dan beragam setiap harinya. 
                            Waktu tunggu yang lama memungkinkan iklan Anda lebih 
                            terlihat oleh calon konsumen.
                        </div>
                    </div>

                    <div className="home-forth-pic-3">
                        <img src = {Why3} className="why-picture-width" />
                    </div>
                    <div className="home-forth-desc-3">
                        <h3>
                            Pantauan Real Time
                        </h3>
                        <div className="forth-desc">
                            Media iklan sekarang ini tidak menyediakan measurement 
                            secara realtime. Sulit bagi Anda untuk bisa memantau 
                            keefektifitasan dan statistik konten iklan Anda. Gandiwa 
                            Dashboard menyediakan informasi yang Anda butuhkan secara 
                            online.
                        </div>
                    </div>

                    <div className="home-forth-pic-4">
                        <img src = {Why4} className="why-picture-width" />
                    </div>
                    <div className="home-forth-desc-4">
                        <h3>
                            Profil Audiens
                        </h3>
                        <div className="forth-desc">
                            Profil pengunjung yang spesifik sulit diperoleh. 
                            Gandiwa Dashboard menyediakan profil lokasi yang dapat 
                            membantu Anda untuk mengetahui target market yang sesuai 
                            dengan bisnis Anda.
                        </div>
                    </div>
                </div>
                <div className="home-fifth-container">
                    <div className="home-fifth-bg" />
                    <div className="home-fifth-header">
                        <h2>
                            Klien Kami
                        </h2>
                    </div>
                    <div className="home-fifth-back-client">
                        <div className="home-fifth-client-container">
                            <div>
                                <img src = {Client1} className="client-opacity home-picture-width" />
                            </div>
                            <div>
                                <img src = {Client2} className="client-opacity home-picture-width" />
                            </div>
                            <div>
                                <img src = {Client3} className="client-opacity home-picture-width" />
                            </div>
                            <div>
                                <img src = {Client4} className="client-opacity home-picture-width" />
                            </div>
                            <div>
                                <img src = {Client5} className="client-opacity home-picture-width" />    
                            </div>
                            <div>
                                <img src = {Client6} className="client-opacity home-picture-width" />
                            </div>
                            <div>
                                <img src = {Client7} className="client-opacity home-picture-width" />    
                            </div>
                            <div>
                                <img src = {Client8} className="client-opacity home-picture-width" />
                            </div>
                            <div>
                                <img src = {Client9} className="client-opacity home-picture-width" />
                            </div>
                            <div>
                                <img src = {Client10} className="client-opacity home-picture-width" />
                            </div>
                            <div>
                                <img src = {Client11} className="client-opacity home-picture-width" />
                            </div>
                            <div>
                                <img src = {Client12} className="client-opacity home-picture-width" />
                            </div>
                            <div>
                                <img src = {Client13} className="client-opacity home-picture-width" />
                            </div>
                            <div>
                                <img src = {Client14} className="client-opacity home-picture-width" />
                            </div>
                            <div>
                                <img src = {Client15} className="client-opacity home-picture-width" />
                            </div>
                            <div>
                                <img src = {Client16} className="client-opacity home-picture-width" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home-sixth-container">
                    <div className="home-sixth-bg" />
                    <div className="home-sixth-header">
                        <h2>
                            Expand Your Brand Potential
                        </h2>
                    </div>
                    
                    <div className="home-sixth-video">
                        <div>
                            <div class="grid-row reverse video-gallery">
                                <input type="radio" value="1" name="video-list" id="video-1" /><label for="video-1">
                                    <span className="label-1">
                                        OPtion 1
                                    </span>
                                </label>
                                    
                                <input type="radio" value="2" name="video-list" id="video-2" /><label for="video-2">Option 2</label>
                                <input type="radio" value="3" name="video-list" id="video-3" /><label for="video-3">Option 3</label>
                                <input type="radio" value="4" name="video-list" id="video-4" /><label for="video-4">Option 4</label>
                                <input type="radio" value="5" name="video-list" id="video-5" /><label for="video-5">Option 5</label>
                                <input type="radio" value="6" name="video-list" id="video-6" /><label for="video-6">Option 6</label>
 
                                <div class="video video-1">
                                    <iframe src={Video1} frameborder="0" muted allowfullscreen></iframe>
                                </div>

                                <div class="video video-2">
                                    <iframe src={Video2} frameborder="0" muted allowfullscreen></iframe>
                                </div>

                                <div class="video video-3">
                                    <iframe src={Video3} frameborder="0" muted allowfullscreen></iframe>
                                </div>

                                <div class="video video-4">
                                    <iframe src={Video4} frameborder="0" muted allowfullscreen></iframe>
                                </div>

                                <div class="video video-5">
                                    <iframe src="https://www.youtube.com/embed/UXP307MGQzs" frameborder="0" allowfullscreen></iframe>
                                </div>

                                <div class="video video-6">
                                    <iframe src="https://www.youtube.com/embed/0kY0Q5hdjDI" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    
  }
  
  export default HomeContents