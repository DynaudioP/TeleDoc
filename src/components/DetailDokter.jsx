import React, { useEffect, useState } from "react"
import FotoD from "./img/doc1.jpg"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useParams } from "react-router-dom"
import {Icon} from "react-icons-kit"
import {arrow_left} from 'react-icons-kit/ikons/arrow_left'
import {man} from 'react-icons-kit/ionicons/man'
import {iosMedkit} from 'react-icons-kit/ionicons/iosMedkit'
import {cash} from 'react-icons-kit/ionicons/cash'
import {iosStopwatch} from 'react-icons-kit/ionicons/iosStopwatch'
import {user} from 'react-icons-kit/ikons/user'

function DetailDokter() {
    let [listDokter, setList] = useState('')
    const [namaDokter, setDokter] = useState("")
    const [kriteriaDokter, setKriteria] = useState("")
    const [pengalamanDokter, setPengalaman] = useState("")
    const [dokterHarga, setHarga] = useState("")
    const [infoDokter, setInfo] = useState("")
    const [jadwal, setJadwal] = useState("")
    const navigate = useNavigate()
    const tes = useParams()
    const idz = tes.id
    const url = 'https://be-production-85d3.up.railway.app/dokter/byId?id='+ tes.id


    useEffect(() => {
        axios.get(url)
            .then(res => {
                setDokter(res.data.data.nama)
                setKriteria(res.data.data.spesialis)
                setPengalaman(res.data.data.pengalaman)
                setHarga(res.data.data.harga)
                setInfo(res.data.data.detail_info)

                
            })
            .catch(err => {
                alert("Oops...There is something wrong")
            })
    }, [])

    function handleSubmit(e){
        e.preventDefault()
        localStorage.setItem("detail", JSON.stringify({
            namaDokter: namaDokter,
            jadwal: jadwal,
            harga: dokterHarga
        }))
        navigate(`/pembayaran/${idz}`)
    }
    
    return (
        <div className="wrap-dkt" >
            <button className="back-pg" onClick={() => navigate(-1)}><Icon icon={arrow_left}/></button>
            <h3>Detail dan Jadwal Dokter</h3>
            <div className="detail-dokter">
                <div className="dd-left">
                    <img src={FotoD} alt="dokter" className="dd-img"/>
                </div>
                <div className="dd-right">
                    <p className="right-p"><Icon icon={user} className='d-icon' size='20'/>{namaDokter}</p>
                    <p className="right-p"><Icon icon={iosMedkit} className='d-icon' size='20'/>{kriteriaDokter}</p>
                    <p className="right-p"><Icon icon={iosStopwatch} className='d-icon' size='20'/>{pengalamanDokter}</p>
                    <p className="right-p"><Icon icon={cash} className='d-icon' size='20'/>{dokterHarga}</p>
                </div>
            </div>
            <form className="detail-info-submit" onSubmit={handleSubmit}>
                <h4>Detail Info</h4>
                <div className="info-text">
                    <p>{infoDokter}</p>
                </div>
                <h4>Pilih Waktu Kunjungan</h4>
                <div className="visit-check">
                    <div className="input-container">
                        <input type='radio' className="sch-check" id="day1" value="Senin 09:00-12:00" name="jadwal" onChange={e => setJadwal(e.target.value)}/>
                        <div className="b-label">
                            <label for="day1">Senin 09:00-12:00</label>
                        </div>
                    </div>
                    <div className="input-container">
                        <input type='radio' className="sch-check" id="day2" value="Rabu 09:00-12:00" name="jadwal" onChange={e => setJadwal(e.target.value)}/>
                        <div className="b-label">
                            <label for="day2">Rabu 09:00-12:00</label>
                        </div>
                    </div>
                    <div className="input-container">
                        <input type='radio' className="sch-check" id="day3" value="Jum'at 15:00-17:00" name="jadwal" onChange={e => setJadwal(e.target.value)}/>
                        <div className="b-label">
                            <label for="day3">Jum'at 15:00-17:00</label>
                        </div>
                    </div>
                </div>
                <div className="wrap-pesan">
                    <button type="submit" className="order-submit">Pesan</button>
                </div>
                
            </form>
        </div>
    )
}

export default DetailDokter