import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const SignIn = () => {
  const [formData, setFormData]= useState({
    email: '',
    password: ''
  })

  const handleInputChange= e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  return (
    <section className='px-5 lg:px-0'>
      <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
        <h3 className='text-headingColor text-[22px] leading-6 font-bold mb-3 text-center'>
          Chào mừng đến với <span className='text-primaryColor'>Medicare</span>
        </h3>

        <h2 className='text-xl uppercase text-center font-bold'>Đăng nhập</h2>

        <form className='py-4 md:py-0'>
          <div className='mb-3'>
            <input 
              type="email" 
              placeholder='Nhập email...' 
              name="email" 
              value={formData.email} 
              onChange={handleInputChange}
              className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor'
              required />
          </div>

          <div className='mb-3'>
            <input 
              type="password" 
              placeholder='Nhập mật khẩu...' 
              name="password" 
              value={formData.password} 
              onChange={handleInputChange}
              className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor'
              required />
          </div>

          <div className='mt-7'>
            <button 
              type='submit'
              className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>
                Đăng nhập
              </button>
          </div>

          <p className='mt-4 text-textColor text-center'>
            Bạn chưa có tài khoản? <Link to='/signup' className='text-primaryColor underline'>Đăng ký ngay</Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default SignIn