import React from 'react'
import '@/assets/styles/globals.css'

export const metadata = {
  tittle : 'propertyPulse | find the suitable rental',
  description : 'Find your dream Property',
  keyword : 'rental, find property, rental, house, condo, apartment, flat '
}

const MainLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
          <div>{children}</div>
        </body>
    </html>
  )
}

export default MainLayout