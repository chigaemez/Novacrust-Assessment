import { useEffect, useRef, useState } from 'react'
import type { Youpay } from '../../Stores/Type'
import { payfrom, youpay } from '../../Stores/Datas'
import { CaretDown } from '../../assets/Icons'
import { NGN } from '../../assets/Images'
import { useContextstore } from '../../Context/Context'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const {
    selected,
    setSelected,
    open,
    setOpen,
    search,
    setSearch,
    payfromOpen,
    setPayfromOpen,
    selectedPayfrom,
    setSelectedPayfrom
  } = useContextstore()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const filteredData = youpay.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
        setPayfromOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setOpen, setPayfromOpen])

  return (
    <div className='md:w-[512px] w-[100%] px-[10px]   my-[50px] ' ref={dropdownRef}>
      <form action='' className='flex flex-col gap-[24px] '>
        <div
          
          className='flex flex-col relative gap-[8px] md:w-[512px] w-[100%] h-[112px] rounded-[30px] border-[1px] border-[#E0E0E0] bg-white p-[24px] gap-[8px] '
        >
          <label
            htmlFor=''
            className='text-[16px] font-outfitmedium leading-[100%] font-[500] text-[#828282]'
          >
            You pay
          </label>
          <input
            type='number'
            className='md:w-[464px] w-[100%] h-[36px] rounded-[30px] outline-none text-[24px] font-[600] font-outfitsemibold   leading-[100%] text-[#000E10]'
            placeholder='1.00'
          />
          <div
            onClick={() => setOpen(prev => !prev)}
            className='flex  h-[36px] absolute cursor-pointer top-[48px] right-[21px] border-[1px] border-[#E0E0E0] rounded-[20px] gap-[4px] px-[12px] py-[8px] bg-[#F7F7F7]'
          >
            <img
              src={selected.image}
              alt={selected.name}
              className='w-[20px] h-[20px] rounded-full'
            />
            <span className='text-[14px] font-outfitmedium font-[500] text-[#013941]'>
              {selected.name}
            </span>
            <img src={CaretDown} alt='' className='w-[20px] h-[20px]' />
            {open && (
              <ul
                onClick={e => e.stopPropagation()}
                className='mt-2 rounded-[20px] border-[1px] border-[#E0E0E0] py-[16px] px-[12px] flex flex-col gap-[8px] shadow bg-white w-[264px]   absolute top-[25px] right-0 z-10'
              >
                <input
                  type='text'
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder='Search...'
                  className='w-[240px] h-[44px]  px-[16px] py-[12px] text-[14px] font-outfitregular font-[400]  border-[1px] border-[#E0E0E0]  rounded-[20px]  focus:outline-none '
                />
                {filteredData.map(item => (
                  <li
                    key={item.name}
                    onClick={() => setSelected(item)}
                    className='flex w-[240px] h-[48px] rounded-[12px]  items-center gap-2 p-[12px] gap-[8px] hover:bg-[#F5F5F5]  cursor-pointer'
                  >
                    <img src={item.image} alt={item.name} className='w-5 h-5' />
                    <span className='text-[14px] font-outfitmedium font-[500] text-[#013941]'>
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className='flex flex-col relative gap-[8px] md:w-[512px] w-[100%] h-[112px] rounded-[30px] border-[1px] border-[#E0E0E0] bg-white p-[24px] gap-[8px] '>
          <label
            htmlFor=''
            className='text-[16px] font-outfitmedium leading-[100%] font-[500] text-[#828282]'
          >
            You receive
          </label>
          <input
            type='number'
            className='md:w-[464px] w-[100%] h-[36px] rounded-[30px] outline-none text-[24px] font-[600] font-outfitsemibold   leading-[100%] text-[#000E10]'
            placeholder='1.00'
          />
          <div className='flex  h-[36px] absolute cursor-pointer top-[48px] right-[21px] border-[1px] border-[#E0E0E0] rounded-[20px] gap-[4px] px-[12px] py-[8px] bg-[#F7F7F7]'>
            <img
              src={NGN}
              alt={selected.name}
              className='w-[20px] h-[20px] rounded-full'
            />
            <span className='text-[14px] font-outfitmedium font-[500] text-[#013941]'>
              NGN
            </span>
            <img src={CaretDown} alt='' className='w-[20px] h-[20px]' />
          </div>
        </div>

        <div
          className='flex flex-col md:w-[512px] w-[100%] h-[96px] gap-[16px] relative '
        >
          <label
            htmlFor=''
            className='text-[16px] font-[500] font-outfitmedium leading-[100%] text-[#013941] '
          >
            Pay from
          </label>
          <div
            onClick={() => setPayfromOpen(prev => !prev)}
            className='w-full h-[60px] rounded-[30px] border-[1px] flex justify-between p-[24px] outline-none border-[#E0E0E0] text-[16px] font-[400] font-outfitregular'
          >
            {' '}
            <div className='flex items-center gap-5 '>
              <img
                src={selectedPayfrom.image}
                alt={selectedPayfrom.name}
                className='w-[20px] h-[20px] rounded-full'
              />
              <span className='text-[14px] font-outfitmedium font-[500] text-[#013941]'>
                {selectedPayfrom.name}
              </span>
            </div>
          </div>
          <img
            src={CaretDown}
            alt=''
            className='w-[20px] h-[20px] absolute right-[21px] top-[53px]'
          />
          {payfromOpen && (
            <div className='flex flex-col md:w-[464px] w-[80%]  h-[248px] absolute top-[75px] right-[12px] left-[25px] rounded-[20px] border-[1px] border-[#E0E0E0] bg-white shadow-lg z-10 px-[12px] py-[16px] gap-[8px] '>
              {payfrom.map((item: Youpay) => (
                <div
                  key={item.name}
                  onClick={() => setSelectedPayfrom(item)}
                  className='flex w-[440px] h-[48px] rounded-[12px]  items-center gap-2 p-[12px] gap-[8px] hover:bg-[#F5F5F5]  cursor-pointer'
                >
                  <img src={item.image} alt={item.name} className='w-5 h-5' />
                  <span className='text-[14px] font-outfitmedium font-[500] text-[#013941]'>
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className='flex flex-col md:w-[512px] w-[100%] h-[96px] gap-[16px] relative '>
          <label
            htmlFor=''
            className='text-[16px] font-[500] font-outfitmedium leading-[100%] text-[#013941] '
          >
            Pay from
          </label>
          <div className='w-full h-[60px] rounded-[30px] border-[1px] flex justify-between p-[24px] outline-none border-[#E0E0E0] text-[16px] font-[400] font-outfitregular'>
            {' '}
            <div className='flex items-center gap-5 '>
              <img
                src={selectedPayfrom.image}
                alt={selectedPayfrom.name}
                className='w-[20px] h-[20px] rounded-full'
              />
              <span className='text-[14px] font-outfitmedium font-[500] text-[#013941]'>
                {selectedPayfrom.name}
              </span>
            </div>
          </div>
          <img
            src={CaretDown}
            alt=''
            className='w-[20px] h-[20px] absolute right-[21px] top-[53px]'
          />
        </div>

        <button
          type='button'
          onClick={() => {
            setLoading(true)
            setTimeout(() => {
              setLoading(false)
              navigate('/Recipient_Details')
            }, 2000)
          }}
          className='md:w-[512px] w-[100%] h-[60px] rounded-[30px] py-[20px] px-[40px] gap-[8px] flex items-center justify-center bg-[#013941] text-[16px] font-[700] font-outfitbold text-[#E6FBF2] leading-[100%]'
        >
          {loading ? (
            <div className='w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin'></div>
          ) : (
            'Convert now'
          )}
        </button>
      </form>
    </div>
  )
}

export default Home
