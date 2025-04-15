// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import {listAgenda} from "../store.jsx";


export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()
  const createAgenda = listAgenda()

  return (
    <div className="container-fluid">
      <ul className="list-group m-4">
          {/* Linked the store form to be viewed as another page */}
          {createAgenda}
      </ul>
      <br />

      <Link to="/">
        <a>or get back to contacts</a>
      </Link>
    </div>
  );
};
