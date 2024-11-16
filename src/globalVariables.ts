// ROUTING VARIABLES
export const ROUTES: { id: number; route: string; title: string }[] = [
	{ id: 1, route: "/filming", title: "Filming" },
	{ id: 2, route: "/photography", title: "Photography" },
	{
		id: 3,
		route: "/equipment-rental",
		title: "Equipment rental",
	},
] as const;
