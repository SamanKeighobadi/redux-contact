import { toast } from "react-toastify";

export const addNewContact = (name,email,phone) =>{
    return async(dispatch,getState) =>{
        const contacts = [...getState()];
        const newContact= {
            id:Math.floor(Math.random() * 1000),
            name,
            email,
            phone
        } 
        contacts.push(newContact)
        await dispatch({type:"ADD_CONTACT",payload:contacts})
    }
}

export const deleteContact = (id ) => {
    return async(dispatch,getState) =>{
        const contacts = [...getState()]
        const filteredContact = contacts.filter(c => c.id !== id);
        await dispatch({type:"DELETE_CONTACT",payload:filteredContact})
        toast.success("Contact successfully deleted!",{
            theme:'colored',
            autoClose:true,
            pauseOnHover:false,
            closeOnClick:true,
        })
    }
}