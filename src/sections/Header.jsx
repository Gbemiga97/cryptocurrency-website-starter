import { CgMenuRight } from 'react-icons/cg'
import { images } from '../assets';
import { AccountBtns, Nav } from '../components';
import { useState } from 'react';

const Header = ({setShowNav}) => {
  

  return (
    <header 
    data-aos='fade-down' data-aos-delay='900' data-aos-duration='2000'
    className="py-[1.8rem] lg:pt-[3.6rem]">
      <div className="container mx-auto flex justify-between items-center">

        <a href="#">
          <img src={images.Logo} alt="logo " />
        </a>

        <div className='hidden lg:flex gap-x-[3.4rem]'>
          <Nav />  
          <AccountBtns />
        </div>

        <button 
        onClick={() => setShowNav(true)}
        className='lg:hidden cursor-pointer'>
          <CgMenuRight className='text-2xl' />
        </button>

        

      </div>
    </header>
  )
};

export default Header;
