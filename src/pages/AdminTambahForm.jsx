import React from 'react'
import TambahForm from '../components/TambahForm'
import Nav from '../components/Nav'
import './AdminPage.css'
import Helmet from 'react-helmet'

function AdminTambahForm() {
  return (
    <>
        <Helmet>
            <title>Tambah Dokter - TeleDoc</title>
        </Helmet>
      <Nav style1={'hidden'}/>
      <TambahForm/>
    </>
  )
}

export default AdminTambahForm