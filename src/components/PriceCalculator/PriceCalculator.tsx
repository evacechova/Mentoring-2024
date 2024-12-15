import styles from "./PriceCalculator.module.scss";
import { useState } from "react";

export const PriceCalculator = () => {
	const [service, setService] = useState("");

	function handleServiceChange(event) {
		setService(event.target.value);
	}

	return (
		<div className={styles.wrapper}>
			<h1>How much will it cost me?</h1>
			<div className="calculator">
				<div className="service-type">
					<label htmlFor="service-type">Choose service type:</label>
					<select
						value={service}
						onChange={handleServiceChange}
						name="service-type"
						id="service-type"
					>
						<option value="">Select an option</option>
						<option value="dance-cover">Dance cover filming</option>
						<option value="events">Event filming</option>
						<option value="portrait-photography">Portrait Photography</option>
						<option value="equipment-rental">Equipment Rental</option>
					</select>
				</div>

				{(service === "dance-cover" ||
					service === "events" ||
					service === "portrait-photography") && (
					<div className="hrs">
						<label htmlFor="hrs4">4 hrs</label>
						<input type="radio" name="hrs" id="hrs4" />
						<label htmlFor="hrs8">8 hrs</label>
						<input type="radio" name="hrs" id="hrs8" />
					</div>
				)}
				{(service === "dance-cover" ||
					service === "events" ||
					service === "portrait-photography") && (
					<div className="location">
						<label htmlFor="location">Prague</label>
						<input type="radio" name="location" id="prague" />
						<label htmlFor="location">Outside of Prague</label>
						<input type="radio" name="location" id="outside-of-prague" />
					</div>
				)}
				{service === "equipment-rental" && (
					<div className="lights">
						<label htmlFor="lights">With lights</label>
						<input type="checkbox" name="lights" id="lights" />
					</div>
				)}
				<p>Total price:</p>
			</div>
		</div>
	);
};
