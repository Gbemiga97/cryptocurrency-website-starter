import { CgClose  } from 'react-icons/cg'
import { navData } from '../data';

const NavMobile = ({setShowNav}) => {
  return (
    <nav className="lg:hidden bg-violet h-full top-0 bottom-0
    w-80 flex justify-center items-center">

      <button
      onClick={() => setShowNav(false)}
      className='absolute top-2 left-2 cursor-pointer'>
        <CgClose className='text-3xl' />
      </button>

      <ul className='text-xl flex flex-col gap-y-8'>
        {
          navData.map(({name, href}, i) => (
            <li
            
            key={i}>
              <a href={href}>{name}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
};

export default NavMobile;
