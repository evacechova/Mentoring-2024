import masthead_image from "../../../src/assets/homepage/masthead.webp";
import styles from "../../globalStyles.module.scss";

export const Masthead = () => {
	return (
		<div className="flex mb-2 mx-4">
			<div
				aria-hidden="true"
				className="w-8/12 h-screen  rounded-l-md "
				style={{
					backgroundImage: `url(${masthead_image})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			></div>
			<div className={`${styles.poppins_bold} w-2/6 h-screen p-8 bg-[#111] rounded-r-md `}>
				<p className="text-white text-8xl">Lorem ipsum dolor</p>
				<div
					className={`${styles.poppins_bold} p-4 rounded-md text-white text-Xl bg-gradient-to-r from-rose-500 via-fuchsia-600 to-indigo-600 w-full hover:from-rose-600 hover:via-fuchsia-700 hover:to-indigo-700 `}
				>
					BUTTON
				</div>
			</div>
		</div>
	);
};
