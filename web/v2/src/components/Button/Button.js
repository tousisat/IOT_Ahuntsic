import React from "react";

import "./Button.scss";
import Loader from "./../Loader/Loader";

const Button = props => (
  <button
    onClick={props.onClick}
    disabled={props.isLoading ? true : props.disabled}
    className={["button", "button--" + props.status].join(" ")}
    type={props.type}
  >
    {props.isLoading ? (
      <div className="button_loader">
        <Loader show backdrop={false} />
      </div>
    ) : (
      props.children
    )}
  </button>
);

export default Button;
