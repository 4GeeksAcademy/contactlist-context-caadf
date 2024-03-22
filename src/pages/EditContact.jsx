import React, { useContext, useEffect, useState } from 'react'
import { useNavigate , useParams } from 'react-router-dom'
import { Context } from '../store/AppContext'


const EditContact = () => {
    const { store, actions} = useContext(Context)
    let { id } = useParams()

    useEffect(() => {
        actions.getOneContact(id)
    }, [])
    
    
    
    const navigate = useNavigate()
    const [contact, setContact] = useState({
        full_name: '',
        email: '',
        agenda_slug: 'Catalina',
        address: '',
        phone: ''
    })

    return (
        <>
            <div>Editar Contacto</div>
            <form onSubmit={(e) => {
                e.preventDefault();

            actions.editContact(contact, id);
                
                

            }}>
                <label for="name">Full Name</label> <br />
                <input type="text" id='name' value={contact.full_name} placeholder='Full Name' onChange={(e) => setContact({ ...contact, full_name: e.target.value })} /> <br />
                <label for="email">Email</label><br />
                <input type="text" id='email' value={contact.email} placeholder='Enter Email' onChange={(e) => setContact({ ...contact, email: e.target.value })} /> <br />
                <label for="phone">Phone Number</label> <br />
                <input type="text" id='phone' value={contact.phone} placeholder='Enter Phone' onChange={(e) => setContact({ ...contact, phone: e.target.value })} /> <br />
                <label for="address">Address</label> <br />
                <input type="text" id='address' value={contact.address} placeholder='Enter Address' onChange={(e) => setContact({ ...contact, address: e.target.value })} /> <br />
                <button className='btn btn-primary' type='submit'>Editar Contacto</button>
            </form>
            <button className="btn btn-warning" onClick={() => navigate('/')}>Regresar</button>
        </>
    )
}

export default EditContact