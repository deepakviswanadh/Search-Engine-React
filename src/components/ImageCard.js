import React from "react";
//import ReactDOM from "react-dom";

const ImageCard = (props) => {
  const { urls, description } = props.i;
  //const [height, setHeight] = useState(0);

  // const ref = useRef();

  // useEffect(() => {
  //   setHeight(ref.current.clientHeight);
  // }, []);

  return (
    <div
    //ref={ref}
    //style={{ gridRowEnd: ` span ${Math.ceil(height / 100) + 1}` }}
    >
      <img src={urls.regular} alt={description} />
    </div>
  );
};
export default ImageCard;
