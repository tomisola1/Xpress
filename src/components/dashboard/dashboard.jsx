import React from 'react'
import logo from '../../asset/LOGO.jpg'
import verifiers from '../../asset/Icon-Verifiers.png'
import deals from '../../asset/Deals.png'
import transaction from '../../asset/Icon-Transactions.png'
import alert from '../../asset/Alert.png'
import profile from '../../asset/Profile-Picture.png'
import caret from '../../asset/chevron-down.png'
import Input from '../input'
import Pill from '../pill'
import { users } from '../../data'

const Dashboard = () => {
  return (
    <div className="grid grid-cols-6">
        <div className="w-[16rem] px-8 py-12 flex flex-col gap-4 drop-shadow-md bg-white h-screen">
            <div className="flex items-center justify-center w-full">
               <img src={logo} alt="" className=" m-0"/> 
            </div>
            <div className="border-b-[1px] border-[#F5F6F8]"></div>
            <div className="flex flex-col gap-4">
                <div className="flex gap-3 bg-[#F2FAFF] rounded py-4 mt-4 border-l-4 border-l-[#039BF0] pl-4 text-[#039BF0] font-normal text-sm">
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
        <div className="col-span-5 ml-4">
            <div className="bg-white flex justify-between items-center px-8 py-4">
                <div className="flex gap-2 items-center justify-center">
                    <h3 className="font-bold text-[#1A1619] text-2xl">Verifiers</h3>
                    <span className="text-[#039BF0] text-xs bg-[#F2FAFF] rounded-full p-2">11</span>
                </div>
                <div className="flex gap-5 items-center">
                    <img src={alert} alt="" />
                    <div className="flex gap-1 items-center">
                        <img src={profile} alt="" />
                        <img src={caret} alt="" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col mx-6 gap-10">
                <div className="flex items-center justify-between mt-4">
                    <select name="" id="" className="w-[13rem] pt-[0.875rem] pb-[0.625rem] px-3">
                        <option value="">All</option>
                        <option value="">All</option>
                        <option value="">All</option>
                        <option value="">All</option>
                    </select>
                    <div className="flex gap-5">
                        <div className="flex items-center border-[1px] border-[#EEE] w-[15rem] bg-white pl-3"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.436 15.0849L20.376 19.0949C20.5525 19.2857 20.6478 19.5377 20.6417 19.7975C20.6356 20.0573 20.5286 20.3046 20.3433 20.4869C20.158 20.6691 19.9091 20.7721 19.6492 20.774C19.3893 20.7759 19.1389 20.6765 18.951 20.4969L15.013 16.4909C13.4935 17.6356 11.5959 18.16 9.70428 17.9581C7.81266 17.7562 6.06845 16.8431 4.82482 15.4035C3.58118 13.9639 2.93106 12.1056 3.00608 10.2047C3.08111 8.30382 3.87568 6.50248 5.22891 5.16542C6.58214 3.82836 8.3929 3.05549 10.2945 3.00331C12.1962 2.95114 14.0466 3.62355 15.4711 4.88439C16.8956 6.14524 17.7878 7.9003 17.9669 9.7942C18.1461 11.6881 17.5988 13.5793 16.436 15.0849ZM10.5 15.9999C11.9587 15.9999 13.3576 15.4204 14.3891 14.389C15.4205 13.3575 16 11.9586 16 10.4999C16 9.04122 15.4205 7.64227 14.3891 6.61082C13.3576 5.57937 11.9587 4.99991 10.5 4.99991C9.04131 4.99991 7.64236 5.57937 6.61091 6.61082C5.57946 7.64227 5 9.04122 5 10.4999C5 11.9586 5.57946 13.3575 6.61091 14.389C7.64236 15.4204 9.04131 15.9999 10.5 15.9999Z" fill="#808080"/>
                            </svg>
                            <Input type="search" className="border-none p-0 text-sm" placeholder="Name/Phone no/Location"/>
                        </div>
                        <button className="flex bg-[#039BF0] gap-2 rounded p-3 text-white text-sm items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 5V19M5 12H19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>Add New Verifier</span>   
                        </button>
                    </div>
                </div>
                <div>
                <table className="w-full table-fixed bg-white rounded shadow-md ">
                    <thead className="border-b-[1px] text-sm text-left">
                        <tr>
                        <th className="w-16 py-4 px-6">
                            <Input type="checkbox"/>
                        </th>
                        <th className="p-4">FirstName</th>
                        <th className="p-4">LastName</th>
                        <th className="p-4">Phone Number</th>
                        <th className="p-4">Partner</th>
                        <th className="p-4">Location</th>
                        <th className="p-4">Status</th>
                        <th className="p-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody className=" text-left text-sm">
                        {users.map((user, index) => (
                        <tr key={index} className="border-b-[1px]">
                            <td className="py-4 px-6"><Input type="checkbox"/></td>
                            <td className="p-4">{user.firstName}</td>
                            <td className="p-4">{user.lastName}</td>
                            <td className="p-4">{user.phoneNumber}</td>
                            <td className="p-4">{user.partner}</td>
                            <td className="p-4">{user.location}</td>
                            <td className="py-4 px-2"><Pill status={user.status}/></td>
                            <td className="p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" className="inline-block">
                                <path d="M5 10.5C3.9 10.5 3 11.4 3 12.5C3 13.6 3.9 14.5 5 14.5C6.1 14.5 7 13.6 7 12.5C7 11.4 6.1 10.5 5 10.5Z" stroke="#333333" stroke-width="1.5"/>
                                <path d="M19 10.5C17.9 10.5 17 11.4 17 12.5C17 13.6 17.9 14.5 19 14.5C20.1 14.5 21 13.6 21 12.5C21 11.4 20.1 10.5 19 10.5Z" stroke="#333333" stroke-width="1.5"/>
                                <path d="M12 10.5C10.9 10.5 10 11.4 10 12.5C10 13.6 10.9 14.5 12 14.5C13.1 14.5 14 13.6 14 12.5C14 11.4 13.1 10.5 12 10.5Z" stroke="#333333" stroke-width="1.5"/>
                            </svg>
                            </td>
                        </tr> 
                        ))}
                        
                    </tbody>
                </table>
                <div className="flex justify-between bg-white drop-shadow-md py-4 px-7">
                    <div className="flex gap-2">
                        <span className="text-[#808080] text-sm">Rows per page</span>
                        <select name="" id="" className="border-[1px] px-3">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        </select>
                    </div>
                    <div className="text-sm flex gap-3">
                        <span>Previous</span>
                        <span>1{" "} 2</span>
                        <span className="text-[#039BF0]">Next</span>
                    </div>
                </div>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default Dashboard