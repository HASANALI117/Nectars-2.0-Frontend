


import React, { useState } from 'react';

export default function Banner(props) {
  const { imageUrl: initialImageUrl, color: initialColor, overlay: initialOverlay, title, titleColor, titleSize, titleAlignment,titleFont } = props;
  const [imageUrl ] = useState(initialImageUrl);
  const [color ] = useState(initialColor);
  const [overlay] = useState(initialOverlay);

  const styles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundColor: color,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '65vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const titleStyles = {
    color: titleColor,
    fontSize: titleSize,
    textAlign: titleAlignment,
    fontFamily: titleFont,
  };

  return (
    <div style={styles}>
      <div className="background-container">
        {overlay && <div className="overlay"><h1 style={titleStyles}>{title}</h1></div>}
      </div>
    </div>
  );
}