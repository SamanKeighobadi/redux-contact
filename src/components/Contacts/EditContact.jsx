import React, { useState } from "react";
// React Router DOM
import { useParams, useNavigate, Link } from "react-router-dom";
// import Redux and Redux actions
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/actions/contacts";

const EditContact = () => {
  // init states
  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedPhone, setUpdatedPhone] = useState("");

  // React router dom hooks
  const { id } = useParams();
  const navigate = useNavigate();
  // use redux
  const dispatch = useDispatch();

  const handleSumbit = (e) => {
    e.preventDefault();

    const obj = {
      name: updatedName,
      email: updatedEmail,
      phone: updatedPhone,
    };
    dispatch(updateContact(obj, id));
    // navigate('/')
  };

  return (
    <div className="bg-white rounded-md shadow-lg px-6 py-2 w-1/3 text-gray-600 mx-auto mt-16    ">
      <div>
        <div className="text-center">
          <h1 className="text-3xl font-semibold py-4 mb-3">Edit Contact</h1>
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
              onChange={(e) => setUpdatedName(e.target.value)}
              value={updatedName}
            />
            <lable className="text-sm font-medium mb-1">Email:</lable>
            <input
              type={"email"}
              placeholder="email "
              required
              autoComplete="on"
              name="email"
              className="rounded-lg border-gray-300 shadow-sm"
              onChange={(e) => setUpdatedEmail(e.target.value)}
              value={updatedEmail}
            />
            <lable className="text-sm font-medium mb-1">Phone:</lable>
            <input
              type={"tel"}
              placeholder="phone "
              required
              autoComplete="on"
              name="phone"
              className="rounded-lg border-gray-300 shadow-sm"
              onChange={(e) => setUpdatedPhone(e.target.value)}
              value={updatedPhone}
            />
            <button className="bg-cyan-500 py-2 rounded-lg text-white text-lg">
              Submit
            </button>
            <Link to={"/"}>
              <button className="py-2 w-full rounded-lg border-2 text-red-500  border-red-500 hover:bg-red-500 hover:text-white">
                Cancel
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
