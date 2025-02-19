import { DanceCovers } from "./pages/DanceCovers";
import { Events } from "./pages/Events";
import { EquipmentRental } from "./pages/EquipmentRental";
import { Portraits } from "./pages/Portraits";
import { About } from "./pages/About";

export const ROUTES: Record<
	string,
	{ route: string; title: string; component: JSX.Element; image_path: string }
> = {
	about: { route: "/about", title: "ABOUT", component: <About />, image_path: "" },
	dance_covers: {
		route: "/dance-covers",
		title: "DANCE COVERS",
		component: <DanceCovers />,
		image_path: "menu_dance_covers.webp",
	},
	portrait_photography: {
		route: "/portraits",
		title: "PORTRAITS",
		component: <Portraits />,
		image_path: "menu_portrait.webp",
	},
	events: {
		route: "/events",
		title: "EVENTS",
		component: <Events />,
		image_path: "menu_events.webp",
	},
	rental: {
		route: "/equipment-rental",
		title: "RENTAL",
		component: <EquipmentRental />,
		image_path: "menu_rental.webp",
	},
} as const;
