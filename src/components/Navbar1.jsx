import React from 'react'
import { Link,useLocation } from 'react-router-dom'


const Navbar1 = () => {
    const location=useLocation();
  return (
    <div>
        <div className="flex justify-around py-4 text-gray-700 bg-gray-100">
          <Link to="/Diproses" className={`${location.pathname==='/Diproses'?'font-semibold border-b-2 border-black':'grey'}`}><span>Diproses</span></Link>
          <Link to="/Bayar" className={`${location.pathname==='/Bayar'?'font-semibold border-b-2 border-black':'grey'}`}><span>Bayar</span> </Link>
          <Link to="/Riwayat" className={`${location.pathname==='/Riwayat'?'font-semibold border-b-2 border-black':'grey'}`}><span>Riwayat</span></Link>
        </div>
    </div>
    
  )
}

export default Navbar1