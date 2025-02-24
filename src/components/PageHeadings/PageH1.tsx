import globalstyles from "../../globalStyles.module.scss";

export const PageH1: React.FC<{ text: string }> = ({ text }) => {
	return (
		<h1
			className={`${globalstyles.poppins_semibold} leading-tight mb-4 px-16 py-8 text-6xl text-black bg-rose-300`}
		>
			{text}
		</h1>
	);
};
