import React, { useState, useEffect, Fragment } from "react";
import PostsList from "./components/PostsList";
import Loader from "./components/Loader";
import Pagination from "./components/Pagination";

const Search = React.lazy(() => import("./components/Search"));

const App = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const raw = localStorage.getItem("posts") || [];
  //   setPosts(JSON.parse(raw);
  // }, []);

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
      console.log(json.data.children);
    } catch (e) {
      console.error(e);
    }
  };

  // const nextPage = async value => {
  //   try {
  //     setLoading(true);
  //     setPages(2);
  //     const response = await fetch(
  //       `https://www.reddit.com/r/${value}/hot.json?count=${pages}&after=`
  //     );
  //     const json = await response.json();
  //     setPosts(json.data.children);
  //     setLoading(false);
  //     console.log(new Date(1569719870 * 1000));
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  return (
    <div className="container mt-5">
      <h1 className="text-center pb-5">Reddit hot posts</h1>
      <React.Suspense fallback={<Loader />}>
        <Search onSearch={searchPosts} />
      </React.Suspense>

      {loading && <Loader />}

      {posts.length ? (
        <Fragment>
          <PostsList posts={posts} />
          <Pagination />
        </Fragment>
      ) : loading ? null : (
        <p className="text-center pt-5">Введите название сабреддита!</p>
      )}
    </div>
  );
};

export default App;
