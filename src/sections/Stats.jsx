import { HiChartBar, HiUser, HiGlobe  } from 'react-icons/hi'

const Stats = () => {
  return (
    <section className='pt-24' data-aos='fade-up' data-aos-delay='1200'>
      <div className="container mx-auto">
        <div className='flex flex-col md:flex-row gap-y-6 md:justify-between'>

          <div className='flex flex-col gap-y-3 lg:gap-y-0 lg:flex-row  items-center gap-x-6'>
            <div className='bg-white/10 w-20 h-20 rounded-full flex
            items-center justify-center text-blue text-2xl lg:text-4xl'>
              <HiChartBar />
            </div>
            <div className='flex flex-col items-center lg:items-start'>
              <h3 className='text-2xl font-bold lg:text-[40px]
              lg:mb-2'>$30B</h3>
              <p className='text-gray-400 '>Digital Currency Exchanged</p>
            </div>
          </div>

          <div className='flex flex-col gap-y-3 lg:gap-y-0 lg:flex-row  items-center gap-x-6'>
            <div className='bg-white/10 w-20 h-20 rounded-full flex
            items-center justify-center text-blue text-2xl lg:text-4xl'>
              <HiUser />
            </div>
            <div className='flex flex-col items-center lg:items-start'>
              <h3 className='text-2xl font-bold lg:text-[40px]
              lg:mb-2'>10M+</h3>
              <p className='text-gray-400 '>Trusted Wallets Investor</p>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row gap-y-3 lg:gap-y-0  items-center gap-x-6'>
            <div className='bg-white/10 w-20 h-20 rounded-full flex
            items-center justify-center text-blue text-2xl lg:text-4xl'>
              <HiGlobe />
            </div>
            <div className='flex flex-col items-center lg:items-start'>
              <h3 className='text-2xl font-bold lg:text-[40px]
              lg:mb-2'>195</h3>
              <p className='text-gray-400 '>Countries Supported</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
};

export default Stats;
