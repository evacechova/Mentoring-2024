type PCTotalProps = {
	hours?: number;
	location?: number;
	lights: number;
};

export const PCTotal: React.FC<PCTotalProps> = ({ hours = 0, location = 0, lights = 0 }) => {
	const total = hours + location + lights;

	return (
		<div>
			<p>Total price: {total}</p>
		</div>
	);
};
