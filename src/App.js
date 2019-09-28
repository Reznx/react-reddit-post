import React from "react";
import Search from "./components/Search";
import PostsList from "./components/PostsList";

const App = () => {
  const posts = [
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
      id: 3,
      title: "Здесь Описание поста",
      img: "https://www.uoe.co.uk/wp-content/uploads/2018/07/Post-box-1.jpg",
      data: "28.09.2019",
      author: "John Doe"
    }
  ];
  return (
    <div className="container mt-5">
      <Search />
      <PostsList posts={posts} />
    </div>
  );
};

export default App;
