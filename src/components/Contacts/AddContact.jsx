import React from "react";
import { useDispatch, useSelector } from "react-redux";

const AddContact = () => {
  


  return (
    <div className="bg-white rounded-md shadow-lg px-6 py-2 w-1/3 text-gray-600    ">
      <div>
        <div className="text-center">
          <h1 className="text-3xl font-semibold py-4 mb-3">Add New Contact</h1>
        </div>
        <div>
          <form onSubmit={e => e.preventDefault()} className="flex flex-col space-y-5 pb-5">
            <lable  className='text-sm font-medium mb-1'>Fullname:</lable>
            <input
              type={"text"}
              placeholder="full name "
              required
              className="rounded-lg border-gray-300 shadow-sm"
            />
            <lable className='text-sm font-medium mb-1'>Email:</lable>
            <input
              type={"email"}
              placeholder="email "
              required
              className="rounded-lg border-gray-300 shadow-sm"
            />
            <lable className='text-sm font-medium mb-1'>Phone:</lable>
            <input
              type={"tel"}
              placeholder="phone "
              required
              className="rounded-lg border-gray-300 shadow-sm"
            />
            <button className="bg-cyan-500 py-2 rounded-lg text-white text-lg">
                Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
