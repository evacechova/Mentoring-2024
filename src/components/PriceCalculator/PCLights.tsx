interface PCLightsProps {
	lightsCost: number;
	setLightsCost: (value: number) => void;
}

export const PCLights: React.FC<PCLightsProps> = ({ lightsCost, setLightsCost }) => {
	const option = { label: "With lights", value: 100 };

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const isChecked = e.target.checked;
		setLightsCost(isChecked ? option.value : 0); //updating the state based on whether the checkbox is checked
	};

	return (
		<div className="pclights">
			<label htmlFor={`pclights${option.label}`}>{option.label}</label>
			<input
				type="checkbox"
				name="pclights"
				id={`pclights${option.label}`}
				value={option.value}
				checked={lightsCost === option.value}
				// onChange={(e) => setLightsCost(Number(e.target.value))}
				onChange={handleChange}
			/>
		</div>
	);
};
