import BlogList from "../components/BlogList";
import useFetch from "../services/useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:3000/blogs");

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <div> loading... </div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
