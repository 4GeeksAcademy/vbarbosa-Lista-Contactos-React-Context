import React from "react";

// hooks
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

// components
import { ModalBtn } from "./Modal";

export const ContactCard = (props) => {

    const {store, dispatch} = useGlobalReducer()
    

    // HandleEdit has to be added here and handleDelete on Modal file
 
    const getOneAgenda = async (slug = "vbarbosa") => {
        try {
            const resp = await fetch('https://playground.4geeks.com/contact/agendas/' + slug);
    
            const data = await resp.json();
            console.log(data); // Check the structure of the response
            dispatch({ type: 'get_my_agenda', payload: data.contacts });
    
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="card mb-3">
            <div className="row g-0 justify-content-center">

                <div className="col-12 col-md-2 col-lg-3 m-3">
                    <img src="https://picsum.photos/150/150?random=1" className="img-fluid rounded-circle" alt={props.name}></img>
                </div>

                <div className="col-12 col-md-4 col-lg-6">
                    
                    <div className="card-body">
                        <h5 className="card-title m-1">{props.name}</h5>
                        <p className="card-text mt-4">{props.address}</p>
                        <p className="card-text mt-4">{props.phone}</p>
                        <p className="card-text mt-4">{props.email}</p>
                    </div>

                </div>

                <div className="col-12 col-md-2 col-lg-2">

                    {/* I set modal in another componen file to avoid making the code so long */}
                        <ModalBtn
                            cid={props.cid}
                        />
                </div>

            </div>
        </div>
    );
}