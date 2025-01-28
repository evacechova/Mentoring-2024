import globalstyles from "../../globalStyles.module.scss";
import IGlogo from "../../assets/icons/Instagram_Glyph_White.png";

export const Footer = () => {
	return (
		<div className="flex flex-row items-center justify-evenly p-8 bg-[#222] w-full text-[#777]">
			<div>
				<p className={`${globalstyles.poppins_normal} text-xs  `}>
					2025 © Amateur at Everything
				</p>
				<p className={`${globalstyles.poppins_normal} text-xs  `}>
					Page made by{" "}
					<a href="https://www.linkedin.com/in/evacechova/">
						<span className="transition duration-300 ease-in-out hover:text-white">
							Eva Čechová
						</span>
					</a>
				</p>
			</div>

			<a className="flex flex-row " href="https://www.instagram.com/luong.manh.truong/">
				<img src={IGlogo} alt="IG icon" className="w-8 h-8 p-1" />
				<p className="mx-2 text-sm self-center transition duration-300 ease-in-out hover:text-white ">
					INSTAGRAM
				</p>
			</a>
		</div>
	);
};
