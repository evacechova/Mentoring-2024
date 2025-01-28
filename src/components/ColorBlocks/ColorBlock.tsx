import globalstyles from "../../globalStyles.module.scss";

export const ColorBlock: React.FC<{ text: string; label: string }> = ({ text, label }) => {
	return (
		<div className="w-[370px] h-[360px] flex flex-col bg-lime-200 rounded-md p-6 gap-4">
			<h3
				className={`${globalstyles.poppins_bold} block max-w-fit p-2 bg-white rounded-md text-2xl`}
			>
				{label}
			</h3>

			<p className={`${globalstyles.poppins_semibold} block text-3xl`}>{text}</p>
		</div>
	);
};
