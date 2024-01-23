import  { useEffect, useRef } from 'react';
import Liventus from "../../assets/Image/Liventus.png"
import Buildpluse from "../../assets/Image/Buildpluse.svg"
import IBM from "../../assets/Image/IBM.svg"
const LogoSlider = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    const ul = logosRef.current;
    ul.insertAdjacentHTML('afterend', ul.outerHTML);
    ul.nextSibling.setAttribute('aria-hidden', 'true');
  }, []);   

  return (
    <div>
      <div className="w-full inline-flex gap-4 flex-nowrap overflow-hidden">
        <ul ref={logosRef }className="flex items-center justify-center md:justify-start space-x-8 max-w-none animate-infinite-scroll">
          <li>
            <img src={Liventus} alt="Facebook" className='w-32 ml-10  ' />
          </li>
         
        <li>
        <img src={Buildpluse} alt="Disney" className='w-32 ml-8'  />
        </li> 
        <li>
        <img src={IBM} alt="Disney" className='w-32 ml-8'  />
        </li> 
        
        </ul>   
      </div>
    </div>
  );
};

export default LogoSlider;
