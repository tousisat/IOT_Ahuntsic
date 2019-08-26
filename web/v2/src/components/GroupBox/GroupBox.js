import React from "react";
import "./GroupBox.scss";

const GroupBox = props => {
  return (
    <div className="group-box">
      <fieldset>
        <legend className="group-box_title">{props.title}</legend>
        <div className="group-box_box">{props.children}</div>
      </fieldset>
    </div>
  );
};

export default GroupBox;
