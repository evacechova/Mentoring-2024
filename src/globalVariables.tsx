import { DanceCovers } from "./pages/DanceCovers";
import { Events } from "./pages/Events";
import { EquipmentRental } from "./pages/EquipmentRental";
import { PortraitPhotography } from "./pages/PortraitPhotography";
import { About } from "./pages/About";

export const ROUTES: Record<string, { route: string; title: string; component: JSX.Element }> = {
	about: { route: "/about", title: "About", component: <About /> },
	dance_covers: { route: "/dance-covers", title: "Dance Covers", component: <DanceCovers /> },
	events: { route: "/events", title: "Events", component: <Events /> },
	portrait_photography: {
		route: "/portrait-photography",
		title: "Portrait Photography",
		component: <PortraitPhotography />,
	},
	rental: {
		route: "/equipment-rental",
		title: "Equipment rental",
		component: <EquipmentRental />,
	},
} as const;
