import React from 'react'
import Icon from 'react-icons-kit'
import {money} from 'react-icons-kit/fa/money'
import { Link } from 'react-router-dom'

function CheckComp() {
    return(
        <div className='wrap-check'>
            <div className='check-box'>
                <h4>Silahkan Selesaikan Pembayaran Anda</h4>
                <div className='m-wrap'>
                    <Icon icon={money} size={100} className="m-icon"/>
                </div>
                <div className='home-back'>
                    <Link to='/'><button>Kembali ke Beranda</button></Link>
                </div>
            </div>
        </div>
    )
}

export default CheckComp