import { toast } from "react-toastify";
// Sweetalert2
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Alert = withReactContent(Swal);

/**
 * 
 * @param {string} name name of contact
 * @param {email} email email of contact
 * @param {string} phone phone number of contact
 * @returns object of dispatch
 */
export const addNewContact = (name, email, phone) => {
  return async (dispatch, getState) => {
    const contacts = [...getState()];
    const newContact = {
      id: Math.floor(Math.random() * 1000),
      name,
      email,
      phone,
    };
    contacts.push(newContact);
    await dispatch({ type: "ADD_CONTACT", payload: contacts });
  };
};


/**
 * 
 * @param {number} id id of contact which want to delete
 * @returns object
 */
export const deleteContact = (id) => {
  return async (dispatch, getState) => {
    const contacts = [...getState()];
    const filteredContact = contacts.filter((c) => c.id !== id);

    const { isConfirmed } = await Alert.fire({
      icon: "question",
      title: "Delete this contact ?",
      text: "Are you sure ?",
      showCancelButton: true,
      cancelButtonText: "No",
      confirmButtonText: "Yes",
      cancelButtonColor: "red",
      confirmButtonColor: "green",
    });

    if (isConfirmed) {
      await dispatch({ type: "DELETE_CONTACT", payload: filteredContact });

      toast.success("Contact successfully deleted!", {
        theme: "colored",
        autoClose: true,
        pauseOnHover: false,
        closeOnClick: true,
      });
    }
  };
};


export const updateContact = (updatedInfo,ID)=>{
    return async(dispatch,getState) =>{
        const allContacts =[...getState()];

        const indexOfContact = allContacts.findIndex(contact => contact.id ===ID);
        const contact = allContacts[indexOfContact];

        contact.name = updatedInfo.name;
        contact.email = updatedInfo.email;
        contact.phone = updatedInfo.phone;

        const contacts = [...allContacts]
        contacts[indexOfContact] = contact;
        await dispatch({type:"UPDATE_CONTACT",payload:contacts})
    }
}