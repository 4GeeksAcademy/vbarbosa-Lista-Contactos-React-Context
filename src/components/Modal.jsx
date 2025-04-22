import React from "react";
import { Link } from "react-router-dom";

// hooks
import useGlobalReducer from "../hooks/useGlobalReducer";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

export const ModalBtn = (props) => {
            
    const {store, dispatch} = useGlobalReducer();

    // Need to add handleDelete here to be shown when we click on modal button trash
    const handleDelete = async (e) => {

        const slug = "vbarbosa";

        try {

            // we call the selected contact by cid as we assigned the id information of agendas array to it
            const resp = await fetch('https://playground.4geeks.com/contact/agendas/' + slug + '/contacts/' + props.cid, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': ' application/json'
                }
            });
            if (!resp.ok) throw new Error('error deleting')

                // here we make constant the GET url
            const updatedAgenda = await fetch('https://playground.4geeks.com/contact/agendas/'+ slug +'/contacts');
            
            // after we fetch the agenda we show it updated
            const data = await updatedAgenda.json();
            dispatch({ type: 'get_my_agenda', payload: data.contacts });
        } 
        
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="d-flex justify-content-around justify-content-lg-center">

            <div>
                {/* link to edit page, we have used the cid to properly access the contact selected*/}
                <Link to={'/edit/'+ props.cid} className="link-dark fs-4 me-lg-5">
                    <FontAwesomeIcon icon={faPencil}/>
                </Link>
            </div>
            
            <div>
                {/* This button activates the modal which handles the delete*/}
                <FontAwesomeIcon icon={faTrashCan} 
                className="m-2 fs-4"
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal" 
                data-bs-whatever="@fat"/>
            </div>

            {/* This is the modal content */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="undefined">
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
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Oh no!</button>
                            
                            {/* This button should make possible to delete the contact */}
                            <button type="button" className="btn btn-secondary" onClick={handleDelete} data-bs-dismiss="modal">Yes baby!</button>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};