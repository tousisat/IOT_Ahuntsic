import React from "react";
import "./Toaster.scss";
import Button from "../Button/Button";

const Toaster = props => {
  const { show, message, status, onClose } = props;
  return (
    <div
      id="toaster"
      className={
        "toaster " +
        (show ? "toaster--show " : "") +
        (status ? `toaster--${status}` : "")
      }
    >
      <div className="toaster_close">
        <Button onClick={onClose} status="transparent">
          x
        </Button>
      </div>
      <div className="toaster_message">{message}</div>
    </div>
  );
};

export default Toaster;
