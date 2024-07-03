import Nav from "../components/Nav"
import ProfilMenu from "../components/ProfilMenu"
import RiwayatSaya from "../components/RiwayatSaya"
import './Profilpage.css'
import Helmet from 'react-helmet'

function Riwayat() {
  return (
    <>
      <Helmet>
          <title>Riwayat Kesehatan - TeleDoc</title>
      </Helmet>
      <Nav beranda={'Beranda'} listdokter={'List Dokter'}/>
      <section className='profil'>
        <div className="row w-auto">
            <ProfilMenu style2={'#e0e3e7'} />
            <RiwayatSaya/>
        </div>
      </section>
    </>
  )
}

export default Riwayat