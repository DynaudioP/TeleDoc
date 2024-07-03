import './Register.css'
import FormRegister from '../components/FormRegister'
import Nav from '../components/Nav'
import React from 'react'
import Helmet from 'react-helmet'

function Register() {
  return (
    <>
        <Helmet>
            <title>Register - TeleDoc</title>
        </Helmet>
        <Nav beranda={'Beranda'} listdokter={'List Dokter'} log={'Login'}/>
        <FormRegister/>
    </>
  )
}

export default Register