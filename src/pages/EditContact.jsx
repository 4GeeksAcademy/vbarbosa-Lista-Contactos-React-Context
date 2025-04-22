import React, { useState } from "react";
import { useNavigate, useParams, Link} from "react-router-dom";

// hooks
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const EditContact = () => {
    
    const {store, dispatch} = useGlobalReducer();

    // we add to constant useParam in order to be used inside a function
    const params = useParams();
    
    // we add to constant navigate for the same reason above
    const navigate = useNavigate();

    // we set our states to edit the contact
    // we make use of params to find on the agendas array the id
    const [editContact, setEditContact] = useState(store.agenda.find(el => el.id == params.id));    

    // same as add contact we need to update the contents with the old and new information
    const handleChange = (e) => {
        setEditContact({
            ...editContact, [e.target.name]: e.target.value
        })
    }    

    // This time when we make submit we should use PUT to update the edited object
    const handleSubmit = async (e) => {
        e.preventDefault();
        const slug = "vbarbosa";

            try {
                const resp = await fetch('https://playground.4geeks.com/contact/agendas/' + slug + '/contacts/'+ params.id, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(editContact)
                });

                const dataForm = await resp.json()
                console.log(dataForm)

                if (resp.ok) {
                    // This allows to go back Home page once we hit save button if there is no error
                    navigate("/");
                }
            }
            
            catch (error) {
                console.log(error);
            }
        
    };

    return (
    
        <div className="container-fluid">

            <div className="row">
                <div className="col-12 col-lg-12">
                    <div className="mx-auto">
                        <h2 className="m-4">Edit Contact</h2>
                    </div>

                    {/* If we want to make an input to be required we just need to add 'required' element to it */}
                    <form className="m-4" onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input type="text" 
                            className="form-control" 
                            value={editContact.name} required
                            onChange={handleChange}
                            name="name"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" 
                            className="form-control" 
                            value={editContact.email}
                            onChange={handleChange}
                            name="email"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input type="number" 
                            className="form-control" 
                            value={editContact.phone} required
                            onChange={handleChange}
                            name="phone"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Address</label>
                            <input type="text" 
                            className="form-control" 
                            value={editContact.address}
                            onChange={handleChange}
                            name="address"
                            />
                        </div>

                        <div className="d-grid gap-2 mb-2">
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>

                        {/* This will send back to Home page */}
                        <Link to="/">
                            or get back to contacts
                        </Link>

                    </form>
                </div>
            </div>
        </div>
    );
}