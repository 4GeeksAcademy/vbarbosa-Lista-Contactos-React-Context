import React, { useEffect } from "react";

// hooks
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

// components
import { ContactCard } from "../components/ContactCard.jsx";


export const Home = () => {

  const {store, dispatch} = useGlobalReducer()

  // creates an user under Agendas
  const createAgenda = async (slug = "vbarbosa") => {
          try {
              const resp = await fetch('https://playground.4geeks.com/contact/agendas/' + slug, {
                method: "POST",
                headers: {
                  'accept': 'application/json'
                }
              });
              const data = await resp.json();
              console.log(data);
              dispatch({ type: 'get_my_agenda', payload: data.agenda })
      
          } catch (error) {
              console.log(error);
          }
        }

  // retrieves all agendas in the API
  // const getAgendas = async () => {
  //   try {
  //       const resp = await fetch('https://playground.4geeks.com/contact/agendas');
  //       const data = await resp.json()
  //       dispatch({ type: 'get_agendas', payload: data.agendas })

  //   } catch (error) {
  //       console.log(error);
  //   }
  // }

  // this get the agenda I created only
  const getOneAgenda = async (slug = "vbarbosa") => {

    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/' + slug);
        if (resp.ok) {
          // Agenda exists, fetch contacts
          const data = await resp.json();
          dispatch({ type: 'get_my_agenda', payload: data.contacts });
      } else {
          // Agenda does not exist, wait to create it in order to fetch with GET
          await createAgenda(slug);
      }

    } catch (error) {
        console.log(error);
    }
  }

  // Render the main page
  useEffect(() =>{
    getOneAgenda();

  }, []);

	return (

		<div className="container-fluid p-3">
			{
				store.agenda?.map(el => <ContactCard
					key={el.id}
					cid={el.id}
					name={el.name}
					phone={el.phone}
					email={el.email}
					address={el.address}
				/>)
			}
    </div>
	);
}; 