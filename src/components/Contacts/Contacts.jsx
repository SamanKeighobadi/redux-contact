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
    <div className="bg-white rounded-lg shadow-lg p-8">
      <table className="table-auto ">
        <thead className="text-slate-700">
          <tr className="text-left ">
            <th>Fullname:</th>
            <th>Email:</th>
            <th>Phone:</th>
          </tr>
        </thead>
        <tbody className="text-slate-600 ">
          {contacts.map((contact) => (
            <tr key={contact.id} className=''>
              <td>{contact.name}</td>

              <td>{contact.email}</td>

              <td>{contact.phone}</td>
              <td>
                <button
                  onClick={() => dispatch(deleteContact(contact.id))}
                  className="text-red-500 "
                >
                  <TrashIcon className="h-4 w-4" />
                </button>
                <button className="text-cyan-500 ">
                  <Link to={`/edit/${contact.id}`}>
                    <PencilAltIcon className="h-4 w-4" />
                  </Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
