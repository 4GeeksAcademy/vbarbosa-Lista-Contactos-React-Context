import { Link } from "react-router-dom";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid m-2 ">
				<Link to="/" className="link-underline-light">
					<span className="navbar-brand d-flex justify-content-between">
						{/* I need to add icon here and edit the font to be more fancy */}
						<FontAwesomeIcon icon={faAddressBook} className="fs-1 m-2"/>
						<h2 className="m-2">Mi Agenda</h2>
					</span>
				</Link>
				<div className="ms-end mt-2 mt-sm-0">
					<Link to="/add_a_new_contact">
						{/* This button is linked to demo file which should link to anther page
						This same button will be able to create a new contact on the agenda */}
						<button className="btn btn-success">Add New Contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};