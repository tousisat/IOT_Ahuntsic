import React from "react";
import "./Message.scss";

const Message = props => {
  const { children, status } = props;
  return (
    <div className={["message", "message--" + status].join(" ")}>
      {children}
    </div>
  );
};

export default Message;
