import { Filming } from "./Filming";
import { Photography } from "./Photography";
import { EquipmentRental } from "./EquipmentRental";

export const ROUTES: Record<string, { route: string; title: string; component: JSX.Element }> = {
	film: { route: "/filming", title: "Filming", component: <Filming /> },
	photo: { route: "/photography", title: "Photography", component: <Photography /> },
	rental: {
		route: "/equipment-rental",
		title: "Equipment rental",
		component: <EquipmentRental />,
	},
} as const;
