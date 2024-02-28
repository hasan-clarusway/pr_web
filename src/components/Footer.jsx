import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css';


const Footer = () => {
  return (
    <div className=''>
        <footer className='p-5 mt-8 text-[#e8e8e8] bg-[#35424a] text-center'>
            <p className='bg-transparent text-[19px]'>Cl Web Design, Copyright &copy; 2024</p>
            <br />
            <Link to={{ pathname: 'http://www.clarusway.com'}} target='_blank'>
              <img  
                className='w-[200px] h-[30px] m-auto opacity-30 rounded-lg'
                src="https://clarusway.com/wp-content/uploads/2022/12/clarusway-logo-black.png"
                alt="" />
            </Link>
        </footer>
    </div>
  )
}

export default Footer