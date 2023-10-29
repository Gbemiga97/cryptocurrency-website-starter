import { navData } from "../data";


const Nav = () => {
  return (
    <nav className="flex items-center">
      <ul className="flex gap-x-8 ">
        {
          navData.map(({name,href}, i) => (
            <li 
            className="border-b-2 border-transparent hover:border-blue
            transition-all duration-300 "
            key={i}>
              <a href={href}>{name}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
};

export default Nav;
