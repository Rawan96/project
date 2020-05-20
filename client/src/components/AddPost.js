import React, { useState } from "react";
import Axios from "axios";

const AddPost = () => {
  const initialPostState = {
    id: null,
    title: "",
    description: "",
    img: "",
  };

  const [post, setPost] = useState(initialPostState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  };

  const savePost = () => {
    let data = {
      title: post.title,
      description: post.description,
      img: post.img,
    };
  };

  const createPost = (data) => {
    Axios.post("/posts", data)
      .then((res) => {
        setPost({
          id: res.data.id,
          title: res.data.title,
          description: res.data.description,
          img: res.data.img,
        });

        setSubmitted(true);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newPost = () => {
    setPost(initialPostState);
    setSubmitted(false);
  };

  return (
    <div>
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button onClick={newPost}>Add</button>
        </div>
      ) : (
        <div>
          <div>
            <label>Title</label>
            <input
              type="text"
              id="title"
              required
              value={post.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div>
            <label>Description</label>
            <input
              type="text"
              id="description"
              required
              value={post.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <div>
            <label>Image Address</label>
            <input
              type="text"
              id="image address"
              required
              value={post.img}
              onChange={handleInputChange}
              name="img"
            />
          </div>

          <button onClick={savePost}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default AddPost;
