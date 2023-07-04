import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'

const index = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default index