import React from 'react'
import './ListdokterPage.css'
import Listdokter from '../components/Listdokter'
import Nav from '../components/Nav'
import Helmet from 'react-helmet'

function ListdokterPage() {
  return (
    <>
        <Helmet>
            <title>List Dokter - TeleDoc</title>
        </Helmet>
        <Nav beranda={'Beranda'} listdokter={'List Dokter'}/>
        <Listdokter/>
    </>
  )
}

export default ListdokterPage