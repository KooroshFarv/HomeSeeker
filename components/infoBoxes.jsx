import React from 'react'
import InfoBox from './InfoBox'

const InfoBoxes = () => {
  return (
    <section>
    <div className="container-xl lg:container m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
      
      <InfoBox 
      heading=' For Renters'
      backgroundColor='bg-gray-100'
      children='Kian Kuniye'
      buttonInfo={{
        text : ' Browse Properties',
        link : '/properties',
        backgroundColor: 'bg-black'
      }}>
        </InfoBox>
        <InfoBox 
      heading=' For Owners'
      backgroundColor='bg-blue-100'
      children='kourosh osture'
      buttonInfo={{
        text : ' Add Properties',
        link : '/properties/add',
        backgroundColor: 'bg-blue-500'
      }}>
        </InfoBox>
      </div>
    </div>
  </section>
  )
}

export default InfoBoxes