export const PCLights: React.FC<PCLightsProps> = ({
	lightsCost,
	setLightsCost,
}: {
	lightsCost: number;
	setLightsCost: (value: number) => void;
}) => {
	const option = { label: "With lights", value: 100 };

	return (
		<div className="pclights">
			<label htmlFor={`pclights${option.label}`}>{option.label}</label>
			<input
				type="checkbox"
				name="pclights"
				id={`pclights${option.label}`}
				value={option.value}
				checked={lightsCost === option.value}
				onChange={(e) => setLightsCost(Number(e.target.value))}
			/>
		</div>
	);
};
