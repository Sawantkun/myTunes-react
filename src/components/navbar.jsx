import React from 'react'
import Hamburger from './assets/svg/hamburger.svg'

const navbar = () => {
  const ham=()=>{
    const list = document.querySelector('#list');
    list.style.display="block";
  }
  const ham2=()=>{
    const list = document.querySelector('#list');
    setTimeout(() => {
      list.style.display="none";
    }, 1000);
  }
  return (
    <>
       <nav id="navbar" className='w-full bg-[#333333] h-[40px] fixed'>
        <p className='text-white text-left pl-[20px] pt-[5px] font-bold hidden'>myTunes</p>
        <ul id='list' className='flex text-white justify-between float-left'>
            <li><a href="#overview" className='w-[100px] bg-[#333333] pb-[8px] pt-[8px] text-center inline-block hover:bg-[#444444]'>myTunes</a></li>
            <li><a href="#overview" className='w-[100px] bg-[#333333] pb-[8px] pt-[8px] text-center inline-block hover:bg-[#444444]'>Overview</a></li>
            <li><a href="#music" className='w-[100px] bg-[#333333] pb-[8px] pt-[8px] text-center inline-block hover:bg-[#444444]'>Music</a></li>
            <li><a href="#video" className='w-[100px] bg-[#333333] pb-[8px] pt-[8px] text-center inline-block hover:bg-[#444444]'>Video</a></li>
            <li><a href="#gift-cards" className='w-[100px] bg-[#333333] pb-[8px] pt-[8px] text-center inline-block hover:bg-[#444444]'>Gift Cards</a></li>
        </ul>
        <img onMouseOver={ham} onMouseOut={ham2} className='cursor-pointer fixed top-[-18px] right-[10px] hidden' src={Hamburger} alt="" />
       </nav>
    </>
  )
}

export default navbar