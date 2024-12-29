export const PCLocation = ({
	locationCost,
	setLocationCost,
}: {
	locationCost: number;
	setLocationCost: (value: number) => void;
}) => {
	const options = [
		{ label: "Prague", value: 0 },
		{ label: "Outside of Prague", value: 300 },
	];

	return (
		<div className="pclocation">
			{options.map((option) => (
				<div key={option.label}>
					<label htmlFor={`location${option.value}`}>{option.label}</label>
					<input
						type="radio"
						name="pclocation"
						id={`location${option.value}`}
						value={option.value}
						checked={locationCost === option.value}
						onChange={(e) => setLocationCost(Number(e.target.value))}
					/>
				</div>
			))}
		</div>
	);
};
