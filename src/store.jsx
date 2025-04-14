import React, { useState, useEffect } from "react";

export const initialStore=()=>{

    // From here is my code
    const [list, setList] = useState([]);
    const [newContact, setNewContact] = useState("");
  
    const url = 'https://playground.4geeks.com/contact/agendas/vbarbosa';
    const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
      }
  
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
         setList([]);
  
      }, []);
  
      const handleChange = (e) => {
  
          if (e.key === 'Enter' && newContact.trim() !== "") {
              const newList = {name: newContact, phone:"", email: "", address:""};
              console.log("Sending data:", newTodo);
  
              fetch(`${url}${"/contacts"}`, {
                  method: 'POST',
                  headers: 'accept: application/json',
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify (newList)
              })
  
              .then(resp => {
                  if (!resp.ok) throw new Error(`Error status code: ${resp.status}`);
                  return resp.json();
              })
  
              .then(result => {
                  // Adds tasks to list
                  setList((prevList) => [...prevList, result]);
  
                  // clear the input field
                  setNewContact("");
                  console.log(result);
  
              })
  
              .catch(error => console.log("Error: ", error));
          }
      };
  
      const handleSubmit = (e) => {
          e.preventDefault();
          getAgenda();
      };
  
      const handleDelete = (id) => {
          fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
              method: 'DELETE',
              headers: {"Content-Type": "application/json"}
          })
          
          .then(() => {
              const updatedList = list.filter((el) => el.id !== id);
              setList(updatedList);
              getAgenda();
          })
          .catch(error => console.log("Error: ", error));
      };

  return{
    slug: list.slug,
    contacts: [
      {
        name: list.name,
        phone: list.phone,
        email: list.email,
        address: list.address
      }
    ]
  }
}

console.log(list.contacts);

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_contact':

      return (
        <div className="shadow">
          <ul className="card list-group list-group-flush">
            <li className="list-group-item">
                <form onSubmit={handleSubmit} className="p-2">
                    <input 
                    type="text" 
                    value={newContact} 
                    placeholder="What needs to be done?" 
                    onKeyDown={handleChange} 
                    onChange={(e) => setNewContact(e.target.value)}
                    className="form-control border-0 fs-5"/>
                </form>
                {/* <div class="d-grid w-25 gap-2 d-md-flex ms-auto m-2">
                    <button class="btn btn-danger" type="button" onClick={deleteAll}>Delete List</button>
                </div> */}
            </li>

            {list.map((el) => <div className="justify-content-center">
                <li 
                    key={el.id} 
                    className="list-group-item justify-content-between d-flex w-100"
                >
                    {el.contacts}
                </li>
            </div>)}
            
          </ul>
        </div>
      );
    
    // case 'go_back':
    //   return 'Add go back to home tab link here';

    default:
      throw Error('Unknown action.');
    
  }    
}
