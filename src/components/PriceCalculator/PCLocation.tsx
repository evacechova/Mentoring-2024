export const PCLocation = () => {
	return (
		<div className="pclocation">
			<label htmlFor="location">Prague</label>
			<input type="radio" name="location" id="prague" />
			<label htmlFor="location">Outside of Prague</label>
			<input type="radio" name="location" id="outside-of-prague" />
		</div>
	);
};
