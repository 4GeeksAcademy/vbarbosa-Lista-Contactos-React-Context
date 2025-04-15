// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import {listAgenda} from "../store.jsx";


export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()
  const createAgenda = listAgenda()

  // Aqui pondremos como se debe de ver la lista de contactos

  return (
    <div className="container-fluid">
      <ul className="list-group">
          {/* Map over the 'todos' array from the store and render each item as a list element */}
          {createAgenda}
      </ul>
      <br />

      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
