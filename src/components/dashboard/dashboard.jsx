import React from 'react'
import logo from '../../asset/LOGO.jpg'
import verifiers from '../../asset/Icon-Verifiers.png'
import deals from '../../asset/Deals.png'
import transaction from '../../asset/Icon-Transactions.png'

const Dashboard = () => {
  return (
    <div>
        <div className="w-[16rem] px-8 py-12 flex flex-col gap-12 shadow-[0px 4px 10px 0px rgba(0, 0, 0, 0.06)] bg-white h-screen">
            <img src={logo} alt="" className="border-b-[1px] pb-4 border-[#F5F6F8]"/>
            <div className="flex flex-col gap-4">
                <div className="flex gap-3 bg-[#F2FAFF] rounded py-4 border-l-4 border-l-[#039BF0] pl-4 text-[#039BF0] font-normal text-sm">
                    <img src={verifiers} alt="" />
                    <p>Verifiers</p> 
                </div>
                <div className="flex gap-3 rounded py-4 font-normal text-sm pl-4">
                    <img src={deals} alt="" />
                    <p>Deals</p> 
                </div>
                <div className="flex gap-3 rounded py-4 font-normal text-sm pl-4">
                    <img src={transaction} alt="" />
                    <p>Transactions</p> 
                </div>
            </div>
            
            
        </div>
        <div>

        </div>
    </div>
  )
}

export default Dashboard