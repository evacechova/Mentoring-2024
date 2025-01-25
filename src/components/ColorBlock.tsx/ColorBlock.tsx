export const ColorBlock: React.FC<{ text: string; label: string }> = ({ text, label }) => {
	return (
		<div className="w-[370px] h-[360px] bg-lime-200">
			<h3>{label}</h3>
			<p>{text}</p>
		</div>
	);
};
