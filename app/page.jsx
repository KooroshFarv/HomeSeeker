import React from 'react'
import Link from 'next/link'
import Hero from 'components/hero'
import InfoBoxes from 'components/InfoBoxes'
import Footer from 'components/Footer'
import HomeProperties from 'components/homeProperties'
import connectdb from 'config/database'

const HomePage = () => {
  connectdb();
  return (
    <>
        < Hero />
        < HomeProperties />
        < InfoBoxes />
        < Footer />
    </>
  )
}

export default HomePage