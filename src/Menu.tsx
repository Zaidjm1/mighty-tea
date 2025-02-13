import arrowRight from './assets/images/right.png'
import arrowLeft from './assets/images/left.png'
import cnc from './assets/images/cnc.png'
import ube from './assets/images/ube.png'
import taro from './assets/images/taro.png'
import matcha from './assets/images/matcha.png'
import mango from './assets/images/mango.png'
import orange from './assets/images/orange.png'
import bg from './assets/images/bg.png'
import choco from './assets/images/choco.png'
import americano from './assets/images/americano.png'
import cappuccino from './assets/images/cappuccino.png'
import tiramisu from './assets/images/tiramisu.jpg'
import Card from './Card'
import {useEffect, useState} from 'react'
import { Outlet, Link } from "react-router-dom";

function Menu() {

  const slides = [
    {
      url: cnc
    },
    {
      url: ube
    },
    {
      url: choco
    },
    {
      url: tiramisu
    },
    {
      url: bg
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const slideInterval = setInterval(() => {
       nextSlide()
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

    return (
      <>
      <div className='bg-cover bg-no-repeat bg-teabg selection:bg-blue-950'>
        <div className='font-lexa'>
        <Link className="absolute ml-20 cursor-pointer mt-5 text-white font-pacifico text-[14px] md:text-[22px]" to="/">Mighty Tea</Link>
        <nav className="flex justify-center gap-10 ml-[10vw] text-white float-right mr-20 text-[12px] md:text-[16px]">
              <Link className="hover:text-blue-600 cursor-pointer mt-5" to="/about">About</Link>
              <Link className="hover:text-blue-600 cursor-pointer mt-5" to="/menu">Menu</Link>
          </nav>
          <Outlet/>
        </div>
        <div className="h-[80vh] w-full flex items-center justify-center">
            <p className="text-[60px] text-white font-dm text-center">Made from the finest tea.</p>
        </div>
      </div>
      <div className='h-20 flex items-center justify-center'>
        <p className='text-[24px] font-lexa pb-2 border-b border-gray-400'>OUR BEST SELLERS</p>
      </div>
      <div className='max-w-[1400px] h-full relative group w-[60%] m-auto'>
        <div className='flex justify-center gap-10 border-t border-b'>
          <div className='h-[40vh] w-[400px] font-dm'>
              <div className='w-full h-[300px] rounded mt-2 bg-center bg-contain bg-no-repeat duration-500' style={{backgroundImage:`url(${slides[currentIndex].url})`}}>
              </div>
          </div>
        </div>
        <div className='hidden group-hover:block w-10 h-10 absolute top-[30%] -translate-x-0 translate-y-[50%] left-5 rounded-full p-2 bg-black/20 cursor-pointer' onClick={prevSlide}>
          <img src={arrowLeft} />
        </div>
        <div className='hidden group-hover:block w-10 h-10 absolute top-[30%] -translate-x-0 translate-y-[50%] right-5 rounded-full p-2 bg-black/20 cursor-pointer' onClick={nextSlide}>
          <img src={arrowRight} />
        </div>
      </div>
      {/* -------------- MILKTEA ------------- */}

        <div>
          <p className='text-center p-6 bg-blue-900 text-white font-pacifico text-[20px]'>Shake Mighty Tea</p>
          <div className='flex justify-center mt-10 mb-10 gap-20 '>
          </div>
            <div className='flex justify-center gap-20 delay-[300ms] duration-[600ms] taos:translate-x-[100%] taos:opacity-0" data-taos-offset="400"'>
              <Card
              img={taro}
              name="Mighty Tea Purple (Taro)" />
              <Card
              img={ube}
              name="Mighty Tea Maga (Ube)" />
              <Card
              img={cnc}
              name="Mighty Tea Special (Cookies and Cream)" />
              <Card
              img={matcha}
              name="Mighty Tea Green (Matcha)" />
            </div>
            <div className='flex justify-center gap-20 delay-[300ms] duration-[600ms] taos:translate-x-[100%] taos:opacity-0" data-taos-offset="400"'>
              <Card
              img={orange}
              name="Mighty Tea Orange" />
              <Card
              img={bg}
              name="Mighty Tea Blue (Bubble Gum)" />
              <Card
              img={mango}
              name="Mighty Tea Yellow (Mango)" />
            </div>
        </div>

        {/* -------------- COFFEE ------------- */}

        <div>
          <p className='text-center p-6 bg-blue-900 text-white font-pacifico text-[20px]'>Coffee</p>
          <div className='flex justify-center mt-10 mb-10 gap-20 '>
          </div>
            <div className='flex justify-center gap-20 delay-[300ms] duration-[600ms] taos:translate-x-[100%] taos:opacity-0" data-taos-offset="400"'>
              <Card
              img={cappuccino}
              name="Mighty Tea Brown (Choco)" />
              <Card
              img={americano}
              name="Mighty Tea Hard (Americano)" />
              <Card
              img={choco}
              name="Mighty Tea Batik (Cappuccino)" />
            </div>
        </div>

        {/* -------------- DESSERT ------------- */}

        <div>
          <p className='text-center p-6 bg-blue-900 text-white font-pacifico text-[20px]'>Dessert</p>
          <div className='flex justify-center mt-10 mb-10 gap-20 '>
          </div>
            <div className='flex justify-center gap-20 delay-[300ms] duration-[600ms] taos:translate-x-[100%] taos:opacity-0" data-taos-offset="400"'>
              <Card
              img={tiramisu}
              name="Mighty Tea Tira-miss-u (Tiramisu)" />
            </div>
        </div>
        
      </>
    )
  }
  
  export default Menu