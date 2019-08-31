import React from "react";
import "./Remote.scss";
import * as keys from "../../constants/keyboard";
let selectedKeyRef = null;
let keysArrayRef = [];

const Remote = props => {
  const { keysArray = [], onStart = () => { }, onEnd = () => { }, disabled = false } = props;
  const [selectedKey, setSelectedKey] = React.useState(null);
  selectedKeyRef = selectedKey;
  keysArrayRef = keysArray;
  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyStart);
    document.addEventListener("keyup", handleKeyEnd);

    return () => {
      document.removeEventListener("keydown", handleKeyStart);
      document.removeEventListener("keyup", handleKeyEnd);
    };
  }, [disabled]);

  const keyUp = keysArray.find(({ id }) => id === keys.UP_KEY.id);
  const keyDown = keysArray.find(({ id }) => id === keys.DOWN_KEY.id);
  const keyRight = keysArray.find(({ id }) => id === keys.RIGHT_KEY.id);
  const keyLeft = keysArray.find(({ id }) => id === keys.LEFT_KEY.id);
  const otherKeys = keysArray.filter(
    ({ id }) =>
      id !== keys.UP_KEY.id &&
      id !== keys.DOWN_KEY.id &&
      id !== keys.RIGHT_KEY.id &&
      id !== keys.LEFT_KEY.id
  );
  const handleClickStart = event => {
    event.preventDefault();
    if (disabled) return;
    if (event.target.alt) {
      if (selectedKey) {
        onEnd(selectedKey);
      }
      setSelectedKey(event.target.alt);
      onStart(event.target.alt);
    }
  };
  const handleClickEnd = event => {
    event.preventDefault();
    if (disabled) return;
    if (event.target.alt) {
      setSelectedKey(null);
      onEnd(event.target.alt);
    }
  };
  const handleKeyStart = event => {
    if (disabled) return;
    const recognizedKey = keysArrayRef.find(({ id }) => id === event.key);
    if (recognizedKey && selectedKeyRef !== recognizedKey.mapTo) {
      if (selectedKeyRef) {
        onEnd(selectedKeyRef);
      }
      setSelectedKey(recognizedKey.mapTo);
      onStart(recognizedKey.mapTo);
    }
  };
  const handleKeyEnd = event => {
    if (disabled) return;
    const recognizedKey = keysArrayRef.find(({ id }) => id === event.key);
    if (recognizedKey && selectedKeyRef === recognizedKey.mapTo) {
      setSelectedKey(null);
      onEnd(recognizedKey.mapTo);
    }
  };
  return (
    <div className="remote">
      <div
        className="remote_keyboard"
        onTouchStart={handleClickStart}
        onTouchEnd={handleClickEnd}
        onContextMenu={ev => {
          ev.preventDefault();
          ev.stopPropagation();
        }}
        onMouseDown={handleClickStart}
        onMouseUp={handleClickEnd}
      >
        <div className="remote_keyboard_left">
          {otherKeys
            ? otherKeys.map(({ id, image, mapTo }) => {
              return (
                <div
                  key={id}
                  className={[
                    "remote_keyboard_key",
                    selectedKey === mapTo ? "remote_keyboard--selected" : "",
                    disabled ? "remote_keyboard--disabled" : ""
                  ].join(" ")}
                >
                  <img src={image} alt={mapTo} />
                </div>
              );
            })
            : null}
        </div>
        <div className="remote_keyboard_right">
          <div className="remote_keyboard_right_group1">
            <div
              className={[
                "remote_keyboard_key",
                keyUp
                  ? selectedKey === keyUp.mapTo
                    ? "remote_keyboard--selected"
                    : ""
                  : "",
                disabled ? "remote_keyboard--disabled" : ""
              ].join(" ")}
              style={keyUp ? {} : { visibility: "hidden" }}
            >
              {keyUp ? <img src={keyUp.image} alt={keyUp.mapTo} /> : null}
            </div>
            <div
              className={[
                "remote_keyboard_key",
                keyDown
                  ? selectedKey === keyDown.mapTo
                    ? "remote_keyboard--selected"
                    : ""
                  : "",
                disabled ? "remote_keyboard--disabled" : ""
              ].join(" ")}
              style={keyDown ? {} : { visibility: "hidden" }}
            >
              {keyDown ? <img src={keyDown.image} alt={keyDown.mapTo} /> : null}
            </div>
          </div>

          <div className="remote_keyboard_right_group2">
            <div
              className={[
                "remote_keyboard_key",
                keyLeft
                  ? selectedKey === keyLeft.mapTo
                    ? "remote_keyboard--selected"
                    : ""
                  : "",
                disabled ? "remote_keyboard--disabled" : ""
              ].join(" ")}
              style={keyLeft ? {} : { visibility: "hidden" }}
            >
              {keyLeft ? <img src={keyLeft.image} alt={keyLeft.mapTo} /> : null}
            </div>

            <div
              className={[
                "remote_keyboard_key",
                keyRight
                  ? selectedKey === keyRight.mapTo
                    ? "remote_keyboard--selected"
                    : ""
                  : "",
                disabled ? "remote_keyboard--disabled" : ""
              ].join(" ")}
              style={keyRight ? {} : { visibility: "hidden" }}
            >
              {keyRight ? (
                <img src={keyRight.image} alt={keyRight.mapTo} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Remote;
