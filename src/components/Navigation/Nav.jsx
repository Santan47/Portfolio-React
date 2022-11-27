import React from 'react'
import './nav.css'
import '../../index.css'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {AiOutlineHome} from 'react-icons/ai'
import {BiBook,BiMessageSquareDetail} from 'react-icons/bi'
import {ImBlog} from 'react-icons/im'
import {useState} from 'react'

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#Home')
  return (
    <nav>
      <a href="#Home" onClick={()=> setActiveNav('#Home')} className={activeNav === '#Home' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#Education" onClick={()=> setActiveNav('#Education')} className={activeNav === '#Education' ? 'active' : ''}><BiBook/></a>
      <a href="#Projects" onClick={()=> setActiveNav('#Projects')} className={activeNav === '#Projects' ? 'active' : ''}><AiOutlineFundProjectionScreen/></a>
      {/* <a href="#Blogs" onClick={()=> setActiveNav('#Blogs')} className={activeNav === '#Blogs' ? 'active' : ''}><ImBlog/></a>
      <a href="#Contacts" onClick={()=> setActiveNav('#Contacts')} className={activeNav === '#Contacts' ? 'active' : ''}><BiMessageSquareDetail/></a> */}
    </nav>
  )
}

export default Nav