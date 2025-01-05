import { Link } from "react-router-dom";
import { ROUTES } from "@/globalVariables";

export const Header = () => {
	return (
		<div>
			<div>
				<Link to="/">
					<h1>Amateur at Everything</h1>
				</Link>
			</div>
			<div>
				<ul>
					{Object.entries(ROUTES).map(([key, { title, route }], _index) => (
						<li key={key}>
							<Link to={route}>{title}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
