import AllBooks from "./AllBooks";
import Banner from "./Banner";
import Collection from "./Collection";
import Deals from "./Deals";
import Genres from "./Genres";
import Services from "./Services";

const Home = () => {
	return (
		<>
			<Banner />
			<Services />
			<Collection />
			<Deals />
			<AllBooks />
			<Genres />
		</>
	);
};

export default Home;
