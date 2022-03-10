import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/actions/contacts';


const Contacts = () => {

    const contacts = useSelector(state =>state)    
    const dispatch = useDispatch()
    

    return ( 
        <div>
            {contacts.map(contact =>(
                <div key={contact.id}>
                    {contact.name}
                    <button onClick={() => dispatch(deleteContact(contact.id))} className='bg-red-500'>
                        delete
                    </button>
                </div>
            ))}
        </div>
     );
}
 
export default Contacts;