import React from "react";
import "./ImageSelector.scss";

const ImageSelector = props => {
  //images = [{id: 123, image: "../logo.png"}]
  const { images, onSelect = () => {}, selectedImages = [] } = props;

  const imagesView = images.map(({ id, image }) => {
    const isSelected = Boolean(selectedImages.find(image => image.id === id));
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

  const handleSelect = el => {
    if (el.target.alt === undefined) return;

    const selectedIndex = selectedImages.findIndex(
      image => image.id === el.target.alt
    );

    if (selectedIndex !== -1) {
      //remove selection
      const clonedArray = selectedImages.slice();
      clonedArray.splice(selectedIndex, 1);
      onSelect(clonedArray);
    } else {
      //add selection
      const newSelection = images.find(img => img.id === el.target.alt);
      onSelect([...selectedImages, newSelection]);
    }
  };

  return (
    <div className="image-selector" onClick={handleSelect}>
      {imagesView}
    </div>
  );
};

export default ImageSelector;
