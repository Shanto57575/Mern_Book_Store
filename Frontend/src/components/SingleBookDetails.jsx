import { useLoaderData } from "react-router-dom";

const SingleBookDetails = () => {
	const data = useLoaderData();
	console.log(data);
	return <div>SingleBookDetails</div>;
};

export default SingleBookDetails;
