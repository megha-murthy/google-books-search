import React from "react";
import '../../App.css';

function Container(props) {
  return <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Container;
