import { Link } from "react-router-dom";
import { ROUTES } from "@/globalVariables";
import styles from "../../globalStyles.module.scss";

export const Header = () => {
	return (
		<div className="flex justify-between items-center py-2 mb-4 mx-4">
			<div>
				<Link to="/">
					<h1
						className={`${styles.poppins_bold} p-4 rounded-md text-white text-xl bg-gradient-to-r from-rose-500 via-fuchsia-600 to-indigo-600 w-full hover:from-rose-600 hover:via-fuchsia-700 hover:to-indigo-700`}
					>
						AMATEUR AT EVERYTHING
					</h1>
				</Link>
			</div>
			<div>
				<ul className={`flex flex-row gap-x-4 text-sm ${styles.poppins_medium}`}>
					{Object.entries(ROUTES).map(([key, { title, route }], _index) => (
						<li
							className="mx-2 relative inline-block text-gray-900 
           before:absolute before:left-0 before:bottom-0 before:h-[3px] 
           before:w-0 before:bg-gradient-to-r before:from-rose-500 before:via-fuchsia-600 before:to-indigo-600 
           before:transition-all before:duration-300 hover:before:w-full"
							key={key}
						>
							<Link to={route}>{title}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
