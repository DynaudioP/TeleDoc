import Nav from '../components/Nav'
import ProfilMenu from '../components/ProfilMenu'
import ProfilSaya from '../components/ProfilSaya'
import './Profilpage.css'
import Helmet from 'react-helmet'

function Profilpage() {
  return (
    <>
      <Helmet>
          <title>Profil - TeleDoc</title>
      </Helmet>
      <Nav beranda={'Beranda'} listdokter={'List Dokter'}/>
      <section className='profil'>
        <div className="row w-auto">
            <ProfilMenu style1={'#e0e3e7'} />
            <ProfilSaya/>
        </div>
      </section>
    </>
  )
}

export default Profilpage