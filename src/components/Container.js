import React from "react";

function Container({
  header,
  children,
  textPosition = "", // possible values: left, right, center
  direction = "horizontal", // possible values: vertical, horizontal
  contentPosition = "center", // possible values: left, right, center
}) {
  return (
    <div className={`container ${textPosition}`}>
      {header ? <h2>{header}</h2> : null}

      <div className={`container-children ${direction} ${contentPosition}`}>
        {children}
      </div>
    </div>
  );
}

export default Container;


//This component renders a container with some optional header and children.
//It takes props such as header, textPosition, direction, and contentPosition.
//header: Displays a header if provided.
//textPosition: Aligns the text content within the container (left, right, or center).
//direction: Specifies the layout direction of children (vertical or horizontal).
//contentPosition: Aligns the children within the container (left, right, or center).