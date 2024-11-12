// import { useState } from "react";
// import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./Root";
import { Homepage } from "./Homepage";
import { Filming } from "./Filming";
import { Photography } from "./Photography";
import { EquipmentRental } from "./EquipmentRental";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ path: "/", element: <Homepage /> },
			{ path: "/filming", element: <Filming /> },
			{ path: "/photography", element: <Photography /> },
			{ path: "/equipment-rental", element: <EquipmentRental /> },
			// { path: "/calendar", element: <Calendar /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
