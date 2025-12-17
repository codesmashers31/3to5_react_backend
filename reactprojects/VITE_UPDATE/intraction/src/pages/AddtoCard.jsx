import React from 'react'

const AddtoCard = ({value_1,onAdd_1}) => {
  return (
    <div>
      {value_1}

      <button onClick={onAdd_1}>Add to Cart</button>
    </div>
  )
}

export default AddtoCard
