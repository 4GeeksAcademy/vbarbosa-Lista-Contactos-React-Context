import React, { useState, useEffect, useReducer, useId } from "react";

export const listAgenda = () => {

  // From here is my code
  const url = 'https://playground.4geeks.com/contact/agendas/vbarbosa';
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  } 

  const [list, setList] = useState([]);
  const id = useId();
  const [newContact, setNewContact] = useState({
    name:"", 
    phone: "", 
    email: "", 
    address: "", 
    id:""
  });

  const getAgenda = () => {

    fetch(url,options)
      
      .then(response => {
        console.log(response)
        if (!response.ok) throw new Error (`error status code:${response.status}`)
          return response.json()
                
      })  
          
      .then(parsedJson => {
        console.log(parsedJson.contacts);
        setList(parsedJson.contacts);
      })
      
      .catch(err => console.log(err))   
    }
   
    // Render the main page
    useEffect(() =>{
      getAgenda();
  
    }, []);

  const [contacts, dispatch] = useReducer((state, action) => {

    switch (action.type) {
      case "add_task":{
        return [
          ...state,
          {
            // Spread the payload to include all contact fields
            ...action.payload
          }
        ]
      }
    
      default: {
        throw Error('Unknown action.');
      }
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "add_task",

      // Adds new contact date with a new id
      payload: { ...newContact, id}
    });

    fetch("https://playground.4geeks.com/todo/todos/vbarbosa", {
      method: 'POST',
      headers: 'accept: application/json',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify (newTodo)
    })

    .then(resp => {
        if (!resp.ok) throw new Error(`Error status code: ${resp.status}`);
        return resp.json();
    })

    .then(result => {
        // Adds contact information to list array
        setList((prevList) => [...prevList, result]);

      // Reset the newContact state
      setNewContact({ name: "", phone: "", email: "", address: "", id: "" });
    })

    .catch(error => console.log("Error: ", error));
  }

      
  const handleChange = (e) => {
    const { name, value } = e.target; // Separates name and value from the event target
    setNewContact(prev => ({ 
      ...prev, [name]: value })); // Update the specific field
  };
  
  

  return (

    <form onSubmit={handleSubmit}>

      <div className="mb-3">
        <label htmlFor="exampleInputName1" className="form-label">Full Name</label>
        <input type="text" 
        className="form-control" 
        id="exampleInputName1" 
        value={newContact.name} required
        onKeyDown={handleChange}
        onChange={(e) => setNewContact({name: e.target.value})}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" 
        className="form-control" 
        id="exampleInputEmail1" 
        value={newContact.email}
        onKeyDown={handleChange}
        onChange={(e) => setNewContact({email: e.target.value})}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPhone1" className="form-label">Phone</label>
        <input type="number" 
        className="form-control" 
        id="exampleInputPhone1" 
        value={newContact.phone} required
        onKeyDown={handleChange}
        onChange={(e) => setNewContact({phone: e.target.value})}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputAddress1" className="form-label">Address</label>
        <input type="text" 
        className="form-control" 
        id="exampleInputAddress1" 
        value={newContact.address}
        onKeyDown={handleChange}
        onChange={(e) => setNewContact({address: e.target.value})}
        />
      </div>

      <div class="d-grid gap-2">
        <button type="submit" class="btn btn-primary">Save</button>
      </div>

    </form>
  );
}
