import AllBooks from "./AllBooks/AllBooks";
import Banner from "./Banner";
import Collection from "./Collection";
import Deals from "./Deals";
import Featured from "./Featured/Featured";
import Genres from "./Genres";
import Services from "./Services";
import Subscribe from "./Subscribe";

const Home = () => {
	return (
		<>
			<Banner />
			<Services />
			<Collection />
			<Deals />
			<AllBooks />
			<Genres />
			<Featured />
			<Subscribe />
		</>
	);
};

export default Home;
