import React from 'react'
import Fade from 'react-reveal/Fade'
import {Helmet} from 'react-helmet'

import '../Assets/CSS/PPTC.css'

class PPContent extends React.Component {

    render(){
        return (
            <section>
                <Helmet>
                    <title>Kebijakan Privasi | Gandiwa Nusantara</title>
                    <meta name="title" content="Lokasi | Media Pintar Untuk Semua | Gandiwa Nusantara" />
                    <meta name="description" content="Berbagai Lokasi yang telah Menjadi Partner dengan Gandiwa Nusantara" />
                    <link rel="canonical" href="http://gandiwa.id/Location" />
                </Helmet>
                
                <div className="the-container">
                    <div className="the-title">
                        <h1>
                            Kebijakan Privasi
                        </h1>
                    </div>
                    <div className="the-content">
                        <p>
                            Di Gandiwa Nusantara, dapat diakses dari gandiwa.id, salah satu prioritas utama kami adalah privasi pengunjung kami. Dokumen Kebijakan Privasi ini berisi jenis informasi yang dikumpulkan dan dicatat oleh Gandiwa Nusantara dan bagaimana kami menggunakannya.
                        </p>
                        <p>
                        Jika Anda memiliki pertanyaan tambahan atau memerlukan informasi lebih lanjut tentang Kebijakan Privasi kami, jangan ragu untuk menghubungi kami.
                        </p>

                        <h2>File Log</h2>
                        <p>
                            Gandiwa Nusantara mengikuti prosedur standar menggunakan file log. File-file ini mencatat pengunjung ketika mereka mengunjungi situs web. Semua perusahaan hosting melakukan ini dan merupakan bagian dari analitik layanan hosting. Informasi yang dikumpulkan oleh file log termasuk alamat protokol internet (IP), jenis browser, Penyedia Layanan Internet (ISP), cap tanggal dan waktu, halaman rujukan / keluar, dan mungkin jumlah klik. Ini tidak terkait dengan informasi apa pun yang dapat diidentifikasi secara pribadi. Tujuan dari informasi tersebut adalah untuk menganalisis tren, mengelola situs, melacak pergerakan pengguna di situs web, dan mengumpulkan informasi demografis.
                        </p>

                        <h2>Privasi</h2>
                        <p>Anda dapat berkonsultasi dengan daftar ini untuk menemukan Kebijakan Privasi untuk masing-masing mitra periklanan Gandiwa Nusantara.</p>
                        <p>Server iklan atau jaringan iklan pihak ketiga menggunakan teknologi seperti cookie, JavaScript, atau Web Beacon yang digunakan di masing-masing iklan dan tautan yang muncul di Gandiwa Nusantara, yang dikirim langsung ke browser pengguna. Mereka secara otomatis menerima alamat IP Anda saat ini terjadi. Teknologi ini digunakan untuk mengukur keefektifan kampanye iklan mereka dan / atau untuk mempersonalisasi konten iklan yang Anda lihat di situs web yang Anda kunjungi.</p>
                        <p>Perhatikan bahwa Gandiwa Nusantara tidak memiliki akses atau kontrol atas cookie ini yang digunakan oleh pengiklan pihak ketiga.</p>

                        <h2>Kebijakan Privasi Pihak Ketiga</h2>
                        <p>Kebijakan Privasi Gandiwa Nusantara tidak berlaku untuk pengiklan atau situs web lain. Karena itu, kami menyarankan Anda untuk berkonsultasi dengan masing-masing Kebijakan Privasi dari server iklan pihak ketiga ini untuk informasi yang lebih rinci. Ini mungkin termasuk praktik dan instruksi mereka tentang cara menyisih dari opsi tertentu.</p>
                        <p>Anda dapat memilih untuk menonaktifkan cookie melalui opsi browser individual Anda. Untuk mengetahui informasi lebih rinci tentang manajemen cookie dengan browser web tertentu, dapat ditemukan di situs web masing-masing browser.</p>

                        <h2>Informasi Tambahan</h2>
                        <p>Bagian lain dari prioritas kami adalah menambahkan perlindungan untuk anak-anak saat menggunakan internet. Kami mendorong orang tua dan wali untuk mengamati, berpartisipasi, dan / atau memantau dan membimbing aktivitas online mereka.</p>
                        <p>Gandiwa Nusantara tidak dengan sengaja mengumpulkan Informasi Identitas Pribadi apa pun dari anak-anak di bawah usia 13 tahun. Jika menurut Anda anak Anda memberikan informasi semacam ini di situs web kami, kami sangat menganjurkan Anda untuk segera menghubungi kami dan kami akan melakukan upaya terbaik kami untuk segera hapus informasi tersebut dari catatan kami.</p>

                        <h2>Hanya Kebijakan Privasi Online</h2>
                        <p>Kebijakan Privasi ini hanya berlaku untuk aktivitas online kami dan berlaku untuk pengunjung situs web kami sehubungan dengan informasi yang mereka bagikan dan / atau kumpulkan di Gandiwa Nusantara. Kebijakan ini tidak berlaku untuk informasi apa pun yang dikumpulkan secara offline atau melalui saluran selain situs web ini.</p>

                        <h2>Persetujuan</h2>
                        <p>Dengan menggunakan situs web kami, Anda dengan ini menyetujui Kebijakan Privasi kami dan menyetujui Syarat dan Ketentuannya.</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default PPContent