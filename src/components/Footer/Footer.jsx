import React from 'react'

import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { RiLinkedinFill } from "react-icons/ri"
import { AiFillYoutube, AiFillFacebook, AiFillInstagram } from "react-icons/ai";

const socialLinks = [
  {
    path: 'https://www.youtube.com/',
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5' />
  },
  {
    path: 'https://www.facebook.com/',
    icon: <AiFillFacebook className='group-hover:text-white w-4 h-5' />
  },
  {
    path: 'https://www.instagram.com/',
    icon: <AiFillInstagram className='group-hover:text-white w-4 h-5' />
  },
]

const quickLinks01 = [
  {
    path: '/home',
    display: 'Trang chủ'
  },
  {
    path: '/',
    display: 'Về chúng tôi'
  },
  {
    path: '/service',
    display: 'Dịch vụ'
  },
  {
    path: '/',
    display: 'Blog'
  },
]

const quickLinks02 = [
  {
    path: '/find-a-doctor',
    display: 'Tìm bác sĩ'
  },
  {
    path: '/',
    display: 'Đặt lịch khám'
  },
  {
    path: '/',
    display: 'Tìm địa điểm'
  },
  {
    path: '/',
    display: 'Lấy ý kiến'
  },
]

const quickLinks03 = [
  {
    path: '/contact',
    display: 'Liên hệ'
  }
]

const Footer = () => {
  const year= new Date().getFullYear()

  return (
    <footer className='pb-16 pt-10'>
      <div className="container">
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <img src={logo} alt="" />
            <p className='text-[16px] leading-7 font-[400] text-textColor'>
              Copyright © {year} by Võ Xuân Thành
            </p>

            <div className='flex items-center gap-3 mt-4'>
              {socialLinks.map((link, index) => (
                <Link to={link.path} key={index}>
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Về chúng tôi
            </h2>

            <ul>
              {quickLinks01.map((item, index) => 
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                    {item.display}
                  </Link>
                </li>)}
            </ul>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Tôi muốn:
            </h2>

            <ul>
              {quickLinks02.map((item, index) => 
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                    {item.display}
                  </Link>
                </li>)}
            </ul>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Hỗ trợ
            </h2>

            <ul>
              {quickLinks03.map((item, index) => 
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                    {item.display}
                  </Link>
                </li>)}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer