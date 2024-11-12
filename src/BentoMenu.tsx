import { BentoMenuBox } from "./BentoMenuBox";

export const BentoMenu = () => {
	return (
		<div>
			<BentoMenuBox text="Filming" to="/filming" />
			<BentoMenuBox text="Photography" to="/photography" />
			<BentoMenuBox text="Equipment Rental" to="/equipment-rental" />
		</div>
	);
};
