import './Dokterpesan.css'
import DetailDokter from '../components/DetailDokter'
import Nav from '../components/Nav'
import React from 'react'
import Helmet from 'react-helmet'

function Dokterpesan() {
    return(
        <>
            <Helmet>
                <title>Pesan Dokter - TeleDoc</title>
            </Helmet>
            <Nav/>
            <DetailDokter/>
        </>

    )
}

export default Dokterpesan