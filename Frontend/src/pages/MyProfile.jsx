import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const MyProfile = () => {
  const [userData, setuserData] = useState({
    name: "Edward Vincent",
    Image: assets.profile_pic,
    emial: "richardjames@gmail.com",
    phone: "+1 (123) 456-7890",
    address: {
      line1: "57th Cross, Richomd",
      line2: "Circle, Ring Road, London",
    },
    gender: "Male",
    dob: "2000-01-25",
  });

  const [isEdit, setisEdit] = useState(false);

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className='w-36 rounded' src={userData.Image} alt="" />
      {isEdit ? (
        <input
        className="bg-gray-100 text-3xl font-medium max-w-60 mt-4 px-3 py-2 focus:outline-none"
          value={userData.name}
          onChange={(e) =>
            setuserData((prev) => ({ ...prev, name: e.target.value }))
          }
          type="text"
          placeholder="Enter the Name"
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">{userData.name}</p>
      )}

      <hr className="bg-zinc-400 h-[1px] border-none"/>
      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email:</p>
          <p className="text-blue-500">{userData.emial}</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
            className="bg-gray-100 max-w-52 outline-none"
              value={userData.phone}
              onChange={(e) =>
                setuserData((prev) => ({ ...prev, phone: e.target.value }))
              }
              type="text"
              placeholder="Enter the Phone No:"
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}
          <p className="font-medium">Address:</p>
          {
            isEdit ?
            <p>
              <input className="bg-gray-50 outline-none" value={userData.address.line1} onChange={e => setuserData(prev => ({...prev, address: {...prev.address , line1: e.target.value}}))} type="text" />
              <input className="bg-gray-50 outline-none" value={userData.address.line2} onChange={e => setuserData(prev => ({...prev, address: {...prev.address , line2: e.target.value}}))} type="text" />
            </p>
            :
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          }
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
        <select className="max-w-20 bg-gray-100" onChange={(e)=> setuserData(prev => ({...prev, gender: e.target.value}))} value={userData.gender}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
      ) : (
        <p className="text-gray-400">{userData.gender}</p>
      )}
      <p className="font-medium">DOB:</p>
      {
        isEdit ? 
        <input className="max-w-28 bg-gray-100" value={userData.dob} onChange={e => setuserData(prev => ({...prev, dob: e.target.value}))} type="date"/>
        :
        <p className="text-gray-400">{userData.dob}</p>
      }
        </div>
      </div>

      <div className="mt-10">
        {
          isEdit 
          ? <button className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300" onClick={()=> setisEdit(false)}>Save Information</button>
          : <button className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300" onClick={()=> setisEdit(true)}>Edit</button>
        }
      </div>
    </div>
  );
};

export default MyProfile;
