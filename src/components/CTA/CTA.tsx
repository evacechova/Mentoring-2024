import IG_icon from "../../assets/icons/Instagram_Glyph_Gradient.png";

export const CTA = () => {
	return (
		<div className="flex my-4 justify-center border rounded-sm">
			<a className="flex" href="https://www.instagram.com/luong.manh.truong/">
				<p>To book a shoot, DM me on my Instagram</p>
				<img src={IG_icon} alt="IG icon" className="w-8 h-8 p-1" />
			</a>
		</div>
	);
};
