import { BentoMenuBox } from "./BentoMenuBox";
import { ROUTES } from "./globalVariables";

export const BentoMenu = () => {
	return (
		<div>
			{Object.entries(ROUTES).map(([key, { title, route }]) => (
				<BentoMenuBox key={key} text={title} to={route} />
			))}
		</div>
	);
};
