import axios from "axios"
import { useEffect, useState } from "react";

function ProfilSaya() {
  const dataLoginId = localStorage.getItem('id_user')
  const url = `https://be-production-85d3.up.railway.app/user/byId?id=${dataLoginId}`
  const [namaDepan, setNamaDepan] = useState('')
  const [namaBelakang, setNamaBelakang] = useState('')
  const [noTelp, setNoTelp] = useState('')
  const [jk, setJk] = useState('')
  const [tempatLahir, setTempatLahir] = useState('')
  const [tglLahir, setTglLahir] = useState('')
  const [email, setEmail] = useState('')
  const [alamat, setAlamat] = useState('')

    useEffect(() => {
        axios(url)
        .then((res) => {
          setNamaDepan(res.data.data.nama_depan || '')
          setNamaBelakang(res.data.data.nama_belakang || '')
          setNoTelp(res.data.data.no_telp || '')
          setJk(res.data.data.jenis_kelamin || '')
          setTempatLahir(res.data.data.tempat_lahir || '')
          setTglLahir(res.data.data.tanggal_lahir || '')
          setEmail(res.data.data.email)
          setAlamat(res.data.data.alamat || '')
        })
    }, [])
    

  function updateProfil(e) {
    e.preventDefault()

    axios.post(url, {
        "nama_depan": namaDepan,
        "nama_belakang": namaBelakang,
        "no_telp": noTelp,
        "jenis_kelamin": jk,
        "tempat_lahir": tempatLahir,
        "tanggal_lahir": tglLahir,
        "email": email,
        "alamat": alamat
    })
    .then((res) => {
        alert(res.data.message)
    })
  }

  function handleRadio(value) {
    setJk(value)
  }

  return (
    <div className="col-sm-10 col-md-9 col-lg-8 pe-0">
        <div className='row justify-content-center w-auto'>
            <div className='col-10 bg-white content-wrapper my-5'>
                <div className='row justify-content-center w-auto'>
                    <div className='col-12 content-header'>
                        <h2>Profil Saya</h2>
                    </div>
                    <div className='col-10'>
                        <form onSubmit={updateProfil}>
                            <div className='list-input kym'>
                                <div className='list-input-width-1 inc'>
                                    <label className='input-label'>Nama Depan</label>
                                    <div className="input-wrapper" name="for-nama-depan">
                                        <input type="text" name="Nama Depan" className='input-form-1' value={namaDepan} onChange={(e) => setNamaDepan(e.target.value)} required />
                                    </div>
                                </div>
                                <div className='list-input-width-1 inc'>
                                    <label className='input-label'>Nama Belakang</label>
                                    <div className="input-wrapper" name="for-nama-belakang">
                                        <input type="text" name="Nama Belakang" className='input-form-1' value={namaBelakang} onChange={(e) => setNamaBelakang(e.target.value)} required />
                                    </div>
                                </div>
                            </div>
                            <div className='list-input kym'>
                                <div className='list-input-width-1 inc'>
                                    <label className='input-label'>No. Telepon</label>
                                    <div className="input-wrapper" name="for-no-telepon">
                                        <input type="text" name="No Telepon" className='input-form-1' value={noTelp} onChange={(e) => setNoTelp(e.target.value)} />
                                    </div>
                                </div>
                                <div className='list-input-width-1 inc'>
                                    <label className='input-label'>Jenis Kelamin</label>
                                    <div className='input-radio'>
                                        <div className='input-radio-value'>
                                            <input type="radio" id="laki" name="jenis_kelamin" value="Laki-laki" onChange={(e) => handleRadio(e.target.value)} checked={jk === 'Laki-laki'}/>
                                            <label htmlFor="laki" className='ms-1 jk'>Laki-laki</label>
                                        </div>
                                        <div className='ms-3 input-radio-value'>
                                            <input type="radio" id="perempuan" name="jenis_kelamin" value="Perempuan" onChange={(e) => handleRadio(e.target.value)} checked={jk === 'Perempuan'}/>
                                            <label htmlFor="perempuan" className='ms-1 jk'>Perempuan</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='list-input kym inc'>
                                <div className='list-input-width-1'>
                                    <label className='input-label'>Tempat Lahir</label>
                                    <div className="input-wrapper" name="for-tempat-lahir">
                                        <input type="text" name="Tempat Lahir" className='input-form-1' value={tempatLahir} onChange={(e) => setTempatLahir(e.target.value)} />
                                    </div>
                                </div>
                                <div className='list-input-width-1 inc'>
                                    <label className='input-label'>Tanggal Lahir</label>
                                    <div className="input-wrapper" name="for-tanggal-lahir">
                                        <input type="date" name="Tanggal Lahir" className='input-form-1' value={tglLahir} onChange={(e) => setTglLahir(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className='kym inc'>
                                <label className='input-label'>Alamat Email</label>
                                <div className="input-wrapper" name="for-alamat-email">
                                    <input type="email" name="Alamat Email" className='input-form-2' value={email} readOnly required/>
                                </div>
                            </div>
                            <div className='kym inc'>
                                <label className='input-label'>Alamat Rumah</label>
                                <div className="input-wrapper" name="for-alamat-rumah">
                                    <textarea name="Alamat Rumah" rows={5} className='input-form-2' value={alamat} onChange={(e) => setAlamat(e.target.value)} ></textarea>
                                </div>
                            </div>
                            <div className='row justify-content-center ms-0 me-0 my-5 w-auto'>
                                <button type='submit' className='col-5 btn-1'>Simpan</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfilSaya