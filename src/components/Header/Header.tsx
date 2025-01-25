import { Link } from "react-router-dom";
import { ROUTES } from "@/globalVariables";
import styles from "../../globalStyles.module.scss";
import { CalendarBar } from "../CalendarBar/CalendarBar";

export const Header = () => {
	return (
		<div>
			<CalendarBar />
			<div className="flex justify-between items-center py-2 mb-4 mx-11">
				<div>
					<Link to="/">
						<h1 className={`${styles.poppins_bold} text-black text-3xl `}>
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
		</div>
	);
};
