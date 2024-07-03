import axios from "axios";
import React, {useState} from "react";
import { useNavigate, useParams } from "react-router-dom";


function Bayar() {
    const url = 'https://be-production-85d3.up.railway.app/pembayaran'
    const navigate = useNavigate()
    const [total,setTotal] = useState('279000')
    const [id_user,setUser] = useState('')
    const ids_dokter = useParams()


    const idu = localStorage.getItem("id_user")
    const detail = JSON.parse(localStorage.getItem("detail"))
    const idh = detail.harga
    
    let rp_harga = detail.harga
    let harga = rp_harga.replace('Rp. ','');
    console.log(harga)
    function handleCoba(e) {
        e.preventDefault()
        axios.post(url, {
            id_user: idu,
            id_dokter: ids_dokter.id,
            total: harga
        })
        .then((res) => {
            window.open(res.data.redirectURL, '_blank');
            navigate(`/checkout/${ids_dokter.id}`)
        })
    }
    

    return (
        <form className="wrap-payment-page" onSubmit={handleCoba}>
            <div className="wrap-payment">
                <div className="left-pay">
                    <div className="pay-price">
                        <p>Total</p>
                        <h5>{idh}</h5>
                    </div>
                    <div className="pay-detail">
                        <p>{detail.namaDokter}</p>
                        <div className="sch-price">
                            <p>{detail.jadwal}</p>
                            <p>{detail.harga}</p>
                        </div>
                        
                    </div>
                </div>
                <div className="right-pay">
                    <div className="metode-box">
                        
                        <div className="label-box">
                            <h4>Pembayaran</h4>
                        </div>
                
                        <div className="terms">
                            <input type="checkbox" className="agree-terms" required/>
                            <p>Anda mengetahui dan setuju bahwa Anda tidak berhak atas</p>
                        </div>
                        <div className="hak">
                            <p>pengembalian uang untuk pembelian dalam</p>
                            <p>keadaan apa pun.</p>
                        </div>
                        <div className="terms">
                            <input type="checkbox" className="agree-terms" required/>
                            <p>Saya setuju dengan syarat dan ketentuan</p>
                        </div>
                        <div className="payment">
                            <button type="submit" className="btn-pay">Proceed To Payment</button>
                        </div>

                        {/* <div className="m-payment">
                            <p>tes</p>
                        </div>
                        <div className="m-payment">
                            <p>tes</p>
                        </div>
                        <div className="m-payment">
                            <p>tes</p>
                        </div> */}
                    </div>
                </div>
            </div>
           
        </form>
        
    )
}

export default Bayar
