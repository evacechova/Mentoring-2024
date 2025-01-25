import globalstyles from "../../globalStyles.module.scss";

export const SubH: React.FC<{ text: string }> = ({ text }) => {
	return (
		<h2
			className={`${globalstyles.poppins_medium} leading-tight mb-11 px-16 text-lg text-black`}
		>
			{text}
		</h2>
	);
};
