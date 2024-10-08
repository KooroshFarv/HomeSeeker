import React from 'react'
import '../assets/styles/globals.css'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

export const metadata = {
  tittle : 'propertyPulse | find the suitable rental',
  description : 'Find your dream Property',
  keyword : 'rental, find property, rental, house, condo, apartment, flat '
}

const MainLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
          < Navbar />
          <main>{children}</main>
        
        </body>
    </html>
  )
}

export default MainLayout