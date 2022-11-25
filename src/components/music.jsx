import React from 'react'
import Button from './button'
import Tablet from './assets/Images/mockup2.png'

const music = () => {
  return (
    <section id='music' className='bg-[#252529] text-white p-[100px] h-[220vh] flex flex-col items-center justify-between'>
        <h1 className='text-[4rem] font-semibold'>Music</h1>
        <h2 className='text-[2rem] font-semibold text-center'>45 million songs. Zero ads.</h2>
        <p className='text-[1.2rem] font-normal text-center'>Stream over 45 million songs, ad-free. Or download albums and tracks to listen to offline. All the music in your personal myTunes library — no matter where it came from — lives right alongside the Orange Music catalog. Start your free three-month trial with no commitment, and cancel anytime.</p>
        <Button buttonColor={'rgb(185, 4, 21)'}>Start Your Free Trial</Button>
        <p className='text-center'>Orange Music is available in myTunes, and for iOS and Android devices.</p>
        <img src={Tablet} alt="tablet" />
    </section>
  )
}

export default music