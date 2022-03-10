import React, { useState } from "react";

const AddContact = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "saman keighobadi",
      email: "saman.keighobadi@gmail.com",
      phone: "0191283",
    },
    {
      id: 1,
      name: "soheil keighobadi",
      email: "soheil.keighobadi@gmail.com",
      phone: "0190000",
    },
  ]);

  return (
    <div className="bg-white rounded-md shadow-lg px-6 py-2 w-1/3 text-gray-600    ">
        <div  >
            <div className="text-center">
                <h1 className="text-2xl font-semibold py-4 mb-3">
                    Add New Contact
                </h1>
            </div>
            <div>
                <form className="flex flex-col space-y-5">
                    <lable>
                        Fullname:
                    </lable>
                    <input type={'text'} placeholder='full name ' required />
                    <lable>
                        email:
                    </lable>
                    <input type={'email'} placeholder='email ' required />
                    <lable>
                        Phone:
                    </lable>
                    <input type={'tel'} placeholder='phone ' required />
                    
                </form>
            </div>
        </div>
    </div>
  );
};

export default AddContact;
