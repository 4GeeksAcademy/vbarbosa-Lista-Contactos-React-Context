import React, { useEffect } from "react";

// hooks
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

// components
import { ContactCard } from "../components/ContactCard.jsx";


export const Home = () => {

  const {store, dispatch} = useGlobalReducer()  

  // Render the main page
  useEffect(() =>{
    getOneAgenda()

  }, []);

  const getAgendas = async () => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas');

        const data = await resp.json()
        console.log(data);
        dispatch({ type: 'get_agendas', payload: resp.agendas })

    } catch (error) {
        console.log(error);
    }
  }

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
        dispatch({ type: 'get_my_agenda', payload: resp.agenda })

    } catch (error) {
        console.log(error);
    }
  }

  const getOneAgenda = async (slug = "vbarbosa") => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/' + slug);

        const data = await resp.json();
        dispatch({ type: 'get_my_agenda', payload: data.contacts });

    } catch (error) {
        console.log(error);
    }
  }



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