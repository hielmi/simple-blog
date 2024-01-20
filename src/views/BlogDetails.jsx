import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../services/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:3000/blogs" + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:3000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      alert(`Are you sure to delete ${blog.title} ? `);
      navigate("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div> Loading... </div>}
      {error && <div> {error} </div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author} </p>
          <div>{blog.body}</div>
          <button onClick={handleClick}> DELETE</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
