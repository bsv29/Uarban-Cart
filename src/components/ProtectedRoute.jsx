import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext.jsx'

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(ShopContext)
  const location = useLocation()

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return children
}

export default ProtectedRoute
