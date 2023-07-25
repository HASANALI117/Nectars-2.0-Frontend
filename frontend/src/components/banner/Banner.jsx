import React from "react";

export default function Banner(props) {
  const {
    imageUrl,
    color,
    overlay,
    title,
    titleColor,
    titleSize,
    titleAlignment,
    titleFont,
  } = props;

  const styles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundColor: color,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "65vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const titleStyles = {
    color: titleColor,
    fontSize: titleSize,
    textAlign: titleAlignment,
    fontFamily: titleFont,
  };

  return (
    <div style={styles}>
      {overlay && (
        <div className="overlay">
          <h1 style={titleStyles}>{title}</h1>
        </div>
      )}
    </div>
  );
}
