export const PCTotal = ({ hours = 0 }: { hours?: number }) => {
	const total = hours;

	return (
		<div>
			<p>Total price: {total}</p>
		</div>
	);
};
