import { PCHours } from "./PCHours";
import { PCLights } from "./PCLights";
import { PCLocation } from "./PCLocation";
import { PCTotal } from "./PCTotal";
import styles from "./PriceCalculator.module.scss";
import { useState } from "react";

export const PriceCalculator = () => {
	const [service, setService] = useState("");
	const [hoursCost, setHoursCost] = useState(0);
	const [locationCost, setLocationCost] = useState(0);

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

				{(service === "dance-cover" || service === "events") && (
					<div>
						<PCLocation locationCost={locationCost} setLocationCost={setLocationCost} />
						<PCHours hoursCost={hoursCost} setHoursCost={setHoursCost} />
						<PCLights />
						<PCTotal hours={hoursCost} location={locationCost} />
					</div>
				)}
				{service === "portrait-photography" && (
					<div>
						<PCLocation locationCost={locationCost} setLocationCost={setLocationCost} />
						<PCTotal hours={hoursCost} location={locationCost} />
					</div>
				)}
				{service === "equipment-rental" && (
					<div className="lights-rental">
						<p>500 CZK</p>
					</div>
				)}
			</div>
		</div>
	);
};
