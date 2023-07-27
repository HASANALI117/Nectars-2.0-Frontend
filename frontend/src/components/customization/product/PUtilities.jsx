import React from "react";
import { CirclePicker } from "react-color";
import {
  FaImage,
  FaPalette,
  FaFont,
  FaTextHeight,
  FaAlignLeft,
  FaBold,
  FaAlignCenter,
  FaAlignRight,
} from "react-icons/fa";

const PUtilities = ({ productData, onUpdate }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onUpdate({ ...productData, [name]: value });
  };

  const handleBooleanInputChange = (event) => {
    const { name, value } = event.target;
    if (value === "true") {
      onUpdate({ ...productData, [name]: true });
    } else {
      onUpdate({ ...productData, [name]: false });
    }
  };

  return (
    <div style={styles.container}>
      <h3>Banner Customization</h3>
      <div style={styles.Group}>
        <div style={styles.inputGroup}>
          <label style={styles.icon}>
            <FaImage /> Section Title Background
          </label>
          <CirclePicker
            color={productData.catBgColor}
            onChange={(color) =>
              handleInputChange({
                target: { name: "catBgColor", value: color.hex },
              })
            }
          />
        </div>
        <div style={styles.verticalLine}></div>
        <div style={styles.inputGroup}>
          <label style={styles.icon}>
            <FaImage /> Section Title Font color
          </label>
          <CirclePicker
            color={productData.catFoColor}
            onChange={(color) =>
              handleInputChange({
                target: { name: "catFoColor", value: color.hex },
              })
            }
          />
        </div>
        <div style={styles.verticalLine}></div>
        <div style={styles.inputGroup}>
          <label style={styles.icon}>
            <FaPalette /> Background Color:
          </label>
          {/* <input
        style={styles.input}
        type="text"
        name="bgColor"
        value={productData.bgColor}
        onChange={handleInputChange}
      /> */}
          <CirclePicker
            color={productData.bgColor}
            onChange={(color) =>
              handleInputChange({
                target: { name: "bgColor", value: color.hex },
              })
            }
          />
        </div>
        <div style={styles.verticalLine}></div>
        <div style={styles.inputGroup}>
          <label style={styles.icon}>
            <FaPalette /> Font Color:
          </label>
          {/* <input
        style={styles.input}
        type="text"
        name="color"
        value={productData.color}
        onChange={handleInputChange}
      /> */}
          <CirclePicker
            color={productData.color}
            onChange={(color) =>
              handleInputChange({ target: { name: "color", value: color.hex } })
            }
          />
        </div>
        <div style={styles.verticalLine}></div>
        <div style={styles.inputGroup}>
          <label style={styles.icon}>
            <FaTextHeight /> Font Size:
          </label>
          <input
            style={styles.input}
            type="text"
            name="fontSize"
            value={productData.fontSize}
            onChange={handleInputChange}
          />
        </div>
        <div style={styles.verticalLine}></div>
        {/* <div style={styles.inputGroup}>
          <label style={styles.icon}>Carousel:</label>
          <input
            style={styles.checkbox}
            type="boolean"
            name="isCarousel"
            value={productData.isCarousel}
            onChange={handleInputChange}
          />
        </div> */}
        <div style={styles.inputGroup}>
          <FaAlignLeft style={styles.icon} />
          <select
            name="isCarousel"
            value={productData.isCarousel}
            onChange={handleBooleanInputChange}
            style={styles.select}
          >
            <option value={true}>Carousel</option>
            <option value={false}>Grid</option>
          </select>
        </div>
        <div style={styles.verticalLine}></div>
        <div style={styles.inputGroup}>
          <label style={styles.icon}>Show Dots:</label>
          <input
            style={styles.checkbox}
            type="boolean"
            name="showDots"
            value={productData.showDots}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "58px",
    margin: "40px -0px 0px 0px",
  },
  Group: {
    display: "flex",
    borderRadius: "58px",
    alignItems: "center",
    width: "500px",
    backgroundColor: "#e6e6e6",
    flexDirection: "column",
    transition: "background-color 0.3s ease-in-out", // Add transition for smooth effect

    "&:hover": {
      backgroundColor: "red", // Change background color on hover
    },
  },
  inputGroup: {
    display: "flex",
    alignItems: "center",
    margin: "10px",
  },
  icon: {
    marginRight: "10px",
  },
  input: {
    padding: "5px",
    borderRadius: "20px",
    border: "none",
    outline: "none",
  },
  select: {
    padding: "5px",
    borderRadius: "5px",
    border: "none",
    outline: "none",
    backgroundColor: "#fff",
    cursor: "pointer",
  },
  checkbox: {
    marginRight: "10px",
  },
  // carouseltitle: {
  //   color: `${productData.color}`,
  //   fontSize: `${productData.fontSize} px`,
  //   fontWeight: `${productData.fontWeight}`,
  //   textAlign: `${productData.textAlign}`,
  // },

  verticalLine: {
    width: "100%", // Set the line width to span the full width
    height: "4px",
    backgroundColor: "#ccc", // Adjust the color as needed
    margin: "20px 0", // Adjust the margin as needed
  },
};

export default PUtilities;
