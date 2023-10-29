import { IoIosArrowForward } from 'react-icons/io'
import { currency } from '../data';
import { useState } from 'react';

const Trade = () => {
  const [itemName, setItemName] = useState('Bitcoin')

  return (
    <section className='section lg:pt-[320px] bg-gradient-to-b from-[#f8f9fb] top-[#fafbff]
    text-darkblue lg:-mt-[320px]'>
      <div className="container mx-auto">
        <h2 
        data-aos='fade-up' data-aos-offset='400'
        className='section-title text-center mb-16'>
          Trade securely and market the high growth cryptocurrencies</h2>

        <div 
         data-aos='fade-up' data-aos-offset='450'
        className='flex flex-col  gap-[45px] lg:flex-row'>
          {
            currency.map(({image, name, abbr, description}, i) => (
              <article 
              onClick={() => setItemName(name)}
              className={`${name === itemName ? 'bg-violet text-white' : 'bg-white' } w-full rounded-2xl py-12 px-6 shadow-primary 
              cursor-pointer transition duration-300`}
              key={i}>
                 <div className='flex flex-col justify-center items-center'>

                  <img src={image} alt={name} 
                  className='mb-12'
                  />

                  <div className='mb-4 flex items-center  gap-x-2'>
                    <p className='text-[2rem] font-bold'>
                      {name}</p>
                    <p className='text-lg mt-2 text-gray-400 font-medium'>
                      {abbr}</p>
                  </div>

                  <p className='mb-6 text-center'>
                    {description}</p>
                  <button 
                  className={`${name === itemName ? 'text-white bg-blue hover:bg-blue-hover border-none pl-8 pr-8 gap-x-3'
                  : 'text-blue w-16'}
                  border-2 border-gray-300 rounded-full
                  h-16 flex justify-center items-center`}>
                    {
                      name === itemName && 
                      (<p className='text-lg'>
                        Start mining</p>)
                    }
                    <IoIosArrowForward className={`${name === itemName ? 'text-2xl' : 'text-3xl'}`} />
                    </button>
                 </div>
              </article>
            ))
          }
        </div>
      </div>
    </section>
  )
};

export default Trade;
