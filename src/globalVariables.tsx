import { DanceCovers } from "./pages/DanceCovers";
import { Events } from "./pages/Events";
import { EquipmentRental } from "./pages/EquipmentRental";
import { PortraitPhotography } from "./pages/PortraitPhotography";
import { About } from "./pages/About";

export const ROUTES: Record<
	string,
	{ route: string; title: string; component: JSX.Element; image_path: string }
> = {
	about: { route: "/about", title: "About", component: <About />, image_path: "" },
	dance_covers: {
		route: "/dance-covers",
		title: "Dance Covers",
		component: <DanceCovers />,
		image_path: "",
	},
	events: {
		route: "/events",
		title: "Events",
		component: <Events />,
		image_path: "menu_events.webp",
	},
	portrait_photography: {
		route: "/portrait-photography",
		title: "Portrait Photography",
		component: <PortraitPhotography />,
		image_path: "menu_portrait.webp",
	},
	rental: {
		route: "/equipment-rental",
		title: "Equipment rental",
		component: <EquipmentRental />,
		image_path: "",
	},
} as const;
