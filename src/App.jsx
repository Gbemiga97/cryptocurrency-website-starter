import { Header, Hero } from "./sections";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const App = () => {

  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400
    });
  })


  return(
    <div className="overflow-hidden">
      <Hero />
      <Header />
    </div>
  )
};

export default App;
