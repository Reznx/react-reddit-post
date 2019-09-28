import React, { useState, useEffect, Fragment } from "react";
import PostsList from "./components/PostsList";
import Loader from "./Loader";

const Search = React.lazy(() => import("./components/Search"));

const App = () => {
  const [pages, setPages] = useState(1);
  const [after, setAfter] = useState(null);
  const [before, setBefore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [cards, setCards] = useState([]);

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

  // const nextPage = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch(
  //       `https://www.reddit.com/r/reactjs/hot.json?count=2&after=2`
  //     );
  //     const json = await response.json();
  //     setPosts(json.data.children);
  //     setLoading(false);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  // const prevPage = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch(
  //       `https://www.reddit.com/r/reactjs/hot.json?count=2&before=2`
  //     );
  //     const json = await response.json();
  //     setPosts(json.data.children);
  //     setLoading(false);
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
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item disabled">
                <a className="page-link" aria-disabled="true" href="#">
                  {pages}
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </Fragment>
      ) : loading ? null : (
        <p className="text-center pt-5">Введите название сабреддита!</p>
      )}
    </div>
  );
};

export default App;
