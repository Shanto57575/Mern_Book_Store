import {
	FaFacebook,
	FaInstagramSquare,
	FaLinkedin,
	FaTwitter,
} from "react-icons/fa";
import pays from "../../assets/pays.png";

const Footer = () => {
	return (
		<>
			<div className="py-20 px-10 lg:flex items-center justify-between gap-8 bg-[#214e44] font-serif text-gray-400 ">
				<div className="space-y-2 mb-10 md:mb-5">
					<h3 className="text-white font-bold text-3xl">Customer Services</h3>
					<h4>Got Question? Call us 24/7</h4>
					<h1 className="text-emerald-400 font-bold text-2xl">
						(+707) 450-25-205
					</h1>
					<p>268 St, South New York/NY 98944, United States</p>
					<p className="underline hover:text-white cursor-pointer">
						bookswipe@lucky.com
					</p>
				</div>
				<div className="space-y-4 mb-10 md:mb-5">
					<h3 className="text-white font-bold text-3xl">Publishers</h3>
					<p className="hover:text-white cursor-pointer">Norstedt's history</p>
					<p className="hover:text-white cursor-pointer">
						Norstedts Publishing Group
					</p>
					<p className="hover:text-white cursor-pointer">Norstedt's Agency</p>
					<p className="hover:text-white cursor-pointer">The book club</p>
				</div>
				<div className="space-y-4 mb-10 md:mb-5">
					<p className="text-white font-bold text-3xl">Information</p>
					<p className="hover:text-white cursor-pointer">About us</p>
					<p className="hover:text-white cursor-pointer">Our services</p>
					<p className="hover:text-white cursor-pointer">Latest news</p>
					<p className="hover:text-white cursor-pointer">Best sellers</p>
				</div>
				<div className="space-y-4 mb-10 md:mb-5">
					<p className="text-white font-bold text-3xl">Resources</p>
					<p className="hover:text-white cursor-pointer">Register</p>
					<p className="hover:text-white cursor-pointer">Wishlist</p>
					<p className="hover:text-white cursor-pointer">Shipping info</p>
					<p className="hover:text-white cursor-pointer">Privacy policy</p>
				</div>
				<div className="space-y-4 mb-10 md:mb-5">
					<p className="text-white font-bold text-3xl">Social media</p>
					<div className="flex items-center gap-x-5">
						<FaTwitter className="hover:text-white cursor-pointer" size={24} />
						<FaInstagramSquare
							className="hover:text-white cursor-pointer"
							size={24}
						/>
						<FaFacebook className="hover:text-white cursor-pointer" size={24} />
						<FaLinkedin className="hover:text-white cursor-pointer" size={24} />
					</div>
					<img className="w-48" src={pays} alt="" />
				</div>
			</div>
			<h1 className="text-center p-5 text-stone-500 font-serif font-medium">
				Copyright © 2023 Sh@nto | Powered by BookSwipe
			</h1>
		</>
	);
};

export default Footer;
