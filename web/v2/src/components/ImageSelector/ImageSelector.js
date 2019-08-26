import React from "react";
import "./ImageSelector.scss";

const ImageSelector = props => {
  //images = [{id: 123, image: "../logo.png"}]
  const { images, onSelect = () => {}, selectedImagesIds = [] } = props;
  const [selectedIds, setSelectedIds] = React.useState(selectedImagesIds);

  const imagesView = images.map(({ id, image }) => {
    const isSelected = Boolean(selectedIds.find(currentId => currentId === id));
    return (
      <div
        key={id}
        className={[
          "image-selector_container",
          isSelected ? "image-selector_container--selected" : ""
        ].join(" ")}
      >
        <img src={image} alt={id} />
      </div>
    );
  });
  return (
    <div
      className="image-selector"
      onClick={el => {
        if (el.target.alt === undefined) return;
        const alreadySelectedIdIndex = selectedIds.findIndex(
          currentId => currentId === el.target.alt
        );
        if (alreadySelectedIdIndex !== -1) {
          //remove selection
          selectedIds.splice(alreadySelectedIdIndex, 1);
          setSelectedIds([...selectedIds]);
          onSelect(selectedIds);
        } else {
          //add selection
          setSelectedIds([...selectedIds, el.target.alt]);
          onSelect([...selectedIds, el.target.alt]);
        }
      }}
    >
      {imagesView}
    </div>
  );
};

export default ImageSelector;
