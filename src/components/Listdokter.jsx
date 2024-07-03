import React, { useEffect, useState } from 'react'
import DocPhoto from '../assets/dalton-doctor.svg'
import { RiStethoscopeLine } from "react-icons/ri";
import { BiLike, BiBriefcaseAlt } from "react-icons/bi";
import axios from 'axios';
import { BsSearch } from "react-icons/bs";
import { useNavigate } from 'react-router-dom'

function Listdokter() {
  const url = `https://be-production-85d3.up.railway.app/dokter`
  const [dokter, setDokter] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [filter, setFilter] = useState([])
  const navigate = useNavigate()



  useEffect(() => {
    axios(url)
    .then((res) => {
        setDokter(res.data.data)
        setFilter(res.data.data)
    })
  }, [])
  
  function handleSearch(e){
    e.preventDefault()
    if (searchValue) {
        const filterData = dokter.filter((item) => {
            return item.nama.toLowerCase().includes(searchValue.toLowerCase())
        })
        setDokter(filterData)
    }
    else{
        setDokter(filter)
    }
  }

  console.log(dokter)

  function submitBook(id){
    navigate(`/dokter/${id}`)
  }

  return (
    <>
        <div className='row justify-content-center mt-5 w-auto'>
            <div className='col-10'>
                <div className='row w-auto'>
                    <div className='col g-0'>
                        <form className='row justify-content-center' onSubmit={(e) => handleSearch(e)}>
                            <button type='submit' className='col-9 col-md-1 order-2 order-md-1 btn-3'>Cari</button>
                            <div className='col-9 col-md-11 order-1 order-md-2'>
                                <div className='row search-input-wrapper w-auto'>
                                    <input type="text" name='search' placeholder='Cari Dokter' className='col-10 col-md-11 search-input' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                                    <div className='col-2 col-md-1 bg-white text-center align-self-center'>
                                        <BsSearch className='search-icon' size={'100%'}/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className='row justify-content-center mt-5'>
            <div className='col-10 g-0 text-center text-md-start'>
                <h1 className='listdoc-title'>Rekomendasi Dokter</h1>
                <h4 className='listdoc-sub-title'>Buat janji dengan dokter plihan</h4>
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
                                    <button onClick={() => submitBook(item._id)} type='submit' className='col-4 col-sm-3 btn-2'>Book</button>
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

export default Listdokter