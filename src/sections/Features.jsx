import { FeaturesSection1, FeaturesSection2, FeaturesSection3 } from "../components";


const Features = () => {
  return(
    <section className="pt-12 lg:pt-24 bg-violet">
      <div className="container mx-auto">
        <div className="text-center max-w-[758px] mx-auto mb-24">
          <h2 className="section-title lg:text-[2.5rem]" data-aos='fade-up' data-aos-offset='400'>
            Market sentiments, portfolio and run the
             infrastructure of your choice
            </h2>
        </div>
        <div>
              <FeaturesSection1 />
              <FeaturesSection2 />
              <FeaturesSection3 />
            </div>
      </div>
    </section>
  )
};

export default Features;
