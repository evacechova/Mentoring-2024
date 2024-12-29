export const PCHours = ({
	hoursCost,
	setHoursCost,
}: {
	hoursCost: number;
	setHoursCost: (value: number) => void;
}) => {
	const options = [
		{ label: "4 hrs", value: 750 },
		{ label: "8 hrs", value: 1500 },
	];

	return (
		<div className="hrs">
			{options.map((option) => (
				<div key={option.label}>
					<label htmlFor={`hrs${option.value}`}>{option.label}</label>
					<input
						type="radio"
						name="hrs"
						id={`hrs${option.value}`}
						value={option.value}
						checked={hoursCost === option.value}
						onChange={(e) => setHoursCost(Number(e.target.value))}
					></input>
				</div>
			))}
			<label htmlFor="hrs4">4 hrs</label>
			<input type="radio" name="hrs" id="hrs4" value="750" />
			<label htmlFor="hrs8">8 hrs</label>
			<input type="radio" name="hrs" id="hrs8" value="1500" />
		</div>
	);
};
