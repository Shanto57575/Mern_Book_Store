import { ScaleLoader } from "react-spinners";

const Loader = () => {
	return (
		<div className="sweet-loading text-center my-20">
			<ScaleLoader
				color="#ea2020"
				size={150}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</div>
	);
};

export default Loader;
