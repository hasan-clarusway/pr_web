import React from 'react'
import '../index.css';

const Subscribe = () => {
  return (
    <section className='p-[15px]  text-[#ffffff] bg-[#35424a]'>
        <div className=" h-[7rem] mt-3  overflow-hidden bg-[#35424a]">
            <h1 className='text-3xl relative mt-5 float-left ml-20 bg-transparent'>Subscribe to Our Newsletter</h1>
            <form className='float-right mt-5 mr-40 bg-[#35424a]'>
                <input type="email" placeholder='Enter Email...' className='p-2 h-10 w-[250px]' id='id' />
                <button type='submit' className="h-[38px] bg-red-500 hover:bg-red-700 border-0 px-5 text-[#ffffff]">
                    Subscribe
                </button>
            </form>
        </div>
    </section>
  )
}

export default Subscribe;