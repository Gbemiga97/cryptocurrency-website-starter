import { IoLogoYoutube, IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin, IoLogoFacebook } from 'react-icons/io'
import { images } from '../assets';

const Footer = () => {
  return (
    <footer data-aos='fade-up' data-aos-offset='400'
     className='lg:pt-24 pt-0'>
      <div className="container mx-auto lg:mb-24">
        <div className='flex flex-col gap-12 lg:flex-row'>

          <div className='flex-1 mx-auto lg:mx-0 mb-6 max-w-[285px]'>
            <a href="#">
              <img src={images.Logo} alt="logo" />
            </a>
          </div>

          <div className='flex flex-1 flex-col gap-16 lg:flex-row'>
            <div className='text-center w-full lg:text-left'>
              <h4 className='text-xl font-medium mb-6'>
                Quick Links</h4>
              <ul className='space-y-4 text-gray'>
                <li>
                  <a 
                  className='hover:text-blue transition  '
                   href="#">Home</a>
                </li>
                <li>
                  <a 
                  className='hover:text-blue transition  '
                   href="#">Product</a>
                </li>
                <li>
                  <a 
                  className='hover:text-blue transition  '
                   href="#">About</a>
                </li>
                <li>
                  <a 
                  className='hover:text-blue transition  '
                   href="#">Features</a>
                </li>
                <li>
                  <a 
                  className='hover:text-blue transition  '
                   href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className='text-center w-full lg:text-left'>
              <h4 className='text-xl font-medium mb-6'>
              Resources</h4>
              <ul className='space-y-4 text-gray'>
                <li>
                  <a 
                  className='hover:text-blue transition  '
                   href="#">Download Whitepapper</a>
                </li>
                <li>
                  <a 
                  className='hover:text-blue transition  '
                   href="#">Smart Token</a>
                </li>
                <li>
                  <a 
                  className='hover:text-blue transition  '
                   href="#">Blockchain Explorer</a>
                </li>
                <li>
                  <a 
                  className='hover:text-blue transition  '
                   href="#">Crypto API</a>
                </li>
                <li>
                  <a 
                  className='hover:text-blue transition  '
                   href="#">Interest</a>
                </li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col flex-1'>
            <div className='lg:ml-[80px]'>
            <h3 className='h3 font-medium text-center mb-10 lg:text-left'>
              We accept following payment systems</h3>
              <div className='flex justify-center items-center gap-6'>
                <img src={images.Visa} alt="visa" />
                <img src={images.MasterCard} alt="MasterCard" />
                <img src={images.Bitcoin} alt="bitcoin" />
              </div>
              </div>
          </div>
           
        </div>
      </div>

      <div className='py-12'>
        <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row
        lg:justify-between lg:gap-y-0">
          <small>
            &copy; {new Date().getFullYear()} CRAPPO. All rights reserved.
          </small>
          <div className='flex text-2xl gap-x-8'>
            <a className='hover:text-blue transition' href="#">
              <IoLogoFacebook />
            </a>
            <a className='hover:text-blue transition' href="#">
              <IoLogoInstagram />
            </a>
            <a className='hover:text-blue transition' href="#">
              <IoLogoYoutube />
            </a>
            <a className='hover:text-blue transition' href="#">
              <IoLogoTwitter />
            </a>
            <a className='hover:text-blue transition' href="#">
              <IoLogoLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
