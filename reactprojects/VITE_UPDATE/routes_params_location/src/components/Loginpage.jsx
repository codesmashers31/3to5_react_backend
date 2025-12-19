import React from 'react'

const Loginpage = ({values_data,update_function}) => {
  return (
    <div>
        <h1>Login</h1>
      <h1>{values_data.name_new}</h1>

      <button onClick={update_function}>Click new</button>
    </div>
  )
}

export default Loginpage
