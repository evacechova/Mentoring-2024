import { createBrowserRouter } from "react-router-dom";
import { Root } from "./Root";
import { Homepage } from "./Homepage";
import { Filming } from "./Filming";
import { Photography } from "./Photography";
import { EquipmentRental } from "./EquipmentRental";
import { ROUTES } from "./globalVariables";

// Map component to route title
const COMPONENTS: Record<string, JSX.Element> = {
	Filming: <Filming />,
	Photography: <Photography />,
	"Equipment rental": <EquipmentRental />,
};

export const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ path: "/", element: <Homepage /> },
			...Object.entries(ROUTES).map(([key, { route, title }]) => ({
				path: route,
				element: COMPONENTS[title],
			})),
		],
	},
]);
