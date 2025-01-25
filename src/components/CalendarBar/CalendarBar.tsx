import globalstyles from "../../globalStyles.module.scss";

export const CalendarBar = () => {
	return (
		<div
			className={`${globalstyles.poppins_medium} flex py-3 text-sm justify-center text-white bg-gradient-to-r from-rose-500 via-fuchsia-600 to-indigo-600`}
		>
			📷 5 free spots for February. Grab yours now! →
		</div>
	);
};
