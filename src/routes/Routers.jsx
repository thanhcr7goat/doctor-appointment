
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Service from '../pages/Service'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Doctor from '../pages/Doctor/Doctor'
import DoctorDetail from '../pages/Doctor/DoctorDetail'

import { Routes, Route } from 'react-router'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/service' element={<Service />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/doctor' element={<Doctor />} />
      <Route path='/doctor/:id' element={<DoctorDetail />} />
    </Routes>
  )
}

export default Routers
