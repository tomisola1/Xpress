import React from 'react'
import logo from "../../asset/LOGO.jpg"
import { Link } from "react-router-dom";

const Header = ({buttonText}) => {
  return (
    <div className="flex justify-between w-full py-11 px-14">
        <div>
            <img src={logo} alt="logo" />
        </div>
        <div className="flex items-center gap-2">
            {
                buttonText === 'Sign in' ? (
                    <>
                    <span className="text-sm font-normal text-[#606060]">Already have an account?</span>
                    <Link to="/signin">
                        <button className="border-[1px] border-solid border-[#039bf0] text-[#039BF0] py-2 px-4 rounded text-sm font-bold">
                            {buttonText}
                        </button>
                    </Link>
                    </>
                
                ):(
                    <>
                    <span className="text-sm font-normal text-[#606060]">New to Xpress Rewards?</span>
                    <Link to="/">
                        <button className="border-[1px] border-solid border-[#039bf0] text-[#039BF0] py-2 px-4 rounded text-sm font-bold">
                            {buttonText}
                        </button>
                    </Link>
                    </>
                    
                )
            }
            
            
        </div>
    </div>
  )
}

export default Header