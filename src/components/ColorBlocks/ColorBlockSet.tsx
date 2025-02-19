import { ColorBlock } from "./ColorBlock";

export const ColorBlockSet: React.FC<{ blocks: { text: string; label: string }[] }> = ({
	blocks,
}) => {
	return (
		<div className="flex flex-wrap gap-4 justify-center">
			{blocks.map((block, index) => (
				<ColorBlock key={index} text={block.text} label={block.label} />
			))}
		</div>
	);
};
