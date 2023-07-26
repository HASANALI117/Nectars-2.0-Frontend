// import React from "react";

// const PUtilities = ({ productData, onUpdate }) => {
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     onUpdate({ ...productData, [name]: value });
//   };

//   return (
//     <div style={styles.container}>
//       <h3>Banner Customization</h3>
//       <div>
//         <label>Image URL:</label>
//         <input
//           type="text"
//           name="imageUrl"
//           value={productData.imageUrl}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <label>Background Color:</label>
//         <input
//           type="text"
//           name="bgColor"
//           value={productData.bgColor}
//           onChange={handleInputChange}
//         />
//       </div>

//       <div>
//         <label>Title:</label>
//         <input
//           type="text"
//           name="title"
//           value={productData.title}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <label>Price:</label>
//         <input
//           type="text"
//           name="price"
//           value={productData.price}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <label>Font Color:</label>
//         <input
//           type="text"
//           name="color"
//           value={productData.color}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <label>Font Size:</label>
//         <input
//           type="text"
//           name="fontSize"
//           value={productData.fontSize}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <label>No. of Cards:</label>
//         <select
//           name="noOfCards"
//           value={productData.noOfCards}
//           onChange={handleInputChange}
//         >
//           <option value="1">1</option>
//           <option value="2">2</option>
//           <option value="3">3</option>
//           <option value="4">4</option>
//           <option value="5">5</option>
//         </select>
//       </div>

//       <div>
//         <label>Carousel:</label>
//         <input
//           type="boolean"
//           name="isCarousel"
//           value={productData.isCarousel}
//           onChange={handleInputChange}
//         />
//       </div>

//       <div>
//         <label>Show Dots:</label>
//         <input
//           type="boolean"
//           name="showDots"
//           value={productData.showDots}
//           onChange={handleInputChange}
//         />
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     border: "1px solid #ccc",
//     borderRadius: "8px",
//     padding: "20px",
//     margin: "20px",
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//   },
//   inputGroup: {
//     marginBottom: "10px",
//   },
// };

// export default PUtilities;





import React from "react";
import { CirclePicker } from 'react-color';
import { FaImage, FaPalette, FaFont, FaTextHeight, FaAlignLeft, FaBold, FaAlignCenter, FaAlignRight } from 'react-icons/fa';


const PUtilities = ({ productData, onUpdate }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onUpdate({ ...productData, [name]: value });
  };

  return (


<div style={styles.container}>
  <h3>Banner Customization</h3>
  <div style={styles.Group}>
    <div style={styles.inputGroup}>
      <label style={styles.icon}><FaImage /> Image URL:</label>
      <input
        style={styles.input}
        type="text"
        name="imageUrl"
        value={productData.imageUrl}
        onChange={handleInputChange}
      />
    </div>
    <div style={styles.inputGroup}>
      <label style={styles.icon}><FaPalette /> Background Color:</label>
      {/* <input
        style={styles.input}
        type="text"
        name="bgColor"
        value={productData.bgColor}
        onChange={handleInputChange}
      /> */}
      <CirclePicker
        color={productData.bgColor}
        onChange={(color) => handleInputChange({ target: { name: "bgColor", value: color.hex } })}
      />
    </div>

    <div style={styles.inputGroup}>
      <label style={styles.icon}><FaFont /> Title:</label>
      <input
        style={styles.input}
        type="text"
        name="title"
        value={productData.title}
        onChange={handleInputChange}
      />
    </div>
    <div style={styles.inputGroup}>
      <label style={styles.icon}><FaFont /> Price:</label>
      <input
        style={styles.input}
        type="text"
        name="price"
        value={productData.price}
        onChange={handleInputChange}
      />
    </div>
    <div style={styles.inputGroup}>
      <label style={styles.icon}><FaPalette /> Font Color:</label>
      {/* <input
        style={styles.input}
        type="text"
        name="color"
        value={productData.color}
        onChange={handleInputChange}
      /> */}
      <CirclePicker
        color={productData.color}
        onChange={(color) => handleInputChange({ target: { name: "color", value: color.hex } })}
      />
    </div>
    <div style={styles.inputGroup}>
      <label style={styles.icon}><FaTextHeight /> Font Size:</label>
      <input
        style={styles.input}
        type="text"
        name="fontSize"
        value={productData.fontSize}
        onChange={handleInputChange}
      />
    </div>
  
    <div style={styles.inputGroup}>
      <label style={styles.icon}>No. of Cards:</label>
      <select
        style={styles.select}
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

    <div style={styles.inputGroup}>
      <label style={styles.icon}>Carousel:</label>
      <input
        style={styles.checkbox}
        type="boolean"
        name="isCarousel"
        value={productData.isCarousel}
        onChange={handleInputChange}
      />
    </div>

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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '58px',
    margin: '40px -0px 0px 0px',
  },
  Group: {
    display: 'flex',
    borderRadius: '58px',
    alignItems: 'center',
    width: '500px',
    backgroundColor: '#e6e6e6',
    flexDirection: 'column',
    transition: 'background-color 0.3s ease-in-out', // Add transition for smooth effect

    '&:hover': {
      backgroundColor: 'red', // Change background color on hover
    },

  },
  inputGroup: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px',
  },
  icon: {
    marginRight: '10px',
  },
  input: {
    padding: '5px',
    borderRadius: '20px',
    border: 'none',
    outline: 'none',

  },
  select: {
    padding: '5px',
    borderRadius: '5px',
    border: 'none',
    outline: 'none',
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
  checkbox: {
    marginRight: '10px',
  },
  // carouseltitle: {
  //   color: `${productData.color}`,
  //   fontSize: `${productData.fontSize} px`,
  //   fontWeight: `${productData.fontWeight}`,
  //   textAlign: `${productData.textAlign}`,
  // },
};

export default PUtilities;
