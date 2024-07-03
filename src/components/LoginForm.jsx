import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { loggeduser } from '../redux/action/loginmasukAction'
import axios from 'axios'


function LoginForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const url = 'https://be-production-85d3.up.railway.app/user/login'


    function handleTes(e) {
        e.preventDefault()
        axios.post(url, {
            email: email,
            password: password
        }
        
        )
        .then((res) => {
            alert(res.data.message)
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("id_user", res.data.id_user)
            localStorage.setItem("user_nama_depan", res.data.nama_depan)
            localStorage.setItem("user_nama", res.data.nama)
            dispatch(loggeduser(true))
            if (res.data.role == 'user'){
                navigate('/')
            }
            else{
                navigate('/admin')
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }
 


    return (
        <section className='login-section'>
        
        <div id="login-wrap">
            <div id="login-box">
                <form id="btn" onSubmit={handleTes}>
                    <h5>Sudah Mempunyai Akun?</h5>
                    <h5>Silahkan Login</h5>
                    <div className="form-box">
                        <p>Email<span> *</span></p>
                        <div className="input-wrapper" name="for-nama-belakang">
                            <input type="email" id="email" className="form-input" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                        
                    </div>
                    <div className="form-box">
                        <p>Password<span> *</span></p>
                        <div className="input-wrapper" name="for-nama-belakang">
                            <input type="password" id="password" className="form-input" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        </div>
                        
                    </div>
                    
                    <div className="one-line">
                        <div id="wrap-ingat">
                            <input type="checkbox" id="ingat" className="wr" name="ingat"/>
                            <p>Ingat Saya</p>
                        </div>
                        
                        <p><a href="" className="press">Lupa Password?</a></p>
                    </div>
                    <div className="log">
                        <button type="submit" className="log-button">Login</button>
                    </div>
                    <h6>Belum Mempunyai Akun? <span><Link to='/register' className="press">Register Disini</Link></span></h6>
                </form>
                
            </div>
        </div>
    </section>
    )
}

export default LoginForm