import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaBookOpen } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";

const Services = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 m-5 md:m-10 lg:m-20 text-center">
			<div className="space-y-3 font-serif font-medium">
				<LiaShippingFastSolid
					size={50}
					className="text-emerald-600 w-full mx-auto cursor-pointer transform transition-transform hover:translate-x-5 hover:scale-110"
				/>
				<h1 className="font-black text-xl">Free Standard Delivery</h1>
				<p className="w-full md:w-2/3 mx-auto">
					"Free shipping on all orders! Delight in quick, cost-free delivery."
				</p>
			</div>
			<div className="space-y-3 font-serif font-medium">
				<FaArrowsRotate
					size={50}
					className="text-emerald-600 w-full mx-auto hover:animate-spin cursor-pointer"
				/>
				<h1 className="font-black text-xl">Free Easy Returns</h1>
				<p className="w-full md:w-2/3 mx-auto">
					"No-hassle returns! Return your purchase with ease, no cost involved."
				</p>
			</div>
			<div className="space-y-3 font-serif font-medium">
				<FaBookOpen
					size={50}
					className="text-emerald-600 w-full mx-auto cursor-pointer transform transition-transform hover:translate-x-5 hover:scale-110"
				/>
				<h1 className="font-black text-xl">6 Million Books Available</h1>
				<p className="w-full md:w-2/3 mx-auto">
					"Explore 6 million+ books! A vast collection catering to every
					reader."
				</p>
			</div>
			<div className="space-y-3 font-serif font-medium">
				<BiSolidDonateHeart
					size={50}
					className="text-emerald-600 w-full mx-auto cursor-pointer transform transition-transform hover:translate-x-5 hover:scale-110"
				/>
				<h1 className="font-black text-xl">Special Discounts</h1>
				<p className="w-full md:w-2/3 mx-auto">
					"Exclusive discounts! Enjoy special savings on selected books."
				</p>
			</div>
		</div>
	);
};

export default Services;
