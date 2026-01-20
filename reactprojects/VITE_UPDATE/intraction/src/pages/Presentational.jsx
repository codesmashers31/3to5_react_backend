import React from 'react'

const Presentational = ({value,onAdd,onSub}) => {
  return (
    <div>
      {value}
      <button onClick={onAdd}>Incretement</button>
      <button onClick={onSub}>Decretement</button>
    </div>
  )
}

export default Presentational
