import React, { useState } from 'react'
import signUpImg from '../assets/images/signup.png'
import avatar from '../assets/images/avatar-icon.png'
import {Link} from 'react-router-dom'

const SignUp = () => {
  
  const [selectedFile, setSelectedFile]= useState(null)
  const [previewURL, setPreviewURL]= useState('')
  
  const [formData, setFormData]= useState({
    name: '',
    email: '',
    password: '',
    photo: selectedFile,
    gender: '',
    role: 'patient'
  })

  const handleInputChange= e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleFileInputChange= async (event) => {
    const file= event.target.file[0]
    
    // later
  }

  const submitHandler= async event => {
    event.preventDefault()
  }

  return (
    <section className='px-5 xl:px-0'>
      <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {/* img */}
          <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
            <figure className='rounded-l-lg'>
              <img src={signUpImg} alt="" className='w-full rounded-l-lg' />
            </figure>
          </div>
          {/* End img */}

          {/* Form Signup */}
          <div className='rounded-l-lg lg:pl-16 py-10'>
            <h3 className='text-headingColor text-[22px] leading-9 mb-10 uppercase font-bold'>Đăng ký</h3>

            <form onSubmit={submitHandler}>
              <div className='mb-5'>
                <input 
                  type="text" 
                  placeholder='Nhập họ tên...' 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor'
                  required />
              </div>
              <div className='mb-5'>
                <input 
                  type="email" 
                  placeholder='Nhập email...' 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor'
                  required />
              </div>
              <div className='mb-5'>
                <input 
                  type="password" 
                  placeholder='Nhập mật khẩu...' 
                  name="password" 
                  value={formData.password}
                  onChange={handleInputChange}
                  className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor'
                  required />
              </div>

              <div className='mb-5 flex items-center justify-between'>
                <label htmlFor="" className='text-headingColor font-bold text-[16px] leading-7'>
                  Bạn là:
                  <select 
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange} 
                    className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                    <option value="patient">Bệnh nhân</option>
                    <option value="doctor">Bác sĩ</option>
                  </select>
                </label>

                <label htmlFor="" className='text-headingColor font-bold text-[16px] leading-7'>
                  Giới tính:
                  <select 
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange} 
                    className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                    <option value="patient">--Lựa chọn--</option>
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                    <option value="other">Khác</option>
                  </select>
                </label>
              </div>

              <div className='mb-5 flex items-center gap-3'>
                <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
                  <img src={avatar} alt="" className='w-full rounded-full' />
                </figure>

                <div className='relative w-[130px] h-[50px]'>
                  <input 
                    type="file" 
                    name="photo" id="customFile"
                    onChange={handleFileInputChange}
                    accept='.jpg, .png'
                    className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' />

                    <label 
                      htmlFor="customFile"
                      className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'>
                        Tải hình ảnh lên
                    </label>
                </div>
              </div>

              <div className='mt-7'>
                <button 
                  type='submit'
                  className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>
                    Đăng ký
                  </button>
              </div>

              <p className='mt-4 text-textColor text-center'>
                Bạn đã có tài khoản? <Link to='/signin' className='text-primaryColor underline'>Đăng nhập</Link>
              </p>
            </form>
          </div>
          {/* End Form Signup */}
        </div>
      </div>
    </section>
  )
}

export default SignUp