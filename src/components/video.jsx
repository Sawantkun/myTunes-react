import React from 'react'
import Tablet2 from './assets/Images/mockup1.png'
import Button from './button'

const video = () => {
  return (
    <section id='video' className='text-white p-[100px] text-center bg-[#F4F4F4] flex flex-col justify-between items-center h-[180vh]'>
        <h2 className='text-black text-[2rem] font-semibold'>The movie and TV collection you always wished for. Granted.</h2>
        <p className='text-black text-[1.2rem] font-normal'>With over 100,000 movies and TV shows to choose from, there’s always something great to watch on myTunes and if you watch on Orange TV 4K, you’ll be able to enjoy a tremendous selection of your favorite content in 4K HDR. So get ready to enjoy episodes of your favorite TV shows or hit movies you’ve been waiting to see — anytime, anywhere. Just tap to play, or even download if you’re going somewhere you won’t have Wi-Fi.</p>
        <Button buttonColor={'rgb(16, 48, 99)'}>Read More</Button>
        <img src={Tablet2} alt="tablet2" />
    </section>
  )
}

export default video