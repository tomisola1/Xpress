import React, { useContext, useState } from "react";
import Header from "../header";
import Input from "../input";
import cloud from "../../asset/simple-line-icons_cloud-download.jpg";
import attachment from "../../asset/Icon button.png";

const SignUp = () => {
  const [show, setShow] = useState(1);
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");

  // const handleClick = (e) => {
  //     e.preventDefault();
  //     setShow(2)
  //     console.log('click')
  // }
  const handleNameChange = (e) => {
    console.log(e.target.value);
    //    setBusName(e.target.value);
    //    console.log(busName)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <div className="pb-20">
      <Header buttonText={"Sign in"} />
      <div className="mx-auto w-[33rem] bg-white shadow-[0px 4px 10px 0px rgba(0, 0, 0, 0.06)] rounded-lg">
        <div className="flex flex-col py-11 px-10">
          <div className="border-b-[1px] pb-4 border-[#F5F6F8]">
            <h1 className="text-[#039BF0] font-medium text-2xl">
              Welcome to Xpress Rewards
            </h1>
            <span className="text-[#606060] font-normal text-xs">
              Complete the form below to get started
            </span>
          </div>
          <div>
            <form
              action=""
              className="flex flex-col gap-5"
              onClick={handleSubmit}
            >
              <p className="text-[#039BF0] font-medium text-sm mt-5">
                Business Information
              </p>

              {show === 1 && (
                <>
                  <Input
                    type="text"
                    label={"Business name"}
                    value={name}
                    name={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <Input
                    label={"Business Email Address"}
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    label={"Business Phone Number"}
                    type="phoneNumber"
                    onChange={handleNameChange}
                  />
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor=""
                      className="text-[#1A1619] font-medium text-sm"
                    >
                      Business Category
                    </label>
                    <select
                      name=""
                      id=""
                      className="border-[1px] rounded border-[#CCC] py-[0.9rem] pl-3 pr-6"
                    ></select>
                  </div>
                  <Input
                    label={"Account No"}
                    type="number"
                    onChange={handleNameChange}
                  />
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor=""
                      className="text-[#1A1619] font-medium text-sm"
                    >
                      Image(Logo)
                    </label>
                    <div className="border-dashed border-[1px] border-[#ABA7AF] py-8 px-12 flex flex-col items-center gap-5">
                      <img src={cloud} alt="" className="w-10" />
                      <span className="text-[#1A141F] font-normal text-xs">
                        Drag here or click the button below to upload{" "}
                      </span>
                      <input type="file" id="files" className="hidden" />
                      <label
                        htmlFor="files"
                        className="border-[1px] border-[#039BF0] bg-[#039BF0] py-1 px-3 text-white rounded"
                      >
                        <img src={attachment} alt="" className="inline mr-3" />
                        Choose file
                      </label>
                      <span className="text-[#4B3A5A] text-sm font-normal">
                        Maximum upload size: 10MB (.jpg)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center mt-10 gap-4">
                    <button
                      className="bg-[#039BF0] rounded shadow-[0px 2px 8px 0px rgba(0, 0, 0, 0.15)] py-4 px-20 text-white font-medium text-sm"
                      onClick={() => setShow(2)}
                    >
                      Next
                    </button>

                    <span className="text-[#808080] font-medium text-sm">
                      Step 1 of 2
                    </span>
                  </div>
                </>
              )}

              {show === 2 && (
                <>
                  <p className="text-[#039BF0] font-medium text-sm mt-5">
                    Business Address
                  </p>
                  <div className="flex gap-3">
                    <Input className="w-[8rem]" label={"House Number"} />
                    <Input className="w-[19rem]" label={"Street"} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Input label={"City"} />
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor=""
                        className="text-[#1A1619] font-medium text-sm"
                      >
                        Business Category
                      </label>
                      <select
                        name=""
                        id=""
                        className="border-[1px] rounded border-[#CCC] py-[0.9rem] pl-3 pr-6"
                      ></select>
                    </div>
                  </div>
                  <p className="text-[#039BF0] font-medium text-sm mt-5">
                    Contact Person Information
                  </p>
                  <Input label={"Contact name"} />
                  <Input label={"Contact Email Address"} type="email" />
                  <Input label={"Contact Phone Number"} type="phoneNumber" />
                  <p className="text-[#039BF0] font-medium text-sm mt-5">
                    Password
                  </p>
                  <Input label={"Password"} type="password" />
                  <Input label={"Confirm Password"} type="password" />

                  <div className="flex items-center mt-10 gap-4">
                    <button className="bg-[#039BF0] rounded shadow-[0px 2px 8px 0px rgba(0, 0, 0, 0.15)] py-4 px-20 text-white font-medium text-sm">
                      Submit
                    </button>
                    <span className="text-[#808080] font-medium text-sm">
                      Step 2 of 2
                    </span>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
