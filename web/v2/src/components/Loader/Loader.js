import React from "react";

import "./Loader.scss";
import Backdrop from "../Backdrop/Backdrop";

const Loader = props => {
  const { show, backdrop = true, text, className } = props;
  return show ? (
    <div className={"loader " + className}>
      <Backdrop show={backdrop} />
      <div className="loader_container">
        <div className="loader_container_spinner" />
        {text ? <div className="loader_container_text">{text}</div> : null}
      </div>
    </div>
  ) : null;
};

export default Loader;
