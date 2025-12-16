import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, CaretDown } from '../../assets/Icons'
import { NGN } from '../../assets/Images'

const Recipient_Email = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  return (
    <div className='w-screen min-h-screen  '>
      <div className='w-full max-w-[512px] mx-auto relative flex flex-col items-center my-[50px]'>
        <Link to={'/Recipient_Details'}>
          <img
            src={ArrowLeft}
            alt=''
            className='w-[24px] h-[24px] absolute left-[10px] top-[0px]'
          />
        </Link>

        <h1 className='text-[20px] text-center ml-[10px] font-[500] font-outfitmedium leading-[100%] text-[#013941]'>
          Recipient details
        </h1>

        <form action='' className='mt-[80px] flex flex-col gap-[32px]'>
          <div className='flex flex-col md:w-[512px] w-[100%] h-[96px] gap-[16px] relative '>
            <label
              htmlFor=''
              className='text-[16px] font-[500] font-outfitmedium leading-[100%] text-[#013941] '
            >
              Recipient email
            </label>
            <input
              placeholder='Enter recipient email'
              type='email'
              inputMode='numeric'
              className='w-full h-[60px] rounded-[30px] border-[1px] flex justify-between p-[24px] outline-none border-[#E0E0E0] text-[16px] font-[400] font-outfitregular'
            />
          </div>
          <div className='flex flex-col md:w-[512px] w-[100%] h-[96px] gap-[16px] relative '>
            <label
              htmlFor=''
              className='text-[16px] font-[500] font-outfitmedium leading-[100%] text-[#013941] '
            >
              Recipient phone number
            </label>
            <div className='flex items-center'>
              <div className='flex w-[137px] gap-[8px] items-center justify-between h-[60px] rounded-l-[30px] border-[1px] flex  px-[24px] py-[16px]  outline-none border-[#E0E0E0] text-[16px] font-[400] font-outfitregular bg-[#FCFCFC]'>
                <span className='text-[16px] font-[400] font-outfitregular text-[#013941] flex items-center gap-[4px]'>
                  +234
                  <img
                    src={NGN}
                    alt=''
                    className='w-[20px]  h-[20px] rounded-full'
                  />
                </span>
                <img
                  src={CaretDown}
                  alt=''
                  className='w-[20px] h-[20px] ml-[20px]'
                />
              </div>
              <input
                placeholder='000 - 000 - 00000'
                type='email'
                inputMode='numeric'
                className='w-full h-[60px] rounded-r-[30px] border-[1px] flex justify-between p-[24px] outline-none border-[#E0E0E0] text-[16px] font-[400] font-outfitregular'
              />
            </div>
          </div>

          <button
            type='button'
            onClick={() => {
              setLoading(true)
              setTimeout(() => {
                setLoading(false)
                navigate('/Address')
              }, 2000)
            }}
            className='md:w-[512px] w-[100%] h-[60px] mt-[110px] cursor-pointer rounded-[30px] py-[20px] px-[40px] gap-[8px] flex items-center justify-center bg-[#013941] text-[16px] font-[700] font-outfitbold text-[#E6FBF2] leading-[100%]'
          >
            {loading ? (
              <div className='w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin'></div>
            ) : (
              'Next'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Recipient_Email
