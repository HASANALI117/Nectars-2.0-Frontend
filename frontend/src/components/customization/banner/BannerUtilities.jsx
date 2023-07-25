import React from "react";

const BannerUtilities = ({ bannerData, onUpdate }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onUpdate({ ...bannerData, [name]: value });
  };

  return (
    <div style={styles.container}>
      <h3>Banner Customization</h3>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          name="imageUrl"
          value={bannerData.imageUrl}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Background Color:</label>
        <input
          type="text"
          name="color"
          value={bannerData.color}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Overlay:</label>
        <input
          type="checkbox"
          name="overlay"
          checked={bannerData.overlay}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={bannerData.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Title Color:</label>
        <input
          type="text"
          name="titleColor"
          value={bannerData.titleColor}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Title Size:</label>
        <input
          type="text"
          name="titleSize"
          value={bannerData.titleSize}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Title Alignment:</label>
        <select
          name="titleAlignment"
          value={bannerData.titleAlignment}
          onChange={handleInputChange}
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>
    </div>
  );
};

const styles = {
  container: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    margin: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  inputGroup: {
    marginBottom: "10px",
  },
};

export default BannerUtilities;
