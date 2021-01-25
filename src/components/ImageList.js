import React from "react";

const ImageList = (props) => {
  return props.Images.map((i) => {
    return <img src={i.urls.regular} alt="car images" />;
  });
};

export default ImageList;
