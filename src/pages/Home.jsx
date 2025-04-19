import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ContactCard } from "../components/ContactCard.jsx";
import React, { useEffect } from "react";


export const Home = () => {

  const {store, dispatch} = useGlobalReducer();

  // Render the main page
  useEffect(() =>{
    getOneAgenda()

  }, []);

  const getAgendas = async () => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas');
        const data = await resp.json()
        return data
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
        const data = await resp.json()
        console.log(data);
        return data
        
    } catch (error) {
        console.log(error);
    }
  }

  const getOneAgenda = async (slug = "vbarbosa") => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/' + slug);
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
  }



	return (

		<div className="container-fluid p-3">
			<ContactCard />
    </div>
	);
}; 