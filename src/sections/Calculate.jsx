import { CalcForm } from "../components";


const Calculate = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 data-aos='fade-up' data-aos-offset='400' className="section-title">
            Check how much you can earn</h2>
          <p className="section-subtitle text-lg mb-16 max-w-[622px] mx-auto"
          data-aos='fade-up' data-aos-offset='450'
          >
            Let’s check your hash rate to see how much you will earn today.</p>
        </div>

        <CalcForm />

      </div>
    </section>
  )
};

export default Calculate;
