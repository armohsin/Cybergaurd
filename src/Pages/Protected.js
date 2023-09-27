import React from 'react'
import { Navigate } from 'react-router-dom'
import { useUserAuth } from '../Context/UserAuth'

function Protected({children}) {
  let {user} = useUserAuth()
  if(!user){
    return <Navigate to='/log-in' />
  }

  return children
}

export default Protected