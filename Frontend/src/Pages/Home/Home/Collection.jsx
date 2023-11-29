import Girl from "../../../assets/aesthetics.png";

const Collection = () => {
	return (
		<div>
			<div className="lg:flex justify-between md:px-10">
				<div className="w-full lg:w-2/3 bg-[#F04A00] flex items-center justify-between mr-10">
					<div className="text-gray-100 font-serif space-y-2 p-10">
						<h1 className="text-xl">SPRING 2024</h1>
						<h1 className="text-3xl">Popular Books</h1>
						<p className="text-lg">All Books are flat 20% Off</p>
						<p className="hidden md:block italic">
							"As the blossoms bloom and the world awakens, so does the magic
							within the pages of a springtime book, inviting the reader to
							wander through the gardens of imagination and cultivate the seeds
							of inspiration"
						</p>
						<button className="border px-7 py-2.5 bg-black text-white hover:text-black hover:bg-white duration-300">
							SHOP NOW
						</button>
					</div>
				</div>
				<div className="w-full lg:w-1/3 bg-[#ebc3ab] flex items-center justify-between p-10">
					<img className="w-full mx-auto" src={Girl} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Collection;
