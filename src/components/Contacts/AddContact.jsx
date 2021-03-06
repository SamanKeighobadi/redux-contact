import React, { useState } from "react";
// import redux and redux actions
import { useDispatch, useSelector } from "react-redux";
import { addNewContact } from "../../redux/actions/contacts";
// React Toastify
import { toast } from "react-toastify";
// React Router DOM
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const navigate = useNavigate();

  // init states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  //use reudx
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSumbit = (e) => {
    e.preventDefault();

    // check if email or phone number already exist 
    const duplicateEmail = contacts.find((contact) => contact.email === email);
    const duplicatePhone = contacts.find((contact) => contact.phone === phone);

    if (duplicateEmail) {
      return toast.error("Email already exist", {
        theme: "colored",
        autoClose: true,
        pauseOnHover: false,
        closeOnClick: true,
      });
    }
    if (duplicatePhone) {
      return toast.error("Phone number already exist", {
        theme: "colored",
        autoClose: true,
        pauseOnHover: false,
        closeOnClick: true,
      });
    }

    dispatch(addNewContact(name, email, phone));
    toast.success("contact successfully created!", {
      theme: "colored",
      autoClose: true,
      pauseOnHover: false,
      closeOnClick: true,
    });

    navigate("/");
  };

  return (
    <div className="bg-white rounded-md shadow-lg px-6 py-2 w-3/4 xl:w-1/3 lg:w-1/3 md:w-2/3 sm:w-3/4 mx-auto mt-16 text-gray-600    ">
      <div>
        <div className="text-center">
          <h1 className="text-xl lg:text-3xl xl:text-3xl md:text-3xl sm:text-2xl  font-semibold py-4 mb-3">Add New Contact</h1>
        </div>
        <div>
          <form
            onSubmit={handleSumbit}
            className="flex flex-col space-y-3 pb-5"
          >
            <lable className="text-sm font-medium mb-1">Fullname:</lable>
            <input
              type={"text"}
              placeholder="Fullname "
              required
              autoComplete="on"
              name="fullname"
              className="rounded-lg border-gray-300 shadow-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <lable className="text-sm font-medium mb-1">Email:</lable>
            <input
              type={"email"}
              placeholder="Email "
              required
              autoComplete="on"
              name="email"
              className="rounded-lg border-gray-300 shadow-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <lable className="text-sm font-medium mb-1">Phone:</lable>
            <input
              type={"tel"}
              placeholder="Phone "
              required
              autoComplete="on"
              name="phone"
              className="rounded-lg border-gray-300 shadow-sm"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
