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
                    id: "",
                    full_name: "",
                    email: "",
                    agenda_slug: "Catalina",
                    address: "",
                    phone: "",
                }
            ]
        },
        actions: {
            getContacts: () => {
                fetch('https://playground.4geeks.com/apis/fake/contact/agenda/Catalina')
                    .then(response => response.json())
                    .then(datos => setStore({ contacts: datos }))
            },
            addContacts: () => {
                
            }
        }
    }
}

export default getState