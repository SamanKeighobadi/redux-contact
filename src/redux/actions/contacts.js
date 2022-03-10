import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Alert = withReactContent(Swal);

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
