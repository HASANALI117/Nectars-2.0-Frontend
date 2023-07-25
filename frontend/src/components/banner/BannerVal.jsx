import React from "react";
import Banner from "./Banner";

export default function BannerVal() {
  const imageUrl = ""; //a url to add an image
  const color = "blue"; // a color to add a background color
  const overlay = "true"; // a boolean to add an overlay
  const title = "Welcome to the Jungle"; //...a title
  const titleColor = "teal"; //...a title color
  const titleSize = "30px"; //...a title size
  const titleAlignment = "center"; //...a title alignment
  //i want a weird title font
  const titleFont = "cursive"; //...a title font
  return (
    <Banner
      imageUrl={imageUrl}
      color={color}
      overlay={overlay}
      title={title}
      titleColor={titleColor}
      titleSize={titleSize}
      titleAlignment={titleAlignment}
      titleFont={titleFont}
    />
  );
}
