import { NewsLetterForm } from "../components";


const Newsletter = () => {
  return (
    <section className="py-[40px] lg:py-[88px] bg-newsletter bg-cover">
      <div className="container mx-auto">
        <div data-aos='fade-up' data-aos-offset='400'
         className="flex flex-col lg:flex-row items-center justify-between
        bg-blue p-12 rounded-lg lg:bg-newsletterBox lg:bg-no-repeat
        lg:h-[216px]">

          <div className="flex-1 w-full">
            <h3  className="h3 mb-4">
              Start mining now</h3>
            <p className="max-w-[348px] mb-8">
              Join now with CRAPPO to get the latest news and start mining now</p>
          </div>
          <NewsLetterForm />
        </div>
      </div>
    </section>
  )
};

export default Newsletter;
