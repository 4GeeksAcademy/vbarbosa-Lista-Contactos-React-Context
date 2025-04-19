import React from "react";

// Need to add handleDelete and handleEdit functions Headers.

export const ModalBtn = () => {

    return (
        <div>
            
            <div className="d-grid gap-2 d-md-flex justify-content-md-end align-self-start">

                {/* need to link to another page to update form not part of modal*/}
                <button className="btn btn-primary">EDIT</button>

                {/* This activates the modal */}
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">TRASH</button>
            
            </div>

            {/* This is the modal content */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                            <button type="button" className="btn btn-secondary">Yes baby!</button>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};