import { images } from "../assets";


const FeaturesSection2 = () => {
  return (
    <section className="py-[1.8rem] lg:py-[120px]">
      <div className="container mx-auto">
        <div className="flex flex-col justify-end items-center lg:flex-row">
        <div data-aos='fade-right' data-aos-offset='400' 
        className="flex-1 lg:absolute lg:left-0 order-2 lg:order-1">
          <img src={images.Feature2} alt="feature" />
        </div>

        <div 
        data-aos='fade-left' data-aos-offset='400'
        className="flex-1 max-w-[456px] flex flex-col items-center text-center
        lg:text-start lg:items-start">
          <h3 className="h3 mb-6">Detailed Statistics</h3>
          <p className="text-gray mb-8">
            View all mining related information in realtime, 
            at any point at any location 
            and decide which polls you want to mine in.
            </p>
            <button className="btn px-8 mb-6 lg:0">
              Learn more</button>
        </div>

        </div>
      </div>
    </section>
  )
};

export default FeaturesSection2;
