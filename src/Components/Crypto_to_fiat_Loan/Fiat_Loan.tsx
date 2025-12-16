

const Fiat_Loan = () => {
  return (
    <div className='md:w-[512px] px-[10px] w-[100%] flex flex-col gap-[25px] items-center justify-center   my-[50px]'>
      <h1 className='text-[32px] font-[500] font-outfitmedium leading-[100%] text-[#013941]'>
        Coming Soon!
      </h1>
      <p className='text-[20px] font-[400] font-outfitregular leading-[150%] text-[#4F4F4F] text-center'>
        Cash to Crypto is almost here. Enter your email and we’ll let you know
        the moment it’s live.
      </p>

      <form className='w-[100%] flex flex-col gap-[16px]'>
        <div className='flex md:w-[512px] w-[100%] flex-col gap-[16px]'>
          <label htmlFor='' className='text-[16px] font-[500] font-outfitmedium leading-[100%] text-[#013941]'>Email</label>
          <input
            type='email'
            placeholder='Enter your email'
            className=' md:w-[512px] w-[100%] h-[60px] px-[24px] py-[16px] border border-[#BDBDBD] rounded-[30px] text-[16px] font-[400] font-outfitregular leading-[150%] text-[#333333] outline-none'
          />
        </div>

        <button
          type='submit'
          className='w-[100%] h-[48px] bg-[#013941] rounded-[30px] mt-[77px] cursor-pointer text-[16px] font-outfitbold font-[700] leading-[100%] text-[#E6FBF2]'
        >
          Update me
        </button>
      </form>
    </div>
  )
}

export default Fiat_Loan
