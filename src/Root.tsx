import { Link, Outlet } from "react-router-dom";

export const Root = () => {
	return (
		<>
			<ul>
				<li>
					<Link to="/">Homepage</Link>
				</li>
				<li>
					<Link to="/Filming">Filming</Link>
				</li>
				<li>
					<Link to="/Photography">Photography</Link>
				</li>
			</ul>
			<Outlet />
		</>
	);
};
