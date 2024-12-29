export const PCLocation = () => {
	return (
		<div className="pclocation">
			<label htmlFor="location">Prague</label>
			<input type="radio" name="location" id="prague" value="0" />
			<label htmlFor="location">Outside of Prague</label>
			<input type="radio" name="location" id="outside-of-prague" value="300" />
		</div>
	);
};
