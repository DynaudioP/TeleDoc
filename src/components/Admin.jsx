import React, { useEffect, useState } from 'react'
import DocPhoto from '../assets/dalton-doctor.svg'
import { RiStethoscopeLine } from "react-icons/ri";
import { BiLike, BiBriefcaseAlt } from "react-icons/bi";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Admin() {
  const url = `https://be-production-85d3.up.railway.app/dokter`
  const [dokter, setDokter] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios(url)
    .then((res) => {
        setDokter(res.data.data)
    })
  }, [])

  function directUpdate(id){
    navigate(`updateform/${id}`)
  }

  function deleteData(id){
    axios.delete(`https://be-production-85d3.up.railway.app/dokter/byId?id=${id}`)
    .then((res) => {
        alert(res.data.message)
    })
  }

  function handleLogout(){
    localStorage.clear()
    navigate('/')
  }

  return (
    <>
        <div className='row justify-content-center mt-5'>
            <button className='col-8 btn-8' onClick={handleLogout}>Logout</button>
        </div>
        <div className='row justify-content-center mt-5'>
            <div className='col-9 text-center text-md-start'>
                <div className='row justify-content-center flex-wrap w-auto'>
                    <h1 className='col-12 col-md-10 listdoc-title'>List Dokter</h1>
                    <Link to={'/admin/tambahform'} className='col-8 col-md-2 align-self-center justify-self-center text-center btn-wrapper'>
                        <button className='btn-4'>Tambah</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className='row justify-content-center mt-4'>
            <div className='col-9'>
                <div className='row justify-content-center justify-content-lg-between flex-wrap w-auto'>
                    {
                        dokter.map((item, index) => (
                            <div className='col-10 col-lg-5 mb-5 border border-dark rounded' key={index}>
                                <div className='row flex-wrap ms-0 me-0 mt-4 w-auto'>
                                    <div className='col-12 col-sm-4 align-self-center order-0 order-sm-0 text-center'>
                                        <img src={DocPhoto} alt="Doctor-Photo" className='doc-photo' />
                                    </div>
                                    <div className='col'>
                                        <div className='row h-100'>
                                            <div className='col-12'>
                                                <div className='row w-auto'><span className='listdoc-name'>{item.nama}</span></div>
                                            </div>
                                            <div className='col-12 align-self-center'>
                                                <div className='row align-items-center justify-content-center w-auto'>
                                                    <div className='col-1 w-auto'><RiStethoscopeLine className='listdoc-icon-1' size={'100%'}/></div>
                                                    <div className='col p-0'><span className='listdoc-detail-1'>{item.spesialis}</span></div>
                                                </div>
                                            </div>
                                            <div className='col-12 align-self-end'>
                                                <div className='row '>
                                                    <div className='col'>
                                                        <div className='row align-items-center justify-content-center w-auto'>
                                                            <div className='col-1 w-auto'><BiLike className='listdoc-icon-2' size={'100%'}/></div>
                                                            <div className='col p-0'><span className='listdoc-detail-2'>100%</span></div>
                                                        </div>
                                                    </div>
                                                    <div className='col pe-0'>
                                                        <div className='row align-items-center justify-content-center w-auto'>
                                                            <div className='col-1 w-auto'><BiBriefcaseAlt className='listdoc-icon-2' size={'100%'}/></div>
                                                            <div className='col p-0'><span className='listdoc-detail-2'>{item.pengalaman}</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row justify-content-end ms-0 me-0 my-4 w-auto'>
                                    <button onClick={() => directUpdate(item._id)} className='col-4 col-sm-3 me-3 btn-5'>Update</button>
                                    <button onClick={() => deleteData(item._id)} className='col-4 col-sm-3 btn-6'>Delete</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Admin