import { Outlet, Link } from "react-router-dom";
import ts from "./assets/images/teashop.png";

function About() {

    return (
      <>
        <div className='bg-cover bg-no-repeat bg-shop selection:bg-blue-950'>
        <div className='font-lexa'>
          <Link className="absolute ml-20 cursor-pointer mt-5 text-white font-pacifico text-[14px] md:text-[22px]" to="/">Mighty Tea</Link>
          <nav className="flex justify-center gap-10 ml-[10vw] text-white float-right mr-20 text-[12px] md:text-[16px]">
              <Link className="hover:text-blue-600 cursor-pointer mt-5" to="/about">About</Link>
              <Link className="hover:text-blue-600 cursor-pointer mt-5" to="/menu">Menu</Link>
          </nav>
        </div>
        <div className="h-[80vh] w-full flex items-center justify-center">
            <p className="text-[60px] text-white text-center font-dm">Tea that transcends.</p>
        </div>
        </div>
        <Outlet />

        <div className="">
          <img className="m-auto mt-20 h-[400px] w-auto" src={ts} />
          <p className="text-center mb-10 mt-6 text-[30px] font-pacifico">The Beginning</p>
          <div className="text-justify mb-20 mx-10 md:mx-[400px] delay-[300ms] duration-[600ms] taos:translate-x-[100%] taos:opacity-0" data-taos-offset="400">
            <p className="mb-4">Lorem ipsum odor amet, consectetuer adipiscing elit. Libero amet nostra mollis sapien taciti lobortis. Eros vehicula lacus massa dis; tristique viverra. Quisque potenti luctus quam luctus arcu bibendum rutrum imperdiet. Primis nullam libero donec viverra; torquent ad. Gravida vestibulum nisl; rhoncus facilisi sit accumsan. Nulla eleifend condimentum maximus odio eleifend quam. Mattis pellentesque risus suscipit volutpat curabitur dapibus.</p>
            <p className="mb-4">Lorem ipsum odor amet, consectetuer adipiscing elit. Libero amet nostra mollis sapien taciti lobortis. Eros vehicula lacus massa dis; tristique viverra. Quisque potenti luctus quam luctus arcu bibendum rutrum imperdiet. Primis nullam libero donec viverra; torquent ad. Gravida vestibulum nisl; rhoncus facilisi sit accumsan. Nulla eleifend condimentum maximus odio eleifend quam. Mattis pellentesque risus suscipit volutpat curabitur dapibus.</p>
            <p className="mb-4">Lorem ipsum odor amet, consectetuer adipiscing elit. Libero amet nostra mollis sapien taciti lobortis. Eros vehicula lacus massa dis; tristique viverra. Quisque potenti luctus quam luctus arcu bibendum rutrum imperdiet. Primis nullam libero donec viverra; torquent ad. Gravida vestibulum nisl; rhoncus facilisi sit accumsan. Nulla eleifend condimentum maximus odio eleifend quam. Mattis pellentesque risus suscipit volutpat curabitur dapibus.</p>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Libero amet nostra mollis sapien taciti lobortis. Eros vehicula lacus massa dis; tristique viverra. Quisque potenti luctus quam luctus arcu bibendum rutrum imperdiet. Primis nullam libero donec viverra; torquent ad. Gravida vestibulum nisl; rhoncus facilisi sit accumsan. Nulla eleifend condimentum maximus odio eleifend quam. Mattis pellentesque risus suscipit volutpat curabitur dapibus.</p>
          </div>
        </div>
      </>
    )
  }
  
  export default About
  
