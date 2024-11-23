import { createBrowserRouter } from "react-router-dom";
import { Root } from "./Root";
import { Homepage } from "./Homepage";
import { ROUTES } from "./globalVariables";

export const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ path: "/", element: <Homepage /> },
			...Object.entries(ROUTES).map(([_, { route, component }]) => ({
				path: route,
				element: component,
			})),
		],
	},
]);
