import { Outlet } from "react-router-dom";
import Navbar from "./Layout/Navbar/Navbar";
import Footer from "./Layout/Footer/Footer";
import Container from "./components/Container/Container";

const App = () => {
	return (
		<Container>
			<Navbar />
			<Outlet />
			<Footer />
		</Container>
	);
};
export default App;
