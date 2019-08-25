import React from "react";
import "./IconButton.scss";

const IconButton = props => {
  const { Icon, onClick, color } = props;
  return (
    <div onClick={onClick} className="icon-button">
      <Icon style={{ fill: color }} />
    </div>
  );
};

export default IconButton;
