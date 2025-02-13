

const CalcForm = () => {
  return (
    <div className="w-full bg-white max-w-[942px] mx-auto rounded-2xl text-darkblue p-12
    shadow-primary" 
    data-aos='fade-up' data-aos-offset='500'>

      <form className="flex flex-col lg:flex-row lg:justify-between lg:items-center
      space-y-12 lg:space-y-0" >
        <input
        className=" input placeholder:text-darkblue  "
        type="text" placeholder="Enter your hash rate" />
        <select className="select">
          <option value="">TH/s</option>
          <option value="">H/s</option>
          <option value="">KH/s</option>
          <option value="">MH/s</option>
          <option value="">GH/s</option>
        </select>

        <button className="btn text-white px-8 self-start">Calculate</button>
      </form>

      <div className="mt-24">
        <p className="text-blue font-medium mb-4">
          ESTIMATED 24 HOUR REVENUE:</p>
        <h4 className="text-[2rem] font-bold mb-3">
          0.055 130 59 ETH <span className="text-blue">($1275)</span></h4>
        <p className="text-gray-500 tracking-[1%] ">
          Revenue will change based on mining difficulty and Ethereum price.</p>
      </div>
    </div>
  )
};

export default CalcForm;
