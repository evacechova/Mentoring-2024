import masthead_image from "../../../src/assets/masthead.webp";

export const Masthead = () => {
	return (
		<div aria-hidden="true" className="bg-stone-300">
			<img src={masthead_image} alt="Masthead image" />
		</div>
	);
};
