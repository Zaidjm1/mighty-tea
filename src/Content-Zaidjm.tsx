import matcha from './assets/images/matcha.png'
import tiramisu from './assets/images/tiramisu.jpg'
import arrow from './assets/images/right.png'
import { Outlet, Link } from "react-router-dom";


function Content() {

    return (
      <>
      <div className='bg-cover bg-no-repeat bg-milktea selection:bg-blue-950'>
        <div className='font-lexa'>
          <Link className="absolute ml-20 cursor-pointer mt-5 text-white font-pacifico text-[14px] md:text-[22px]" to="/">Mighty Tea</Link>
          <nav className="flex justify-center gap-10 ml-[10vw] text-white float-right mr-20 text-[12px] md:text-[16px]">
              <Link className="hover:text-blue-600 cursor-pointer mt-5" to="/about">About</Link>
              <Link className="hover:text-blue-600 cursor-pointer mt-5" to="/menu">Menu</Link>
          </nav>
        </div>
        <div className="h-[80vh] w-full flex items-center justify-center">
            <p className="text-[60px] text-white font-dm text-center">It's more than just a tea.</p>
        </div>
      </div>
      <Outlet />
         <div className="group w-[80%] h-[80vh] flex m-auto gap-10">
            <div className="h-[100vh] w-[100%] md:h-[60vh] md:w-[30%] bg-white ml-auto mt-auto mb-auto flex items-center justify-center">
                <img src={matcha} className='h-auto w-auto mt-20 delay-[300ms] duration-[600ms] taos:translate-y-[100%] taos:opacity-0" data-taos-offset="300' />
            </div>
            <div className="h-[100vh] w-[100%] md:h-[60vh] md:w-[30%] bg-white mr-auto mt-auto mb-auto flex items-center justify-center">
                <img src={tiramisu} className='h-auto w-auto delay-[300ms] duration-[600ms] taos:translate-y-[100%] taos:opacity-0" data-taos-offset="300' />
            </div>
        </div>
        <div className="font-dm h-[100px] w-full flex items-center justify-center">
            <p className="text-[40px] text-center">Have you ever tried Mighty Tea?</p>
        </div>
        <h1 className='flex items-center justify-center my-10 border rounded-lg w-[200px] h-8 m-auto bg-blue-800 text-white hover:bg-blue-500 cursor-pointer font-dm'>Order now <img src={arrow}/></h1>
      </>
    )
  }
  
  export default Content
  