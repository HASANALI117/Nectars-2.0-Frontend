import React from "react";
import {
  FaImage,
  FaPalette,
  FaFont,
  FaTextHeight,
  FaAlignLeft,
} from "react-icons/fa";
import { CirclePicker } from "react-color";
import { useEffect } from "react";

const BannerUtilities = ({ bannerData, onUpdate }) => {
  useEffect(() => {
    console.log(bannerData);
  }, [bannerData]);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    onUpdate({
      ...bannerData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.Group}>
        <h3>Banner Customization</h3>
        <div style={styles.inputGroup}>
          <FaImage style={styles.icon} />
          <input
            type="text"
            name="imageUrl"
            value={bannerData.imageUrl}
            onChange={handleInputChange}
            placeholder="Image URL"
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <FaPalette style={styles.icon} />
          <label>Background Color</label>
          <CirclePicker
            color={bannerData.color}
            onChange={(color) =>
              handleInputChange({ target: { name: "color", value: color.hex } })
            }
          />
        </div>
        <div style={styles.inputGroup}>
          <input
            type="checkbox"
            name="overlay"
            checked={bannerData.overlay}
            onChange={handleInputChange}
            style={styles.checkbox}
          />
          <label>Overlay</label>
        </div>
        <div style={styles.inputGroup}>
          <FaFont style={styles.icon} />
          <input
            type="text"
            name="title"
            value={bannerData.title}
            onChange={handleInputChange}
            placeholder="Title"
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <FaPalette style={styles.icon} />
          <label> Color</label>

          <CirclePicker
            color={bannerData.titleColor}
            onChange={(color) =>
              handleInputChange({
                target: { name: "titleColor", value: color.hex },
              })
            }
          />
        </div>
        <div style={styles.inputGroup}>
          <FaTextHeight style={styles.icon} />
          <input
            type="text"
            name="titleSize"
            value={bannerData.titleSize}
            onChange={handleInputChange}
            placeholder="Title Size"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <FaAlignLeft style={styles.icon} />
          <select
            name="titleAlignment"
            value={bannerData.titleAlignment}
            onChange={handleInputChange}
            style={styles.select}
          >
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>

        <div style={styles.inputGroup}>
          <FaAlignLeft style={styles.icon} />
          <select
            name="Vpos"
            value={bannerData.Vpos}
            onChange={handleInputChange}
            style={styles.select}
          >
            <option value="start">Top</option>
            <option value="center">Center</option>
            <option value="end">Bottom</option>
          </select>
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
    // border: '1px solid blue',
    // width: '700px',
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
};

export default BannerUtilities;
