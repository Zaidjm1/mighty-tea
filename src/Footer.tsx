import insta from './assets/images/instagram.png'
import fb from './assets/images/fb.png'
import email from './assets/images/email.png'
import twitter from './assets/images/twitter.png'

function Footer() {

    return (
      <>
         <div className="h-[80px] w-full bg-blue-950 flex items-center justify-center gap-4">
            <p className='text-white font-pacifico mr-auto ml-[20%] cursor-default'>Mighty Tea</p>
            <img className='cursor-pointer' src={insta} />
            <img className='cursor-pointer' src={fb} />
            <img className='cursor-pointer' src={twitter} />
            <img className='cursor-pointer mr-[20%]' src={email} />
         </div>
         <div className='h-[80px] w-full bg-gray-800 flex items-center justify-center'>
            <p className='font-dm text-white text-[12px]'>© 2025 Mighty Tea</p>
         </div>
      </>
    )
  }
  
  export default Footer