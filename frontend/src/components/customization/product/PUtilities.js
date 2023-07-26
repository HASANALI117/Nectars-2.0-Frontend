import React from "react";

const PUtilities = ({ productData, onUpdate }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onUpdate({ ...productData, [name]: value });
  };

  return (
    <div style={styles.container}>
      <h3>Banner Customization</h3>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          name="imageUrl"
          value={productData.imageUrl}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Background Color:</label>
        <input
          type="text"
          name="bgColor"
          value={productData.bgColor}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={productData.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="text"
          name="price"
          value={productData.price}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Font Color:</label>
        <input
          type="text"
          name="color"
          value={productData.color}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Font Size:</label>
        <input
          type="text"
          name="fontSize"
          value={productData.fontSize}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>No. of Cards:</label>
        <select
          name="noOfCards"
          value={productData.noOfCards}
          onChange={handleInputChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <div>
        <label>Carousel:</label>
        <input
          type="boolean"
          name="isCarousel"
          value={productData.isCarousel}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Show Dots:</label>
        <input
          type="boolean"
          name="showDots"
          value={productData.showDots}
          onChange={handleInputChange}
        />
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

export default PUtilities;
