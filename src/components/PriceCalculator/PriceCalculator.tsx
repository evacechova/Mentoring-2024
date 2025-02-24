import { PCHours } from "./PCHours";
import { PCLights } from "./PCLights";
import { PCLocation } from "./PCLocation";
import { PCTotal } from "./PCTotal";
import styles from "./PriceCalculator.module.scss";
import { useState } from "react";
import globalstyles from "../../globalStyles.module.scss";

export const PriceCalculator = () => {
	const [service, setService] = useState("");
	const [hoursCost, setHoursCost] = useState(0);
	const [locationCost, setLocationCost] = useState(0);
	const [lightsCost, setLightsCost] = useState(0);

	function handleServiceChange(event: React.ChangeEvent<HTMLSelectElement>) {
		setService(event.target.value);
		//Total price reset whenever the type of service changes
		setHoursCost(0);
		setLocationCost(0);
		setLightsCost(0);
	}

	return (
		<div className={`${styles.wrapper} ${globalstyles.poppins_semibold} justify-items-center`}>
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
						<PCLights lightsCost={lightsCost} setLightsCost={setLightsCost} />
						<PCTotal hours={hoursCost} location={locationCost} lights={lightsCost} />
					</div>
				)}
				{service === "portrait-photography" && (
					<div>
						<PCLocation locationCost={locationCost} setLocationCost={setLocationCost} />
						<PCTotal hours={hoursCost} location={locationCost} lights={lightsCost} />
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
