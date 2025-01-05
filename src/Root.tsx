import { Outlet } from "react-router-dom";
// import { Link } from "react-router-dom";

export const Root = () => {
	return (
		<>
			{/* <ul>
				<li>
					<Link to="/">Homepage</Link>
				</li>
				<li>
					<Link to="/filming">Filming</Link>
				</li>
				<li>
					<Link to="/photography">Photography</Link>
				</li>
				<li>
					<Link to="/equipment-rental">Equipment Rental</Link>
				</li>
			</ul> */}
			<Outlet />
		</>
	);
};
