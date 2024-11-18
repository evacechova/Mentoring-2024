// ROUTING VARIABLES
// export const ROUTES: { id: number; route: string; title: string }[] = [
// 	{ id: 1, route: "/filming", title: "Filming" },
// 	{ id: 2, route: "/photography", title: "Photography" },
// 	{
// 		id: 3,
// 		route: "/equipment-rental",
// 		title: "Equipment rental",
// 	},
// ] as const;

export const ROUTES: Record<string, { route: string; title: string }> = {
	film: { route: "/filming", title: "Filming" },
	photo: { route: "/photography", title: "Photography" },
	rental: { route: "/equipment-rental", title: "Equipment rental" },
} as const;
