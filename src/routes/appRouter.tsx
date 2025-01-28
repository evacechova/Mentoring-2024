import { createBrowserRouter } from "react-router-dom";
import { NavigationRoot } from "../NavigationRoot";
import { HomeLayout } from "../layouts/HomeLayout";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Homepage } from "../pages/Homepage";
import { ROUTES } from "../globalVariables";

export const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <NavigationRoot />,
		children: [
			{
				path: "/",
				element: (
					<HomeLayout>
						<Homepage />
					</HomeLayout>
				),
			},
			...Object.entries(ROUTES).map(([_, { route, component }]) => ({
				path: route,
				element: <DefaultLayout>{component}</DefaultLayout>,
			})),
		],
	},
]);
