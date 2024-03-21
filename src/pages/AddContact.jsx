import React from 'react'
import { useNavigate, useState } from 'react-router-dom'

const AddContact = () => {

    const navigate = useNavigate()
    const [contact, setContact] = useState(
        {
            id: "",
            full_name: "",
            email: "",
            agenda_slug: "Catalina",
            address: "",
            phone: "",


        }


    )

    return (
        <>
            <label for="name">Full name</label> <br />
            <input type="text" id="name" value={contact.full_name} placeholder="full name" onChange={(e) => setContact({ ...contact, full_name: e.target.value })}></input>
            <label for="name">Email</label> <br />
            <input type="text" id="email" value={contact.email} placeholder="full name" onChange={(e) => setContact({ ...contact, email: e.target.value })}></input >
            <label for="name">Addresss</label> <br />
            <input type="text" id="name" value={contact.address} placeholder="full name" onChange={(e) => setContact({ ...contact, phone: e.target.value })}></input >
            <label for="name">Phone</label> <br />
            <input type="text" id="name" value={contact.phone} placeholder="full name" onChange={(e) => setContact({ ...contact, address: e.target.value })}></input >
            <button className="btn btn-warning" onClick={() => navigate('/')}>Regresar</button>
        </>
    )
}

export default AddContact