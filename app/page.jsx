import React from 'react'
import Link from 'next/link'
import Hero from 'components/hero'
import InfoBoxes from 'components/InfoBoxes'
import Footer from 'components/Footer'
import HomeProperties from 'components/homeProperties'

const HomePage = () => {
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