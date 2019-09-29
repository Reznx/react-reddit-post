import React, { useState, useEffect } from "react";
import PostsList from "./components/PostsList";
import Loader from "./components/Loader";
import Pagination from "./components/Pagination";

const Search = React.lazy(() => import("./components/Search"));

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setPosts(JSON.parse(localStorage.getItem("posts")) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const searchPosts = async title => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://www.reddit.com/r/${title}/hot.json`
      );
      const json = await response.json();
      setPosts(json.data.children);
      setLoading(false);
      setError("");
    } catch (e) {
      setError("Что-то пошло не так! Повторите попытку");
      setLoading(false);
      setPosts([]);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Reddit hot posts</h1>
      <React.Suspense fallback={<Loader />}>
        <Search onSearch={searchPosts} />
      </React.Suspense>

      {loading && <Loader />}
      {error ? <p className="text-center mt-5">{error}</p> : null}

      {posts.length ? (
        <>
          <PostsList posts={posts} />
          <Pagination />
        </>
      ) : loading ? null : (
        <p className="text-center mt-5">Введите название сабреддита!</p>
      )}
    </div>
  );
};

export default App;
