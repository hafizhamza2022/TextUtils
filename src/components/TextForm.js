import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleUpLowerClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };

  const handleRemove = () => {
    let newText = "";
    setText(newText);
  };

  const handeOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container my-3">
        <h1
          className={`text-center text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          {props.heading}
        </h1>
        <div className="row justify-content-center">
          <div className="col-md-8 col-12">
            <textarea
              id="myBox"
              className="form-control my-3"
              rows="5"
              value={text}
              onChange={handeOnChange}
            ></textarea>
            <button
              className="btn btn-primary my-3 mx-2"
              onClick={handleUpClick}
            >
              Convert to Uppercase
            </button>
            <button
              className="btn btn-primary my-3 mx-2"
              onClick={handleUpLowerClick}
            >
              Convert to Lowercase
            </button>

            <button
              className="btn btn-primary my-3 mx-2"
              onClick={handleRemove}
            >
              Remove Text
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1
              className={`text-${props.mode === "light" ? "#1e2c7e" : "light"}`}
            >
              Your text summary
            </h1>
            <p
              className={`text-${
                props.mode === "light" ? "#1e2c7ek" : "light"
              }`}
            >
              {
                text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length
              }
              words and {text.length} characters
            </p>

            <h3
              className={`text-${props.mode === "light" ? "#1e2c7e" : "light"}`}
            >
              Preview
            </h3>
            <p
              className={`text-${props.mode === "light" ? "#1e2c7e" : "light"}`}
            >
              {text.length > 0 ? text : "Enter something to preview it here"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
