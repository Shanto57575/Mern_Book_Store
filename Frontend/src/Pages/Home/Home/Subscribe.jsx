import { IoMailOutline } from "react-icons/io5";

const Subscribe = () => {
	return (
		<div className="text-center my-20 font-serif text-stone-800 mx-3">
			<h3 className="text-stone-500 text-xl mb-5">LATEST NEWSLETTER</h3>
			<h1 className="md:text-3xl lg:text-5xl">Get a 20% discount on your</h1>
			<h1 className="md:text-3xl lg:text-5xl">first order!</h1>
			<form className="mt-10 flex items-center justify-between border-b border-black w-full md:w-2/3 mx-auto">
				<input
					className="outline-none mb-3"
					type="email"
					placeholder="Enter your email..."
				/>
				<div className="flex items-center justify-center hover:text-red-500 gap-x-2 mb-3">
					<IoMailOutline size={20} />
					<button className="text-base">Subscribe</button>
				</div>
			</form>
			<p className="mt-12">
				To see how we may use your information, take a look at our
				<span className="underline hover:text-green-400 cursor-pointer ml-2">
					privacy policy.
				</span>
			</p>
		</div>
	);
};

export default Subscribe;
