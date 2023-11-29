import CountdownTimer from "./CountdownTimer";

const Deals = () => {
	return (
		<div className="font-serif text-center mt-20">
			<h1 className="text-3xl my-4 font-black">Deals Of The Week</h1>
			<div className="md:flex items-center justify-center gap-1 md:gap-4">
				<span className="text-gray-500 font-bold">End In :</span>
				<CountdownTimer />
				<span className="text-gray-500 font-bold">Hurry up!</span>
			</div>
		</div>
	);
};

export default Deals;
