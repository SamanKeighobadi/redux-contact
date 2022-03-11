// import redux and redux actions
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/actions/contacts";
// Hero Icon
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
// React Router DOM
import { Link } from "react-router-dom";

const Contact = () => {
  // use redux
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      {contacts.map((contact) => (
        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700 " key={contact.id}>
          <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
            {contact.name}
          </td>
          <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
            {contact.email}
          </td>
          <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
            {contact.phone}
          </td>
          <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap flex space-x-4">
            <TrashIcon
              className="w-4 h-4 text-red-500 cursor-pointer"
              onClick={() => dispatch(deleteContact(contact.id))}
            />
            <Link to={`/edit/${contact.id}`}>
              <PencilAltIcon className="w-4 h-4 text-cyan-500" />
            </Link>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Contact;
