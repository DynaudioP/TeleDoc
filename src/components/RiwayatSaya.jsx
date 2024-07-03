import axios from "axios"
import { useEffect, useState } from "react";

function RiwayatSaya() {
  const dataLoginId = localStorage.getItem('id_user')
  const url1 = `https://be-production-85d3.up.railway.app/rikes`
  const url2 = `https://be-production-85d3.up.railway.app/rikes/byId?id=${dataLoginId}`
  const [riwayat, setRiwayat] = useState('')
  const [bb, setBB] = useState('')
  const [tb, setTB] = useState('')
  const [goldar, setGoldar] = useState('')

    useEffect(() => {
      axios.get(url2)
      .then((res) => {
        const dataRiwayat = res.data.data
        dataRiwayat.map((item) => {
            setRiwayat(item.riwayat_penyakit || '')
            setBB(item.tinggi_badan || '')
            setTB(item.berat_badan || '')
            setGoldar(item.golongan_darah || '')
        })
      })
    }, [])

  function updateRiwayat(e){
    e.preventDefault()
    console.log(goldar);
    axios.post(url1, {
        "riwayat_penyakit": riwayat,
        "berat_badan": bb,
        "tinggi_badan": tb,
        "golongan_darah": goldar,
        "id_user": dataLoginId
    })
    .then((res) => {
        alert(res.data.message)
    })
  }

  function handleSelect(value) {
    setGoldar(value)
  }

  return (
    <div className="col-sm-10 col-md-9 col-lg-8 pe-0">
        <div className='row justify-content-center w-auto'>
            <div className='col-10 bg-white content-wrapper my-5'>
                <div className='row justify-content-center w-auto'>
                    <div className='col-12 content-header'>
                        <h2>Riwayat Kesehatan</h2>
                    </div>
                    <div className='col-10'>
                        <form onSubmit={updateRiwayat}>
                            <div className='kym inc'>
                                <label className='input-label'>Riwayat Penyakit</label>
                                <div className="input-wrapper" name="for-riwayat-penyakit">
                                    <textarea name="Alamat Rumah" rows={10} className='input-form-2' value={riwayat} onChange={(e) => setRiwayat(e.target.value)} ></textarea>
                                </div>
                            </div>
                            <div className='list-input kym'>
                                <div className='riwayat-input kym inc'>
                                    <label className='input-label'>Berat Badan (kg)</label>
                                    <div className="input-wrapper" name="for-berat-badan">
                                        <input type="number" name="Berat Badan" className='input-form-3' value={bb} onChange={(e) => setBB(e.target.value)} required />
                                    </div>
                                </div>
                                <div className='riwayat-input kym inc'>
                                    <label className='input-label'>Tinggi Badan (cm)</label>
                                    <div className="input-wrapper" name="for-tinggi-badan">
                                        <input type="number" name="Tinggi Badan" className='input-form-3' value={tb} onChange={(e) => setTB(e.target.value)} required />
                                    </div>
                                </div>
                                <div className='riwayat-input kym inc'>
                                    <label className='input-label'>Golongan Darah</label>
                                        <select name="golongan-darah" className="input-form-4" value={goldar} onChange={(e) => handleSelect(e.target.value)} required>
                                            <option>Silahkan Pilih</option>
                                            <option value="A" >A</option>
                                            <option value="B">B</option>
                                            <option value="O">O</option>
                                            <option value="AB">AB</option>
                                        </select>
                                </div>
                            </div>
                            <div className='row justify-content-end ms-0 me-0 my-5 w-auto'>
                                <button type='submit' className='col-5 col-sm-3 btn-1'>Simpan</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RiwayatSaya