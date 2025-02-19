import globalstyles from "../../globalStyles.module.scss";

export const PageH2: React.FC<{ text: string }> = ({ text }) => {
	return (
		<h2
			className={`${globalstyles.poppins_semibold} leading-tight mb-8 px-16 text-5xl text-black`}
		>
			{text}
		</h2>
	);
};
