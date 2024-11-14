import { BentoMenuBox } from "./BentoMenuBox";
import { ROUTES } from "./globalVariables";

export const BentoMenu = () => {
	return (
		<div>
			<BentoMenuBox text="Filming" to={ROUTES.video} />
			<BentoMenuBox text="Photography" to={ROUTES.photo} />
			<BentoMenuBox text="Equipment Rental" to={ROUTES.rental} />
		</div>
	);
};
