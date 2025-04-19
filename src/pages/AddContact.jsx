import React, { useState, useEffect, useReducer, useId } from "react";

export const AddContact = () => {

  // From here is my code

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
        <button type="submit" className="btn btn-primary">Save</button>
      </div>
      <Link to="/">
        <a>or get back to contacts</a>
      </Link>

    </form>
  );
}
