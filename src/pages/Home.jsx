import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import {ModalBtn} from "../components/Modal.jsx";


export const Home = () => {

  const {store, dispatch} = useGlobalReducer()
  

	return (

		<div className="container-fluid p-3">
            {/* Add here the component from DEMO */}
			<div className="card mb-3">
              <div className="row g-0 justify-content-center">
                <div className="col-2 m-3">
                  <img src="https://picsum.photos/150/150?random=1" className="img-fluid rounded-circle" alt="..."></img>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h5 className="card-title m-1">FULL NAME</h5>
                    <p className="card-text mt-4">
                      ADDRESS
                      <br />
                      PHONE
                      <br />
                      EMAIL
                    </p>
                  </div>
                </div>
                <div className="col-1 col-lg-1 mt-4">
                  <ModalBtn />
                </div>
              </div>
            </div>

        </div>
	);
}; 