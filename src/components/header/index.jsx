import React from 'react'
import logo from "../../asset/LOGO.jpg"

const Header = () => {
  return (
    <div className="flex justify-between w-full py-11 px-14">
        <div>
            <img src={logo} alt="logo" />
        </div>
        <div className="flex items-center gap-2">
            <span className="text-sm font-normal text-[#606060]">Already have an account?</span>
            <button className="border-2 border-solid border-[#039bf0] text-[#039BF0] py-2 px-4 rounded text-sm font-bold">Sign in</button>
        </div>
    </div>
  )
}

export default Header