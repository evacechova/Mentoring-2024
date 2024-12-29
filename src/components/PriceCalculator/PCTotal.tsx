export const PCTotal = ({ hours = 0, location = 0 }: { hours?: number; location?: number }) => {
	const total = hours + location;

	return (
		<div>
			<p>Total price: {total}</p>
		</div>
	);
};
