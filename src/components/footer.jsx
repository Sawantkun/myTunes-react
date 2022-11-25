import React from 'react'

const footer = () => {
  return (
    <footer id="footer" className='flex flex-col items-center justify-center'>
      <div className='flex w-full justify-between px-[150px] py-[70px] bg-[#252529] text-white  flex-wrap'>
        <div className='flex flex-col p-[10px]'>
          <h3 className='text-[1.2rem]'>Shop & Learn</h3>
          <div className='bg-white h-[1px] w-[200px] opacity-10 my-[5px]'></div>
          <a href="#" className='text-[#999999] text-[0.9rem]'>Music</a>
          <a href="#" className='text-[#999999] text-[0.9rem]'>Movies</a>
          <a href="#" className='text-[#999999] text-[0.9rem]'>Shows</a>
          <a href="#" className='text-[#999999] text-[0.9rem]'>Apps</a>
          <a href="#" className='text-[#999999] text-[0.9rem]'>Gift Cards</a>
        </div>
        <div className='flex flex-col p-[10px]'>
          <h3 className='text-[1.2rem]'>Orange Store</h3>
          <div className='bg-white h-[1px] w-[200px] opacity-10 my-[5px]'></div>
          <a href="#" className='text-[#999999] text-[0.9rem]'>Find A Store</a>
          <a href="#" className='text-[#999999] text-[0.9rem]'>Today at Orange</a>
          <a href="#" className='text-[#999999] text-[0.9rem]'>Orange Cap</a>
          <a href="#" className='text-[#999999] text-[0.9rem]'>Financing</a>
          <a href="#" className='text-[#999999] text-[0.9rem]'>Order Status</a>
        </div>
        <div className='flex flex-col p-[10px]'>
          <h3 className='text-[1.2rem]'>Education& Business</h3>
          <div className='bg-white h-[1px] w-[200px] opacity-10 my-[5px]'></div>
          <a href="#" className='text-[#999999] text-[0.9rem]'>Orange & Education</a>
          <a href="#" className='text-[#999999] text-[0.9rem]'>Shop For College</a>
          <a href="#" className='text-[#999999] text-[0.9rem]'>Orange & Business</a>
          <a href="#" className='text-[#999999] text-[0.9rem]'>Shop For Business</a>
          <a href="#" className='text-[#999999] text-[0.9rem]'>Jobs</a>
        </div>
        <div className='flex flex-col p-[10px]'>
          <h3 className='text-[1.2rem]'>About Orange</h3>
          <div className='bg-white h-[1px] w-[200px] opacity-10 my-[5px]'></div>
          <a href="#" className='text-[#999999] text-[0.9rem]'>Newsroom</a>
          <a href="#" className='text-[#999999] text-[0.9rem]'>Orange Leadership</a>
          <a href="#" className='text-[#999999] text-[0.9rem]'>Investors</a>
          <a href="#" className='text-[#999999] text-[0.9rem]'>Events</a>
          <a href="#" className='text-[#999999] text-[0.9rem]'>Contact Orange</a>
        </div>
      </div>
      <div className='bg-[#333333] w-full text-center text-white p-[17px]'>
        <h3>Copyright © 2019 Orange myTunes</h3>
      </div>
    </footer>
  )
}

export default footer