import React from 'react'

const Pill = ({status}) => {
  return (
    <>
        {
        status==="active" &&
            <div className="bg-[#27A7131A] py-2 px-5 rounded-lg w-max">
                <span className="text-[#27A713] capitalize">{status}</span>
            </div>
        }
        {
         status==="awaiting approval" &&
         <div className="bg-[#FF99001A] py-2 px-5 rounded-lg w-max">
             <span className="text-[#FF9900] capitalize">{status}</span>
         </div>   
        }
        {
         status==="deactivated" &&
         <div className="bg-[#FF00001A] py-2 px-5 rounded-lg w-max">
             <span className="text-[#FF0000] capitalize">{status}</span>
         </div> 
        }
    </>
  )
}

export default Pill