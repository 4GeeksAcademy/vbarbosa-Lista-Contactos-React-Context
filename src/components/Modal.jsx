import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

export const ModalBtn = (props) => {
            console.log(props);
            
    const {store, dispatch} = useGlobalReducer();
    const navigate = useNavigate();

    // Need to add handleDelete here to be shown when we click on modal button trash
    const handleDelete = async (e) => {

        const slug = "vbarbosa";

        try {
            console.log("Deleting contact with id:", props.cid);

            const resp = await fetch('https://playground.4geeks.com/contact/agendas/' + slug + '/contacts/' + props.cid, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': ' application/json'
                }
            });

            const updatedAgenda = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts`);
            const data = await updatedAgenda.json();
            dispatch({ type: 'get_my_agenda', payload: data.agenda });

            if (resp.ok) {
                // This allows to go back Home page once we hit save button if there is no error
                navigate("/");
            }
        } 
        
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="row g-0 m-4 justify-content-around">
            <div className="col-6 col-lg-6">
                    {/* need to link to another page to update form not part of modal*/}
                    <button className="btn btn-primary">EDIT</button>
            </div>
            <div className="col-6 col-lg-6">
                {/* This activates the modal */}
                <button type="button" 
                className="btn btn-primary" 
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal" 
                data-bs-whatever="@fat">
                    TRASH
                </button>
            </div>

            {/* This is the modal content */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Are you sure?</h5>
                            <button type="button" className="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body justify-content-center p-4">
                            <h6 className="fs-6">If you delete this the entire world will go down</h6>
                        </div>

                        <div className="modal-footer">

                            {/* This button closes the modal */}
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Oh no!</button>
                            
                            {/* This button should make possible to delete the contact */}
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleDelete}>Yes baby!</button>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};