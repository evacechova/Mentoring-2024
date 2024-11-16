import { BentoMenuBox } from "./BentoMenuBox";
import { ROUTES } from "./globalVariables";

export const BentoMenu = () => {
	return (
		<div>
			<BentoMenuBox text={ROUTES[0].title} to={ROUTES[0].route} />
			<BentoMenuBox text={ROUTES[1].title} to={ROUTES[1].route} />
			<BentoMenuBox text={ROUTES[2].title} to={ROUTES[2].route} />
		</div>
	);
};
