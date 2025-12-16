import { NavLink } from "react-router-dom"


const Nav = () => {
  return (
    <div className="md:w-[392px]  h-[34px] flex mt-[50px]   rounded-[30px] bg-[#F2F2F2]">
      <NavLink to="/" className={({isActive } : {isActive : boolean}) => `w-[123px] h-[34px] rounded-[30px] py-[8px] px-[16px] text-[14px] font-medium font-outfitmedium leading-[100%] ${isActive ? 'bg-[#013941] text-[#F8FEFB]' : 'bg-transparent text-[#828282]'}`} >
        Crypto to cash
      </NavLink>
      <NavLink to="/Cash_to_crypto" className={({isActive } : {isActive : boolean}) => `w-[123px] h-[34px] rounded-[30px] py-[8px] px-[16px] text-[14px] font-medium font-outfitmedium leading-[100%] ${isActive ? 'bg-[#013941] text-[#F8FEFB]' : 'bg-transparent text-[#828282]'}`} >
        Cash to crypto
      </NavLink>
      <NavLink to="/Crypto_to_fiat_loan" className={({isActive } : {isActive : boolean}) => `w-[146px] h-[34px] rounded-[30px] py-[8px] px-[16px] text-[14px] font-medium font-outfitmedium leading-[100%] ${isActive ? 'bg-[#013941] text-[#F8FEFB]' : 'bg-transparent text-[#828282]'}`} >
        Crypto to fiat loan
      </NavLink>
    </div>
  )
}

export default Nav
