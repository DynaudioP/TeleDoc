import './Login.css'
import LoginForm from '../components/LoginForm'
import Nav from '../components/Nav'
import React from 'react'
import Helmet from 'react-helmet'

function Login() {
    return(
        <>
            <Helmet>
                <title>Login - TeleDoc</title>
            </Helmet>
            <Nav beranda={'Beranda'} listdokter={'List Dokter'} log={'Login'}/>
            <LoginForm/>
        </>
        
    )
}

export default Login