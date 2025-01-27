import { Outlet, Link } from "react-router-dom";

function Nav() {

    return (
      <>
      <div className='bg-cover bg-no-repeat bg-milktea selection:bg-blue-950'>
        <div className='font-lexa'>
          <p className="absolute ml-20 cursor-pointer mt-5 text-white font-pacifico text-[22px]">Mighty Tea</p>
          <nav className="flex justify-center gap-10 ml-[10vw] text-white float-right mr-20">
              <Link className="hover:text-blue-600 cursor-pointer mt-5" to="/about">About</Link>
              <Link className="hover:text-blue-600 cursor-pointer mt-5" to="/menu">Menu</Link>
          </nav>
        </div>
        <div className="h-[80vh] w-full flex items-center justify-center">
            <p className="text-[60px] text-white font-dm">It's more than just a tea.</p>
        </div>
      </div>
      <Outlet />
      </>
    )
  }
  
  export default Nav
  
