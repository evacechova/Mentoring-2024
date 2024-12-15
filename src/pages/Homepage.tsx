import { useState } from "react";

import { PageSection } from "../components/PageSection/PageSection";
import { BentoMenu } from "../components/BentoMenu/BentoMenu";
import { TextField } from "../components/TextField/TextField";
import { CTO } from "../components/CTO/CTO";
import { Calendar } from "@/components/ui/calendar";
import { PriceCalculator } from "../components/PriceCalculator/PriceCalculator";

export const Homepage = () => {
	const [date, setDate] = useState<Date | undefined>(new Date());

	return (
		<>
			<PageSection>
				<PriceCalculator />
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					className="rounded-md border"
				/>
				<TextField />
				<BentoMenu />
				<iframe src="https://calendar.google.com/calendar/embed?src=5f1b45d677d6c9068d184677c30dc25a390628f12f368eb06e7f4969d9ccbfe6%40group.calendar.google.com&ctz=Europe%2FPrague"></iframe>
				<CTO />
			</PageSection>
		</>
	);
};
