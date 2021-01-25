import React, { useState } from "react";
import unsplash from "./api/unsplash";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);

  const onSubmitHandler = async (e) => {
    const config = {
      params: {
        query: e,
      },
    };
    try {
      let res = await unsplash.get("/search/photos", config);
      setImages(res.data.results);
    } catch (err) {
      console.error(err.response);
    }
  };
  return (
    <div className="ui container" id="abc">
      <SearchBar onSubmitApp={(e) => onSubmitHandler(e)} />
      Found:{images.length} related images
      <ImageList Images={images} />
    </div>
  );
};

export default App;
