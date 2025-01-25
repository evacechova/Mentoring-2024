import masthead_image from "../../../src/assets/homepage/masthead.webp";
import styles from "../../globalStyles.module.scss";
import { CTA } from "../CTA/CTA";

export const Masthead = () => {
	return (
		<div className="flex mb-2 mx-4">
			<div
				aria-hidden="true"
				className="w-7/12 h-screen  rounded-l-md "
				style={{
					backgroundImage: `url(${masthead_image})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			></div>
			<div className="w-5/12 h-screen p-16 bg-[#111] rounded-r-md">
				<p className={`${styles.poppins_bold} text-white text-8xl leading-tight mb-10 `}>
					YOUR VISION BROUGHT TO LIFE
				</p>
				<p className={`${styles.poppins_medium} text-white text-3xl leading-tight pr-20`}>
					Choose a style and DM me on IG to book your session.
				</p>
				<CTA />
			</div>
		</div>
	);
};
