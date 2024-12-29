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
		<div className="pchours">
			{options.map((option) => (
				<div key={option.label}>
					<label htmlFor={`pchours${option.value}`}>{option.label}</label>
					<input
						type="radio"
						name="pchours"
						id={`pchours${option.value}`}
						value={option.value}
						checked={hoursCost === option.value}
						onChange={(e) => setHoursCost(Number(e.target.value))}
					></input>
				</div>
			))}
		</div>
	);
};
