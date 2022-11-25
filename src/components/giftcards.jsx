import React from 'react'
import Card from './assets/Images/cards.png'

const giftcards = () => {
  return (
    <section id='gift-cards' className='w-full flex h-[70vh] py-[50px] px-[80px] bg-[#F4F4F4]'>
      <img src={Card} alt="card" className='w-[50%] h-[full]'/>
      <div className=" w-[50%] px-[20px] flex flex-col justify-evenly h-[full] py-[50px]">
        <h2 className='text-[1.8rem] font-medium'>Gift Cards</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque expedita tempore quasi omnis a aut et totam illo fuga accusamus dolorum vero, ut harum consectetur. Minima molestias officiis culpa non sed dicta itaque. Et aliquam illo obcaecati molestias veritatis porro.</p>
        <p>Already have an Orange MyTunes Music Gift Card?</p>
        <div id='hr' className='bg-black w-full h-[1px] opacity-10'></div>
        <a href="#" className='text-blue-900	'><span className='font-extrabold'>{'>'}</span> Redeem Now</a>
      </div>
    </section>
  )
}

export default giftcards