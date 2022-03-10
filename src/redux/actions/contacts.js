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

