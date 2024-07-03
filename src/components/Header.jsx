import { Link } from 'react-router-dom'
import MaleDoctor from '../assets/Male-Doctor.svg'
import React from 'react'

function Header({link}) {
  return (
    <header className="homepage-header">
        <div id="header-left">
            <div>
                <img src={MaleDoctor} alt="Male Doctor" />
            </div>
        </div>
        <div id="header-right">
            <div>
                <p name="find-doctor">Temukan Dokter</p>
                <h1>Konsultasi Dengan Pilihan Dokter Kompeten Ada Di Sini</h1>
                <p name="recommendation">Lihat rekomendasi dokter dan mulai konsultasi sekarang</p>
            </div>
            <div>
                <Link to={link}>Lihat Dokter</Link>
            </div>
        </div>
    </header>
  )
}

export default Header