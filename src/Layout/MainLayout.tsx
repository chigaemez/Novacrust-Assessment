import Nav from '../Components/Nav'
import { Outlet, useLocation } from 'react-router-dom'

const MainLayout = () => {
  const location = useLocation()

  // Define the routes where Nav should be hidden
  const hideNavRoutes = ['/Address', '/Process', '/Recipient_Details','/Recipient_Email']

  const hideNav = hideNavRoutes.includes(location.pathname)

  return (
    <div className='flex items-center justify-center flex-col'>
      {!hideNav && <Nav />}
      <Outlet />
    </div>
  )
}

export default MainLayout
