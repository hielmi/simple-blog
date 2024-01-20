import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Create from "./views/Create";
import BlogDetails from "./views/BlogDetails";
import NotFound from "./views/NotFound";

function App() {
  useEffect(() => {
    document.title = "Simple Blog";
  }, []);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
