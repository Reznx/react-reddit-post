import React, { useState, useEffect } from "react";
import PostsList from "./components/PostsList";
import Loader from "./Loader";

const Search = React.lazy(() => import("./components/Search"));

const App = () => {
  const [pages, setPages] = useState(1);
  const [after, setAfter] = useState(null);
  const [before, setBefore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Здесь Описание поста",
      img: "https://www.uoe.co.uk/wp-content/uploads/2018/07/Post-box-1.jpg",
      data: "28.09.2019",
      author: "John Doe"
    },
    {
      id: 2,
      title: "Здесь Описание поста",
      img: "https://www.uoe.co.uk/wp-content/uploads/2018/07/Post-box-1.jpg",
      data: "28.09.2019",
      author: "John Doe"
    },
    {
      id: 3,
      title: "Здесь Описание поста",
      img: "https://www.uoe.co.uk/wp-content/uploads/2018/07/Post-box-1.jpg",
      data: "28.09.2019",
      author: "John Doe"
    },
    {
      id: 4,
      title: "Здесь Описание поста",
      img: "https://www.uoe.co.uk/wp-content/uploads/2018/07/Post-box-1.jpg",
      data: "28.09.2019",
      author: "John Doe"
    }
  ]);

  useEffect(() => {
    fetch("https://www.reddit.com/r/reactjs/hot.json")
      .then(response => response.json())
      .then(json => console.log(json));
  }, []);

  const searchPosts = title => {
    // setPosts(
    //   posts.concat([
    //     {
    //       title
    //     }
    //   ])
    // );
    console.log(title);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center pb-5">Reddit app</h1>
      <React.Suspense fallback={<Loader />}>
        <Search onSearch={searchPosts} />
      </React.Suspense>

      {loading && <Loader />}

      {posts.length ? (
        <PostsList posts={posts} />
      ) : loading ? null : (
        <p className="text-center pt-5">Введите название сабреддита!</p>
      )}
    </div>
  );
};

export default App;
