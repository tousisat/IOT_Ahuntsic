import React, { useState, createRef, useEffect } from "react";

import "./Modal.scss";
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";

//REF: http://reactcommunity.org/react-transition-group/css-transition
import { CSSTransition } from "react-transition-group";

const Modal = props => {
  const {
    buttonsArray,
    show,
    backdrop,
    Component,
    children,
    onClick,
    onDismiss
  } = props;
  const [modalHeight, setModalHeight] = useState(null);
  const modalRef = createRef();
  useEffect(() => {
    if (show) setModalHeight(modalRef.current.offsetHeight);
  }, [modalRef, show]);

  //[{id: 123, name: "Cancel", status: "danger"}]
  const buttons = buttonsArray
    ? buttonsArray.map(({ id, name, status }) => (
        <Button
          key={id}
          onClick={() => (onClick ? onClick(id) : null)}
          status={status}
        >
          {name}
        </Button>
      ))
    : null;

  return (
    <div>
      <Backdrop show={backdrop} onClick={onDismiss} />
      <CSSTransition in={show} timeout={300} unmountOnExit classNames="modal">
        <div
          ref={modalRef}
          className="modal"
          style={{
            marginTop: `-${modalHeight / 2}px`
          }}
        >
          <div className="modal_container">
            <div className="modal_container_component">
              {Component || children}
            </div>
            {buttons ? (
              <div className="modal_container_buttons">{buttons}</div>
            ) : null}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

//only render if props have changed
export default React.memo(
  Modal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);
