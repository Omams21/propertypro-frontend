import React from 'react'
import Footer from '../../components/Footer/Footer'
import Middlepage from '../../components/middlepage/Middlepage'
import Midsection from '../../components/Midsection/Midsection'
import Navbar from '../../components/navbar/Navbar'
import './homepage.css'

export default function Homepage() {
    return (
        <>
        <div className="background">
            <Navbar />
           <Middlepage/>
        </div>
        <Midsection/>
         <Footer />
       </>
    )
}
