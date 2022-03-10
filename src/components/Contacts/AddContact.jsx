import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewContact } from "../../redux/actions/contacts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSumbit = (e) => {
    e.preventDefault();

    const duplicateEmail = contacts.find((contact) => contact.email === email);
    const duplicatePhone = contacts.find((contact) => contact.email === email);

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
    <div className="bg-white rounded-md shadow-lg px-6 py-2 w-1/3 mx-auto mt-16 text-gray-600    ">
      <div>
        <div className="text-center">
          <h1 className="text-3xl font-semibold py-4 mb-3">Add New Contact</h1>
        </div>
        <div>
          <form
            onSubmit={handleSumbit}
            className="flex flex-col space-y-5 pb-5"
          >
            <lable className="text-sm font-medium mb-1">Fullname:</lable>
            <input
              type={"text"}
              placeholder="full name "
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
              placeholder="email "
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
              placeholder="phone "
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
