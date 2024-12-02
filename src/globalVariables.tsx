import { CoverFilming } from "./pages/CoverFilming";
import { Photography } from "./pages/Photography";
import { EquipmentRental } from "./pages/EquipmentRental";

export const ROUTES: Record<string, { route: string; title: string; component: JSX.Element }> = {
	cover_filming: { route: "/cover-filming", title: "Cover Filming", component: <CoverFilming /> },
	photo: { route: "/photography", title: "Photography", component: <Photography /> },
	rental: {
		route: "/equipment-rental",
		title: "Equipment rental",
		component: <EquipmentRental />,
	},
} as const;
