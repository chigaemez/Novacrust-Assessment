import  { useState } from 'react'
import { BlackTrans, CheckCircle, Good } from '../../assets/Images'
import { Copy } from '../../assets/Icons'
import { useNavigate } from 'react-router-dom'

const Process = () => {
  const textToCopy = 'NC123456789'
  const [copied, setCopied] = useState(false)
  const navigate = useNavigate()
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }
  return (
    <div className='md:w-[512px] w-[100%]   flex flex-col items-center justify-center  my-[50px]'>
      <div className=''>
        <img src={BlackTrans} alt='' className='w-[177px] h-[24px] ' />
      </div>

      <img src={CheckCircle} alt='' className='w-[80px] h-[80px] mt-[112px]' />

      <div className='mt-[32px] text-center'>
        <h1 className='font-outfitmedium font-medium text-[24px] leading-[100%] text-[#000E10]'>
          Your transaction is processing.
        </h1>
        <p className='font-outfitregular font-normal text-[20px] leading-[150%] text-[#4F4F4F] mt-[8px]'>
          The recipient will receive it shortly.
        </p>
      </div>

      <div className='flex md:w-[512px] w-[100%] h-[56px] bg-[#F7F7F7] rounded-[10px] mt-[64px] items-center justify-between py-[16px] px-[24px] gap-[24px] '>
        <h1 className='text-[14px] font-[400] font-outfitregular text-[#4F4F4F]'>
          Transaction ID
        </h1>
        <div
          onClick={handleCopy}
          className='w-[130px] h-[24px]   gap-[8px]    flex items-center justify-center'
        >
          <span className='text-[16px] font-outfitregular font-[400] text-[#013941]'>
            {textToCopy}
          </span>
          <img
            src={copied ? Good : Copy}
            alt={copied ? 'Copied' : 'Copy'}
            className='w-[24px] h-[24px] transition-transform duration-200'
          />
        </div>
      </div>

    <button onClick={() => navigate('/')} className='md:w-[512px] W-[100%] h-[60px] mt-[40px] rounded-[30px] gap-[8px] py-[20px] px-[40px] text-[16px] font-outfitbold font-[700] text-[#013941] cursor-pointer '>Go back to home</button>
    </div>
  )
}

export default Process
