function Banner() {
  return (
    <>
      <div className='flex flex-col md:flex-row lg:flex-row justify-between font-mono items-center py-5 px-10 font-bold'>
        <div className='text-center px-2'>
          <h2 className='text-[7vh] font-mono'>Vedant's Blog.</h2>
          <p className='text-center text-[15px] font-bold'>
            Welcome to the{" "}
            <span className='bg-yellow-200 px-1'>most loved</span> tech blog of
            all times.
          </p>
        </div>
        <p className='text-gray-400 text-[12px] lg:w-[30vw] md:w-[30vw] p-5 text-center'>
          Hottest news of the tech space | Coding tips | Stuff you don't wanna
          miss.
        </p>
      </div>
    </>
  );
}

export default Banner;
