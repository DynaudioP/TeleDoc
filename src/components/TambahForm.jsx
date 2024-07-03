import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function TambahForm() {
  const url = 'https://be-production-85d3.up.railway.app/dokter'
  const [namaDokter, setNamaDokter] = useState('')
  const [spesialisasi, setSpesialisasi] = useState('')
  const [pengalaman, setPengalaman] = useState('')
  const [detailInfo, setDetailInfo] = useState('')
  const [harga, setHarga] = useState('')

  function handleTambah(e){
    e.preventDefault()

    axios.post(url, {
        "nama": namaDokter,
        "spesialis": spesialisasi,
        "pengalaman": pengalaman,
        "detail_info": detailInfo,
        "harga": harga,
    })
    .then((res) => {
        alert(res.data.message)
    })
  }

  return (
    <>
        <header className='row justify-content-center text-center mt-5'>
            <h1 className='col-10 tambah-form-h1'>Tambah Dokter</h1>
        </header>
        <div className='row justify-content-center mt-2 mb-5'>
            <div className='col-9 col-lg-6 col'>
                <div className='row justify-content-center w-auto'>
                    <form className='col-11' onSubmit={handleTambah}>
                        <div className='mt-2'>
                            <label className='tambah-form-label'>Nama Dokter</label>
                            <div className='input-wrapper'>
                                <input className='tambah-dokter-form' type="text" name='nama-dokter' value={namaDokter} onChange={(e) => setNamaDokter(e.target.value)} />
                            </div>
                        </div>
                        <div className='mt-2'>
                            <label className='tambah-form-label'>Spesialisasi</label>
                            <div className='input-wrapper'>
                                <input className='tambah-dokter-form' type="text" name='spesialisasi' value={spesialisasi} onChange={(e) => setSpesialisasi(e.target.value)} />
                            </div>
                        </div>
                        <div className='mt-2'>
                            <label className='tambah-form-label'>Pengalaman</label>
                            <div className='input-wrapper'>
                                <input className='tambah-dokter-form' type="text" name='pengalaman' value={pengalaman} onChange={(e) => setPengalaman(e.target.value)} />
                            </div>
                        </div>
                        <div className='mt-2'>
                            <label className='tambah-form-label'>Harga</label>
                            <div className='input-wrapper'>
                                <input className='tambah-dokter-form' type="text" name='pengalaman' value={harga} onChange={(e) => setHarga(e.target.value)} />
                            </div>
                        </div>
                        <div className='mt-2'>
                            <label className='tambah-form-label'>Detail Info</label>
                            <div className='input-wrapper'>
                                <textarea className='tambah-dokter-form' rows={8} type="text" name='pengalaman' value={detailInfo} onChange={(e) => setDetailInfo(e.target.value)} />
                            </div>
                        </div>
                        <div className='text-center mt-3'>
                            <button className='btn-7' type="submit">Tambah</button>
                        </div>
                    </form>
                    <p className='col-11 text-center mt-2 tambah-form-p'>Kembali ke <Link to={'/admin'}><span className='tambah-form-span'>Beranda</span></Link></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default TambahForm