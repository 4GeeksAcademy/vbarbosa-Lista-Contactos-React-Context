import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid m-2 ">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						{/* I need to add icon here and edit the font to be more fancy */}
						ICON HERE +
						Mi Agenda
					</span>
				</Link>
				<div className="ms-end">
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