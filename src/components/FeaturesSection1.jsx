import { images } from "../assets";


const FeaturesSection1 = () => {
  return (
    <section className="pb-[1.8rem] lg:pb-[120px] pt-0">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-y-10 lg:gap-y-0 ">

        <div 
        data-aos='fade-right' data-aos-offset='400'
        className="max-w-[454px] mb-6 lg:mt-10 flex flex-col items-center text-center
        lg:text-start lg:items-start">
          <h3 className="h3 mb-6">
            Invest Smart</h3>
          <p className="text-gray mb-8">
            Get full statistic information about the 
            behavior of buyers and sellers will help you 
            to make the decision. </p>
            <button className="btn px-8">
              Learn more</button>
        </div>

        <div className="flex-1 flex justify-end" data-aos='fade-left' data-aos-offset='400'>
          <img src={images.Feature1} alt="feature" />
        </div>
      </div>
    </section>
  )
};

export default FeaturesSection1;
