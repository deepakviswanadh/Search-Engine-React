import React, { useState } from "react";

const SearchBar = (props) => {
  const [name, setName] = useState({
    value1: "",
  });
  const { value1 } = name;
  const onChange1 = (e) => {
    setName({ value1: e.target.value });
  };

  const onSubmit1 = (e) => {
    e.preventDefault();
    props.onSubmitApp(value1);
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={(e) => onSubmit1(e)}>
        <div className="field">
          <input
            type="text"
            value={value1}
            placeholder="search"
            onChange={(e) => onChange1(e)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
