import { Calculate, Features, Header, Hero, Stats, Trade, Why } from "./sections";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect, useState } from "react";
import { NavMobile } from "./components";




const App = () => {
  const [showNav, setShowNav] = useState(false)


  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400
    });
  })


  return(
    <div className="overflow-hidden">
      <Header setShowNav={setShowNav} />
      <Hero />

      <div className={`${showNav ? 'right-0' : '-right-full'}
      fixed z-10 top-0 h-full transition-all  duration-200`}>
          <NavMobile setShowNav={setShowNav} />
        </div>
        <Stats />
        <Why />
        <Calculate />
        <Trade />
        <Features />
    </div>
  )
};

export default App;
