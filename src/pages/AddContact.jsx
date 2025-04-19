import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export const AddContact = () => {
  
    // Here we create a constant to be able to add useNavigate inside a function as it's not allowed to call directly
    const navigate = useNavigate();

    // This constant has the objexts which are required to create a contact with fetch
    const [newContact, setNewContact] = useState({
        name:"", 
        phone: "", 
        email: "", 
        address: ""
    });

    const getAgenda = async (slug) => {
        try {
            const resp = await fetch('https://playground.4geeks.com/contact/agendas/' + slug + '/contacts',{
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await resp.json()
            return data
        } catch (error) {
            console.log(error);
        }
    }

    // This functions allows to push the new input details to newContact
    const handleChange = (e) => {
        setNewContact({
            ...newContact, [e.target.name]: e.target.value
        })
    }


    // This functions allows to create the new contact with fetch as well prevent from reloading when we fill the form
    const handleSubmit = async (e) => {
        e.preventDefault();
        const slug = "vbarbosa";

            try {
                const resp = await fetch('https://playground.4geeks.com/contact/agendas/' + slug + '/contacts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newContact)
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
                        <h2 className="m-4">Add a new contact</h2>
                    </div>

                    {/* If we want to make an inout to be required we just need to add required to it */}
                    <form className="m-4" onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input type="text" 
                            className="form-control" 
                            value={newContact.name} required
                            onChange={handleChange}
                            name="name"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" 
                            className="form-control" 
                            value={newContact.email}
                            onChange={handleChange}
                            name="email"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input type="number" 
                            className="form-control" 
                            value={newContact.phone} required
                            onChange={handleChange}
                            name="phone"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Address</label>
                            <input type="text" 
                            className="form-control" 
                            value={newContact.address}
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
