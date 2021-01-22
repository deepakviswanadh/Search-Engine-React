import React, { useState } from "react";
import axios from "axios";
import "./App.css";

import SearchBar from "./components/SearchBar";
const App = () => {
  const [images, setImages] = useState([]);

  const onSubmitHandler = async (e) => {
    const config = {
      params: {
        query: e,
      },
      headers: {
        Authorization: "Client-ID VTgWAm_KksurfPaJNXUbaTYxrNR_uCLMfHw9V-jA6dI",
      },
    };
    try {
      let res = await axios.get(
        "https://api.unsplash.com/search/photos",
        config
      );
      setImages({ images: res.data.results });
      console.log(images);
    } catch (err) {
      console.error(err.response.data);
    }
  };
  return (
    <div className="ui container" id="abc">
      <SearchBar onSubmitApp={(e) => onSubmitHandler(e)} />
      Found:{images.length} related images
    </div>
  );
};

export default App;
