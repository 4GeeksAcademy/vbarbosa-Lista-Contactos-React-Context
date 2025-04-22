import React from "react";

// hooks
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

// components
import { ModalBtn } from "./Modal";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const ContactCard = (props) => {

    const {store, dispatch} = useGlobalReducer()
     
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
            <div className="row justify-content-center">

                <div className="col-12 col-lg-3 
                align-content-center text-center 
                p-1 m-3 m-lg-0">
                    <img src="https://picsum.photos/180/180?random=1" className="img-fluid rounded-circle" alt={props.name}></img>
                </div>

                <div className="col-12 col-lg-9 d-flex">
                    
                    <div className="card-body">
                        <div className="row justify-content-center p-2">
                            <div className="col-12 col-sm-9 col-lg-9 
                            text-sm-start text-center">

                                <h3 className="card-title m-1 fs-2">{props.name}</h3>
                                <h6 className="card-text mt-4 fs-5 text-secondary">
                                    <FontAwesomeIcon icon={faLocationDot} className="me-3 fs-4"/>
                                    {props.address}
                                </h6>
                                <h6 className="card-text mt-4 fs-5 text-secondary">
                                    <FontAwesomeIcon icon={faPhoneFlip} className="me-3 fs-4"/>
                                    {props.phone}
                                </h6>
                                <h6 className="card-text mt-4 fs-5 text-secondary">
                                    <FontAwesomeIcon icon={faEnvelope} className="me-3 fs-4"/>
                                    {props.email}
                                </h6>

                            </div>
                            <div className="col-6 col-sm-3 col-lg-3 
                            mt-md-0 mt-lg-0 mt-3">
                                {/* I set modal in another componen file to avoid making the code so long */}
                                <ModalBtn
                                    cid={props.cid}
                                />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}