import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { images } from '../assets';
  


const Hero = () => {
  return (
    <section>
       <div className="container mx-auto">
        <div className='flex flex-col items-center lg:flex-row'>
          <div className='flex-1'>

          
          <div
          data-aos='fade-down' data-aos-delay='400'
          className='bg-white/10 p-1 mb-6 rounded-full pl-1 
          pr-3 max-w-[365px]'>
            <div className='flex items-center justify-between text-sm
            lg:text-base'>
              <div className='bg-white text-darkblue rounded-full font-medium
              py-1 px-4 '>75% SAVE</div>
              <div>For The Black Friday Weekend</div>
              </div>
            </div>
            <h1 
            data-aos='fade-down' data-aos-delay='500'
            className='text-[2rem] lg:text-[4rem] font-bold leading-tight mb-6' >
              Fastest & secure platform to invest in crypto</h1>
            <p 
            data-aos='fade-down' data-aos-delay='600'
            className='max-w-[440px] leading-relaxed mb-8 '> 
              Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</p>
              <button
              data-aos='fade-down' data-aos-delay='700'
              className='btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base'> 
                Try for free
                <IoIosArrowDroprightCircle
                className='text-2xl lg:text-3xl'
                />
                </button>
          </div>

          <div className='flex-1' >
            <img src={images.HeroImg} alt="hero"
            data-aos='fade-up' data-aos-delay='600'
             />
          </div>
        </div>
       </div>
    </section>
  )
};

export default Hero;
