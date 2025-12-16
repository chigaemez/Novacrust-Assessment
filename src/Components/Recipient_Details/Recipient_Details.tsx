import React, { useEffect, useRef, useState } from 'react'
import { ArrowLeft, CaretDown } from '../../assets/Icons'
import { Link, useNavigate } from 'react-router-dom'
import { useContextstore } from '../../Context/Context'
import { banks } from '../../Stores/Datas'

const Recipient_Details = () => {
  const [errors, setErrors] = useState<{
    bank?: string
    accountNumber?: string
    accountName?: string
  }>({})

  const {
    selectedBank,
    setBankOpen,
    bankOpen,
    setSelectedBank,
    accountNumber,
    accountName,
    loadingAccountName,
    handleAccountNumberChange
  } = useContextstore()

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setBankOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setBankOpen])

  const validateForm = () => {
    const newErrors: typeof errors = {}

    if (!selectedBank) {
      newErrors.bank = 'Please select a bank'
    }

    if (!accountNumber) {
      newErrors.accountNumber = 'Account number is required'
    } else if (accountNumber.length !== 10) {
      newErrors.accountNumber = 'Account number must be 10 digits'
    }

    if (loadingAccountName) {
      newErrors.accountName = 'Please wait for account verification'
    } else if (!accountName) {
      newErrors.accountName = 'Account name could not be verified'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  return (
    <div className="w-screen min-h-screen ">
      <div
      ref={dropdownRef}
      className='w-full max-w-[512px] mx-auto relative flex flex-col items-center mt-[30px]'
    >
      <Link to={'/'}>
        <img
          src={ArrowLeft}
          alt=''
          className='w-[24px] h-[24px] absolute left-[10px] top-[0px]'
        />
      </Link>

      <h1 className='text-[20px] text-center ml-[10px] font-[500] font-outfitmedium leading-[100%] text-[#013941]'>
        Recipient details
      </h1>

      <form className="mt-[80px] flex flex-col gap-[32px] px-2.5 w-full">
        <div
          onClick={() => setBankOpen(prev => !prev)}
          className='flex flex-col md:w-[512px] w-[100%] h-[96px] gap-[16px] relative '
        >
          <label
            htmlFor=''
            className='text-[16px] font-[500] font-outfitmedium leading-[100%] text-[#013941] '
          >
            Bank
          </label>
          <div className='w-full h-[60px] rounded-[30px] border-[1px] flex justify-between p-[24px] outline-none border-[#E0E0E0] text-[16px] font-[400] font-outfitregular'>
            {' '}
            <div className='flex items-center gap-5 '>
              <span className='text-[14px] font-[500] text-[#013941]'>
                {selectedBank ?? 'Select a bank'}
              </span>
            </div>
          </div>
          <img
            src={CaretDown}
            alt=''
            className='w-[20px] h-[20px] absolute right-[21px] top-[53px]'
          />

          {bankOpen && (
            <div className='flex flex-col md:w-[464px] w-[80%]  h-[248px] absolute top-[75px] right-[12px] left-[25px] rounded-[20px] border-[1px] border-[#E0E0E0] bg-white shadow-lg z-10 px-[12px] py-[16px] gap-[8px] overflow-y-auto'>
              {banks.map(bank => (
                <div
                  key={bank}
                  onClick={() => {
                    setSelectedBank(bank)
                    setBankOpen(false)
                  }}
                  className='px-[20px] py-[12px] hover:bg-[#F5F5F5] cursor-pointer text-[14px] font-outfitregular'
                >
                  {bank}
                </div>
              ))}
            </div>
          )}
          {errors.bank && (
            <p className='text-red-500 text-[12px] mt-[-15px]'>{errors.bank}</p>
          )}
        </div>

        <div className='flex flex-col md:w-[512px] w-[100%] h-[96px] gap-[16px] relative '>
          <label
            htmlFor=''
            className='text-[16px] font-[500] font-outfitmedium leading-[100%] text-[#013941] '
          >
            Account number
          </label>
          <input
            placeholder='Enter your account number'
            type='text'
            inputMode='numeric'
            value={accountNumber}
            onChange={handleAccountNumberChange}
            className='w-full h-[60px] rounded-[30px] border-[1px] flex justify-between p-[24px] outline-none border-[#E0E0E0] text-[16px] font-[400] font-outfitregular'
          />
          {errors.accountNumber && (
            <p className='text-red-500 text-[12px] mt-[-15px] '>
              {errors.accountNumber}
            </p>
          )}
        </div>

        <div className='flex flex-col md:w-[512px] w-[100%] h-[96px] gap-[16px] relative '>
          <label
            htmlFor=''
            className='text-[16px] font-[500] font-outfitmedium leading-[100%] text-[#013941] '
          >
            Account name
          </label>
          <input
            type='text'
            readOnly
            value={
              loadingAccountName ? 'Fetching account name...' : accountName
            }
            className='w-full h-[60px] rounded-[30px] border-[1px] flex justify-between bg-[#F2F2F2] p-[24px] outline-none border-[#E0E0E0] text-[16px] font-[400] font-outfitregular'
          />
          {loadingAccountName && (
            <div className='absolute right-[24px] top-[50px]'>
              <div className='w-5 h-5 border-2 border-[#013941] border-t-transparent rounded-full animate-spin' />
            </div>
          )}

          {errors.accountName && (
            <p className='text-red-500 text-[12px] mt-[-15px]'>
              {errors.accountName}
            </p>
          )}
        </div>

        <button
          type='button'
          onClick={() => {
            if (!validateForm()) return

            setLoading(true)

            setTimeout(() => {
              setLoading(false)
              navigate('/Recipient_Email')
            }, 2000)
          }}
          className='md:w-[512px] w-[100%] h-[60px] mt-[110px] rounded-[30px] flex items-center font-outfitbold justify-center bg-[#013941] text-[#E6FBF2]'
        >
          {loading ? (
            <div className='w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin' />
          ) : (
            'Next'
          )}
        </button>
      </form>
    </div>
    </div>
  )
}

export default Recipient_Details;