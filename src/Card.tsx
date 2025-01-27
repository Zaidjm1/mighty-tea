function Menu(props: any) {

    return (
      <>
        <div className='w-[120px] h-[200px] md:w-[12vw] mb-20 font-dm cursor-pointer'>
            <div className='w-full bg-gray-100 rounded mt-2'>
              <img src={props.img} className='' />
            </div>
            <p className='text-center mt-3'>{props.name}</p>
        </div>
      </>
    )
  }
  
  export default Menu