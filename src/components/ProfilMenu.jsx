import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { BiPlusMedical } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loggeduser } from "../redux/action/loginmasukAction";

function ProfilMenu({style1, style2, style3}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function handleLogout(){
    localStorage.clear()
    dispatch(loggeduser())
    navigate('/')
  }

  return (
    <div className="col-sm-2 col-md-3 col-lg-4 bg-white pe-0">
        <div className='profil-left'>
            <div className='list-menu-phone'>
                <Link to={'/profil'}>
                <div className='my-4 profil-menu' style={{backgroundColor: style1}}>
                    <div className="row align-items-center justify-content-center">
                        <div className='col-lg-1 w-auto m-auto'><FaUser className='profil-icon' size={'100%'}/></div>
                        <div className='col loh'><span className='profil-menu-title'>Profil Saya</span></div>
                    </div>
                </div>
                </Link>
                <Link to={'/riwayat'}>
                <div className='my-4 border border-0 profil-menu' style={{backgroundColor: style2}}>
                    <div className="row align-items-center justify-content-center">
                        <div className='col-lg-1 w-auto m-auto'><BiPlusMedical className='profil-icon' size={'100%'}/></div>
                        <div className='col loh'><span className='profil-menu-title'>Riwayat Kesehatan</span></div>
                    </div>
                </div>
                </Link>
                <div className='my-4 profil-rule'>
                    <div>
                        <div className='bg-black bg-opacity-10 horizontal-rule'></div>
                    </div>
                </div>
                <div className='my-4 border border-0 profil-menu' onClick={handleLogout}>
                    <div className="row align-items-center justify-content-center">
                        <div className='col-lg-1 w-auto'><IoLogOut className='profil-icon' size={'100%'}/></div>
                        <div className='col loh'><span className='profil-menu-title'>Keluar</span></div>  
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfilMenu