import masthead_image from "../../../src/assets/masthead.webp";

export const Masthead = () => {
	return (
		<div aria-hidden="true" className="bg-stone-300 mb-4">
			<img src={masthead_image} alt="Masthead image" />
		</div>
	);
};
