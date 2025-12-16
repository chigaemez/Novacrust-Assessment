import { useState } from 'react'
import { ArrowLeft, caution, Copy } from '../../assets/Icons'
import { Good } from '../../assets/Images'
import { Link, useNavigate } from 'react-router-dom'

const Address = () => {
  const textToCopy = '4LiV4YjbxsL6739MKghUd'
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(false)
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
    <div className='md:w-[512px] w-[100%] px-[10px] relative flex flex-col items-center justify-center  my-[50px]'>
      <Link to={'/'}>
        <img
          src={ArrowLeft}
          alt=''
          className='w-[24px] h-[24px] absolute left-[10px] top-[0px]'
        />
      </Link>

      <h1 className='text-[20px] text-center ml-[10px] font-[500] font-outfitmedium leading-[100%] text-[#013941]'>
        Send ETH to the address below
      </h1>

      <div
        onClick={handleCopy}
        className='w-[250px] h-[40px] mt-[97px] border-[1px] py-[8px] px-[16px] gap-[8px] bg-[#E6FBF2] border-[#CCF6E5] rounded-[30px]  flex items-center justify-center gap-[8px]'
      >
        <span className='text-[16px] font-outfitmedium font-[500] text-[#013941]'>
          {textToCopy}
        </span>
        <img
          src={copied ? Good : Copy}
          alt={copied ? 'Copied' : 'Copy'}
          className='w-[24px] h-[24px] transition-transform duration-200'
        />
      </div>
      <div className='flex flex-col md:w-[512px] w-[100%] h-[144px] mt-[50px] rounded-[10px] px-[24px] py-[16px] gap-[24px] bg-[#F7F7F7]  '>
        <div className='flex items-center justify-between w-full '>
          <h1 className='text-[14px] font-[400] font-outfitregular text-[#4F4F4F]'>
            Amount to send
          </h1>
          <span className='text-[16px] flex gap-[8px] font-[400] font-outfitregular text-[#013941]'>
            100 ETH{' '}
            <span>
              {' '}
              <img
                src={Copy}
                alt={'Copy'}
                className='w-[24px] h-[24px] transition-transform duration-200'
              />
            </span>
          </span>
        </div>
        <div className='flex items-center justify-between w-full '>
          <h1 className='text-[14px] font-[400] font-outfitregular text-[#4F4F4F]'>
            Network
          </h1>
          <span className='text-[16px] flex gap-[8px] font-[400] font-outfitregular text-[#013941]'>
            ETH{' '}
          </span>
        </div>
        <div className='flex items-center justify-between w-full '>
          <h1 className='text-[14px] font-[400] font-outfitregular text-[#4F4F4F]'>
            Wallet
          </h1>
          <span className='text-[16px] flex gap-[8px] font-[400] font-outfitregular text-[#013941]'>
            Other
          </span>
        </div>
      </div>

      <div className='flex gap-[8px] mt-[24px] md:w-[512px] w-[100%] items-center  '>
        <img src={caution} alt='' className='w-[19.5px] h-[19.5px]' />
        <span className='text-[14px] mt-[16px] font-[400] font-outfitregular text-[#828282]'>
          Only send {'{USDT}'} to this address. Ensure the sender is on the{' '}
          {'{CELO}'} network otherwise you might lose your deposit
        </span>
      </div>

      <button
        type='button'
        onClick={() => {
          setLoading(true)
          setTimeout(() => {
            setLoading(false)
            navigate('/Process')
          }, 2000)
        }}
        className='md:w-[512px] w-[100%] h-[60px] mt-[110px] cursor-pointer rounded-[30px] py-[20px] px-[40px] gap-[8px] flex items-center justify-center bg-[#013941] text-[16px] font-[700] font-outfitbold text-[#E6FBF2] leading-[100%]'
      >
        {loading ? (
          <div className='w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin'></div>
        ) : (
          'Convert now'
        )}
      </button>
    </div>
  )
}

export default Address
