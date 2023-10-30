import { images } from "../assets";


const FeaturesSection3 = () => {
  return (
    <section className="py-[1.8rem] lg:py-[120px]">
    <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-y-10 lg:gap-y-0 ">

      <div 
      data-aos='fade-right' data-aos-offset='400'
      className="max-w-[454px] mb-6 lg:mt-10 flex flex-col items-center text-center
      lg:text-start lg:items-start">
        <h3 className="h3 mb-6">
        Grow your profit and track your investments</h3>
        <p className="text-gray mb-8">
        Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments. </p>
          <button className="btn px-8">
            Learn more</button>
      </div>

      <div className="flex-1 flex  justify-end" data-aos='fade-left' data-aos-offset='440'>
        <img src={images.Feature3} alt="feature" />
      </div>
    </div>
  </section>
  )
};

export default FeaturesSection3;
