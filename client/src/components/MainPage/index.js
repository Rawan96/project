import React, { useState, useEffect } from "react";
import axios from "axios";
import CardComponent from "../Card";

function MainPage() {
  const [error, setError] = useState();
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/posts")
      .then(({ data: { data } }) => {
        setPosts(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`/api/posts/post/${search}`)
      .then(({ data: { data } }) => {
        if (data) {
          setSearchData(data);
        } else {
          setSearch("");
        }
      })
      .catch((error) => {
        setError(error);
      });
  }, [search]);

  const handelSearch = ({ target: { value } }) => {
    if (value) {
      setSearch(value);
    } else {
      setSearchData([]);
    }
  };

  return (
    <div>
      <h2>A Blog for All the Plants Lover</h2>

      <input
        name="search"
        placeholder="Enter post title"
        onChange={handelSearch}
      />
      <div className="container-blog">
        {error ? (
          <div>An error occur while you are getting the data</div>
        ) : searchData.length ? (
          searchData.map((post) => <CardComponent key={post._id} item={post} />)
        ) : (
          posts.map((post) => <CardComponent key={post._id} item={post} />)
        )}
      </div>
    </div>
  );
}
export default MainPage;
