import React from 'react'
import axios from 'axios'
import {Helmet} from 'react-helmet'

import '../../App.css'
import '../../Assets/CSS/Form/FormContent.css'

class FormContent extends React.Component {

    constructor(){
        super()
        this.state = {
            nama: "",
            hp: "",
            email: "",
            namaUsaha: "",
            bidangSelected: false,
            lokasiSelected: false,
            bidang: "default",
            lokasi: "default",
        }
        
        this.handleCheckNama = this.handleCheckNama.bind(this);
        this.handleCheckHp = this.handleCheckHp.bind(this);
        this.handleCheckEmail = this.handleCheckEmail.bind(this);
        this.handleCheckNamaUsaha = this.handleCheckNamaUsaha.bind(this);
        this.handleBidang = this.handleBidang.bind(this);
        this.handleLokasi = this.handleLokasi.bind(this);
    }

    handleCheckNama = (event) => {
        this.setState({
            nama: event.target.value
        });
    }

    handleCheckHp = (event) => {
        this.setState({
            hp: event.target.value
        });
    }

    handleCheckEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    handleCheckNamaUsaha = (event) => {
        this.setState({
            namaUsaha: event.target.value
        });
    }
    
    handleBidang = (event) => {
        this.setState({
            bidang: event.target.value,
            bidangSelected: true
        });
    }

    handleLokasi = (event) => {
        this.setState({
            lokasi: event.target.value,
            lokasiSelected: true
        });
    }

    send = () => {
        axios.post('https://api.gandiwa.id/GandiwaForm/send', {
            nama: this.state.nama,
            nomorhp: this.state.hp,
            email: this.state.email,
            namaUsaha: this.state.namaUsaha,
            bidangUsaha: this.state.bidang,
            lokasiUsaha: this.state.lokasi,
        }).then(() => {
          console.log('success');
          window.location = "/FormSuccess"
        })
    }

    render(){
        
        return (
            <section>
                <Helmet>
                    <title>Registrasi | Media Pintar Untuk Semua | Gandiwa Nusantara</title>
                    <meta name="title" content="Registrasi | Media Pintar Untuk Semua | Gandiwa Nusantara" />
                    <meta name="description" content="Formulir Registrasi Free Trial" />
                    <link rel="canonical" href="http://gandiwa.id/Form" />
                </Helmet>
                <div className="form-container">
                    <div className="form-title">
                        <h1>
                            Form Pendaftaran
                        </h1>
                    </div>
                    <div className="form-bg" />
                    <div className="form-input">
                        <input type="text" placeholder="Name Lengkap"
                        onChange={this.handleCheckNama}
                        value={this.state.nama} />
                        <input type="text" placeholder="Nomor HP"
                        onChange={this.handleCheckHp}
                        value={this.state.hp} />
                        <input type="text" placeholder="Email"
                        onChange={this.handleCheckEmail}
                        value={this.state.email} />
                        
                        <hr />
                        
                        <input type="text" placeholder="Nama Usaha"
                        onChange={this.handleCheckNamaUsaha}
                        value={this.state.namaUsaha} />
                        <div className="select">
                            <select name="slct" id="slct"
                            onChange={this.handleBidang} value={this.state.bidang}>
                                <option selected disabled value="default">Pilih Bidang Usaha</option>
                                <option value="Bidang Jasa">Bidang Jasa</option>
                                <option value="Bidang Finansial">Bidang Finansial</option>
                                <option value="Bidang Komunikasi">Bidang Komunikasi</option>
                                <option value="Bidang Transportasi">Bidang Transportasi</option>
                                <option value="Bidang Konstruksi">Bidang Konstruksi</option>
                                <option value="Bidang Manufaktur">Bidang Manufaktur</option>
                                <option value="Bidang Produksi Bahan Mentah">Bidang Produksi Bahan Mentah</option>
                                <option value="Bidang Pertanian dan Perkebunan">Bidang Pertanian dan Perkebunan</option>
                                <option value="Lain Lain">Lain Lain</option>
                            </select>
                        </div>
                        <div className="select">
                            <select name="slct" id="slct"
                            onChange={this.handleLokasi} value={this.state.lokasi}>
                                <option selected disabled value="default">Pilih Lokasi Usaha</option>
                                <option value="Bali">Bali</option>
                                <option value="Banten">Banten</option>
                                <option value="DKI Jakarta">DKI Jakarta</option>
                                <option value="Jawa Barat">Jawa Barat</option>
                                <option value="Jawa Tengah">Jawa Tengah</option>
                                <option value="Jawa Timur">Jawa Timur</option>
                                <option value="Kalimantan Barat">Kalimantan Barat</option>
                                <option value="Kalimantan Tengah">Kalimantan Tengah</option>
                                <option value="Kalimantan Timur">Kalimantan Timur</option>
                                <option value="Kalimantan Selatan">Kalimantan Selatan</option>
                                <option value="Kalimantan Utara">Kalimantan Utara</option>
                                <option value="Yogyakarta">Yogyakarta</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-submit">
                        <button className="header-button1" onClick={this.send}>
                            <b>Kirim</b>
                        </button>
                    </div>
                    <div className="form-bg1" />
                </div>
            </section>
        )
    }
}

export default FormContent