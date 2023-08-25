import React from 'react'
import Header from '../header'
import Input from '../input'
import {Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className="pb-20">
        <Header buttonText={"Sign up"} />
        <div className="mx-auto w-[33rem] bg-white shadow-[0px 4px 10px 0px rgba(0, 0, 0, 0.06)] rounded-lg">
            <div className="flex flex-col py-11 px-10">
                <div className="border-b-[1px] pb-4 border-[#F5F6F8]">
                    <h1 className='text-[#039BF0] font-medium text-2xl'>Welcome Back!</h1>
                    <span className='text-[#606060] font-normal text-xs'>Sign in to your Xpress reward partner’s dashboard</span>
                </div>
                <div>
                    <form action="" className="flex flex-col gap-5">
                        
                        <p className="text-[#039BF0] font-medium text-sm mt-5">Password</p>
                        <Input label={"Email Address"} type='email'/>
                        <Input label={"Password"} type='password'/>
                        <p className="text-[#808080] font-medium text-sm">Forgot Password? <Link to={"#"} className='text-[#039BF0]'>Reset it</Link></p>

                    </form>
                    <div className="flex items-center mt-10">
                        <button className="bg-[#039BF0] rounded shadow-[0px 2px 8px 0px rgba(0, 0, 0, 0.15)] py-4 px-20 text-white font-medium text-sm w-full">Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn