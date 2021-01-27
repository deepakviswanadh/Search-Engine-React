import React from "react";
import ImageCard from "./ImageCard";
import "../App.css";

const ImageList = (props) => {
  const images = props.Images.map((i) => {
    return <ImageCard key={i.id} i={i} />;
  });
  return <div className="img-list">{images}</div>;
};

export default ImageList;
