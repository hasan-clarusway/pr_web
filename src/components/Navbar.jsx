import React from 'react';
import { NavLink } from 'react-router-dom';
import "../index.css";

const Navbar = () => {
  return (

    <header className='bg-[#220b35] text-[#80803c] pt-[30px] min-h-[70px] border-b-[#a9508b] border-b-4 border-solid'>
    
    <div className='m-auto overflow-hidden bg-transparent'>
      <div className='w-4/5 float-left p-1 bg-transparent'>
        <h1 className='m-0 bg-transparent text-[2.2rem] ml-20'>
          <span className="text-[#a9508b] text-[2.2rem] font-bold bg-transparent">Clarusway IT School</span> Web Design
        </h1>
        <nav className='float-right mt-2.5 bg-transparent'>
          <ul className=' p-0 m-0'>
            <li className='float-left inline px-5 bg-[#220b35]'>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "current" : null)}  >
                <p className='text-[#ffffff] hover:text-[#a9508b] text-3xl uppercase bg-transparent '>HOME</p>
              </NavLink>
            </li>
            <li className='float-left inline py-0 px-5 bg-[#220b35]'>
              <NavLink
                to="/About"
                className={({ isActive }) => (isActive ? "current" : null)}  >
                <p className='text-[#ffffff] text-3xl uppercase bg-transparent '>ABOUT</p>
              </NavLink>
            </li>
            <li className='float-left inline py-0 px-5 bg-[#220b35]'>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "current" : null)}  >
               <p className='text-[#ffffff] text-3xl uppercase bg-transparent '>SERVICES</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>

  </header>
  )
}

export default Navbar;