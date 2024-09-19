import React from 'react'
import connectdb from 'config/database'
import Property from 'models/Property'

const PropertyPage = async ({params}) => {

  await connectdb();
  const property = await Property.findById(params.id).lean()
  return (
    <div><section>
      {property.name}
      </section></div>
  )
}

export default PropertyPage