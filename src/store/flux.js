/**
 *  getStore: () => {}, //funcion que devuelve el objeto store con cada uno de los atributos alli definidos, 
 *  getActions: () => {}, //funcion que devuelve el objeto actions con cada una de las funciones alli definidas,
 *  setStore: () => {} // funcion que recibe como argumento un objeto con cada uno de los atributos que se desea actulizar o asignar un valor 
 */
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [
                {
                    id: 1,
                    full_name: 'John Doe',
                    email: 'john.doe@gmail.com',
                    agenda_slug: 'MyAgenda',
                    address: 'Av. Vitacura',
                    phone: '+56955555555'
                }
            ]
        },
        actions: {
            getContacts: () => {
                fetch('https://playground.4geeks.com/apis/fake/contact/agenda/Catalina')
                    .then(response => response.json())
                    .then(datos => setStore({ contacts: datos }))
            },
            addContact: async (contact) => {
                    try {
                        console.log(contact)
                        const raw = JSON.stringify(contact) // no detecta la variable de todoInput
                        const url = `https://playground.4geeks.com/apis/fake/contact/`;
                        const options = {
                            method: 'POST',
                            body: raw,
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }
            
                        const response = await fetch(url, options)
                        const data = await response.json()
                        console.log(data);
                        getActions().getContacts()
                    }
                    catch (error) {
                        console.log(error.msg)
                    }
                },
            deleteContact: async (contact_id) => {
                try {
                    const url = 'https://playground.4geeks.com/apis/fake/contact/'+contact_id;
                    const options = {
                        method: 'DELETE',
        
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
        
                    const response = await fetch(url, options)
                    const data = await response.json()
                    console.log(data);
                    getActions().getContacts()
                }
                catch (error) {
                    console.log(error.msg)
                }
            },
            editContact: async (contact , contact_id) => {
                try {
                    console.log(contact)
                    const raw = JSON.stringify(contact) // no detecta la variable de todoInput
                    const url = `https://playground.4geeks.com/apis/fake/contact/`+contact_id;
                    const options = {
                        method: 'PUT',
                        body: raw,
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
        
                    const response = await fetch(url, options)
                    const data = await response.json()
                    console.log(data);
                    getActions().getContacts()
                }
                catch (error) {
                    console.log(error.msg)
                }
            },
            getOneContact: (contact_id) => {
                fetch('https://playground.4geeks.com/apis/fake/contact/'+contact_id)
                    .then(response => response.json())
                    .then(datos => setStore({ contacts: datos }))
            },

            
        }
    }
}

export default getState