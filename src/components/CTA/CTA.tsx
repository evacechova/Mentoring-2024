import globalstyles from "../../globalStyles.module.scss";

export const CTA = () => {
	return (
		<div className="my-8 rounded-md text-white text-xl bg-gradient-to-r from-rose-500 via-fuchsia-600 to-indigo-600 w-6/12 hover:from-rose-600 hover:via-fuchsia-700 hover:to-indigo-700 self-center">
			<a
				href="https://www.instagram.com/luong.manh.truong/"
				className={`${globalstyles.poppins_bold} p-4 text-white text-xl text-center w-full h-full block`}
			>
				BOOK A SESSION
			</a>
		</div>
	);
};
