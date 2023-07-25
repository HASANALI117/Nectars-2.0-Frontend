import React from "react";

const NavBarUtilities = ({ navBarData, onUpdate }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onUpdate({ ...navBarData, [name]: value });
  };

  return (
    <div style={styles.container}>
      <h3>NavBar Customization</h3>
      <div style={styles.inputGroup}>
        <label>Variant:</label>
        <select
          name="variant"
          value={navBarData.variant}
          onChange={handleInputChange}
        >
          {variants.map((variant) => (
            <option key={variant} value={variant}>
              {variant}
            </option>
          ))}
        </select>
      </div>
      <div style={styles.inputGroup}>
        <label>Active Color:</label>
        <select
          name="activeColor"
          value={navBarData.activeColor}
          onChange={handleInputChange}
        >
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <div style={styles.inputGroup}>
        <label>Signup Color:</label>
        <select
          name="signupColor"
          value={navBarData.signupColor}
          onChange={handleInputChange}
        >
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <div style={styles.inputGroup}>
        <label>Login Color:</label>
        <select
          name="loginColor"
          value={navBarData.loginColor}
          onChange={handleInputChange}
        >
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <div style={styles.inputGroup}>
        <label>Button Color:</label>
        <select
          name="buttonColor"
          value={navBarData.buttonColor}
          onChange={handleInputChange}
        >
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

const variants = [
  "default",
  "highlight",
  "highlight-solid",
  "underline",
  "highlight-rounded",
  "highlight-solid-rounded",
  "underline-rounded",
];

const colors = ["primary", "secondary", "success", "warning", "error"];

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

export default NavBarUtilities;
