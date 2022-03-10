import React from "react";
// import redux and redux actions
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/actions/contacts";
// Hero Icon
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
// React Router DOM
import { Link } from "react-router-dom";

const Contacts = () => {
  // use redux
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      {contacts.map((contact) => (
        <div key={contact.id}>
          {contact.name}
          <br />
          {contact.email}
          <br />
          {contact.phone}
          <button
            onClick={() => dispatch(deleteContact(contact.id))}
            className="bg-red-500"
          >
            <TrashIcon className="h-4 w-4" />
          </button>
          <Link to={`edit/${contact.id}`}>
            <PencilAltIcon className="h-4 w-4" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
