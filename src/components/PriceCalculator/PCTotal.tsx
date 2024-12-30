export const PCTotal = ({
	hours = 0,
	location = 0,
	lights = 0,
}: {
	hours?: number;
	location?: number;
	lights: number;
}) => {
	const total = hours + location + lights;

	return (
		<div>
			<p>Total price: {total}</p>
		</div>
	);
};
