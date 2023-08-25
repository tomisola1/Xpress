import React from 'react'
import pending from '../../asset/Icon-pending.png'

const Modal = () => {
  return (
    <div>
        <div className="mx-auto bg-white shadow-[0px 4px 10px 0px rgba(0, 0, 0, 0.06)] rounded-lg w-[28rem] flex flex-col py-11 px-10  items-center gap-5">
            <div className="bg-[#ff99001A] rounded p-4">
                <img src={pending} alt="" />
            </div>
            <span className="text-[#FF9900] text-2xl font-medium">Pending</span>
            <p className="text-[#1A1619] text-sm font-normal text-center">Your registration is awaiting approval from our partnership team</p>
            <button className="rounded bg-[#039BF0] w-full py-4 text-white font-medium">Done</button>
        </div>
    </div>
  )
}

export default Modal