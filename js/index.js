import "./index.scss";

import axios from "axios"; // axios 모듈이 위치한 경로로 수정

const getPosts = async () => {
  try {
    const data = await axios.get("http://localhost:3000/posts");
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

getPosts();
