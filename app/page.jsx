import React from 'react'
import Link from 'next/link'
import Hero from 'components/hero'
import InfoBoxes from 'components/InfoBoxes'
import Footer from 'components/Footer'

const HomePage = () => {
  return (
    <>
        < Hero />
        < InfoBoxes />
        < Footer />
    </>
  )
}

export default HomePage