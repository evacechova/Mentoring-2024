import { Link } from "react-router-dom";
import { ROUTES } from "@/globalVariables";

export const Header = () => {
	return (
		<div className="flex justify-between p-2 mb-4">
			<div>
				<Link to="/">
					<h1 className="font-bold">Amateur at Everything</h1>
				</Link>
			</div>
			<div>
				<ul className="flex flex-row">
					{Object.entries(ROUTES).map(([key, { title, route }], _index) => (
						<li className="px-2" key={key}>
							<Link to={route}>{title}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
