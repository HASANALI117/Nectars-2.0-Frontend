import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import axios from "axios";
import AWS from "aws-sdk";
import BACKEND_URL from "../../../constants";

export default function Product(props) {
  const [products, setProducts] = useState([]);
  const [posterImage, setPosterImage] = useState(null);
  const [productImages, setProductImages] = useState([]);
  const [uploadedPosterUrl, setUploadedPosterUrl] = useState("");
  const [uploadedProductUrls, setUploadedProductUrls] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    console.log("props.shopId", props.shopId);
    const token = localStorage.getItem("access");
    axios
      .get(`${BACKEND_URL}/categories/shop/${props.shopId}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCategories(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/shopProducts/${props.shopId}/`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // setProducts([
    //   { id: 1, name: "Product 1", price: 10, description: "Description 1" },
    //   { id: 2, name: "Product 2", price: 20, description: "Description 2" },
    //   { id: 3, name: "Product 3", price: 30, description: "Description 3" },
    // ]);
  }, []);

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const [expandedProduct, setExpandedProduct] = useState(null);

  const handleExpand = (id) => {
    setExpandedProduct(id);
  };

  const handleCollapse = () => {
    setExpandedProduct(null);
  };

  const handleUpdate = (id, name, price, description) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, name, price, description } : product
      )
    );
  };

  const handlePosterImageChange = (e) => {
    const file = e.target.files[0];
    setPosterImage(file);
  };

  const handleProductImagesChange = (e) => {
    const files = e.target.files;
    setProductImages([...productImages, ...files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform image uploads using the AWS SDK
    const posterImageUrl = await uploadImageToS3(posterImage);
    const productImageUrls = await uploadImagesToS3(productImages);

    // Save the URLs to state
    setUploadedPosterUrl(posterImageUrl);
    setUploadedProductUrls(productImageUrls);

    // Save the data to the database using Axios call
    const productData = {
      name: e.target.name.value,
      price: e.target.price.value,
      description: e.target.description.value,
      posterImageUrl,
      productImageUrls,
    };

    console.log(productData);

    // try {
    //   await axios.post("/api/products", productData);
    //   alert("Product data and image URLs saved to the database successfully!");
    //   // Perform any additional logic after successful save
    // } catch (error) {
    //   console.error(error);
    //   alert("Error saving product data and image URLs to the database.");
    // }
  };

  const uploadImageToS3 = async (file) => {
    if (!file) return "";

    // Configure your AWS credentials here
    AWS.config.update({
      accessKeyId: "ASIAZ55AM5YJWISHGREK",
      secretAccessKey: "lQo5WdNe/5b2SrdDeHLXMKGjQdqnRYgCWOJIiOzN",
      sessionToken:
        "IQoJb3JpZ2luX2VjEE4aCm1lLXNvdXRoLTEiSDBGAiEAt6q6ee4o3GEV0sXUBXUrtT/7mrz6qqxiNpKzCW/hCZACIQDsYBO2JjW8FOz7heUzEvisuZ0FpJCDSki7+K/egM0yGCroAggqEAAaDDY4MjY5OTMyMDg1MSIMrnqapBNMkQm4ZDbCKsUCqkbBFXNHTWS6YrlVKEJN2Dwhb7UR8VRFIQJox8K7ic5WaiDvw3wlLnFOLK+Fy4nDcdVw/m/mQYcRXEU/LnLi4MhMfhvs7In144xssA8swnItPaaWOxl9iKoQj0NvHaBscDvqL2UKJJa2/h6Doy1ecHhcVDkxZrAQRFhFhpHbkd/2y1Sx4Xzy2O/OvyuR2XqLKJ+X6kDsKVsdyeI7F4kuJ7JlQVE5nP2DbR5kslVkCw+Y7RGlH45AnK7xJV/Oz4iaK24Ula+7V63a/j272+fWObqj5GRrGfbf43TVj9VlKNzi4QAC7+HuelV5thTsrF+qJDXWS8WHpaa/g72gUPX6o07vZkcDgBwl3lavpg6aXxID0H1pPZwjX1jwPhGw8cKaZ9BQNJS3ix2a6L0n0xIZwFraYaM8j3ZLsUCyPMOiXrcjdOzYGTCEov6lBjqmAfh1BBlkmPNmSVedplk1kTdylmOlZHxxZUKVQ3CYTLQ4Qifdob8L3kJuuLHixPvfJKb3MCeMB6/of9QuqlwZXslEQ8dOTqfU09uZjPPKY0gDkmew83Gqyoy2D8g5mzGk3QsjHYCUtkP/QTRxQGxhPBqin+5hZVnerRIPQee7lV6olR5xHpqCBamzF/IhgzySxUVQbYldmfboXOUnuBCS/jhGtCKtWOY=",
      region: "me-south-1",
    });

    try {
      const s3 = new AWS.S3();
      const params = {
        Bucket: "anispace", // Replace with your S3 bucket name
        Key: file.name,
        Body: file,
        ACL: "public-read", // Set ACL to 'public-read' for public access
      };

      const data = await s3.upload(params).promise();
      return data.Location; // Return the public URL of the uploaded image
    } catch (error) {
      console.error(error);
      return "";
    }
  };

  const uploadImagesToS3 = async (files) => {
    if (!files || files.length === 0) return [];

    const uploadPromises = files.map(uploadImageToS3);
    const imageUrls = await Promise.all(uploadPromises);
    return imageUrls.filter((url) => url !== ""); // Filter out any empty URLs
  };

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Products list</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Add new Product</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <ul className="list-group">
                {products.map((product) => (
                  <li
                    key={product.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <div>{product.name}</div>
                      {expandedProduct === product.id && (
                        <div>
                          <div className="form-group">
                            <label htmlFor={`name-${product.id}`}>Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id={`name-${product.id}`}
                              defaultValue={product.name}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor={`price-${product.id}`}>Price</label>
                            <input
                              type="number"
                              className="form-control"
                              id={`price-${product.id}`}
                              defaultValue={product.price}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor={`description-${product.id}`}>
                              Description
                            </label>
                            <textarea
                              className="form-control"
                              id={`description-${product.id}`}
                              rows="3"
                              defaultValue={product.description}
                            ></textarea>
                          </div>
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() =>
                              handleUpdate(
                                product.id,
                                document.getElementById(`name-${product.id}`)
                                  .value,
                                document.getElementById(`price-${product.id}`)
                                  .value,
                                document.getElementById(
                                  `description-${product.id}`
                                ).value
                              )
                            }
                          >
                            Update
                          </button>
                        </div>
                      )}
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm ml-2"
                        onClick={() => handleDelete(product.id)}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm ml-2"
                        onClick={() =>
                          expandedProduct === product.id
                            ? handleCollapse()
                            : handleExpand(product.id)
                        }
                      >
                        {expandedProduct === product.id ? "Collapse" : "Expand"}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <input type="number" className="form-control" id="price" />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="3"
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <select
                    className="form-control"
                    id="category"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    {/* Generate options for each category */}
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="posterImage">Poster Image</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="posterImage"
                    onChange={handlePosterImageChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="productImages">Product Images</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="productImages"
                    multiple
                    onChange={handleProductImagesChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
              {uploadedPosterUrl && (
                <div>
                  <p>Uploaded Poster Image URL: {uploadedPosterUrl}</p>
                  <img
                    src={uploadedPosterUrl}
                    alt="Uploaded Poster"
                    style={{ maxWidth: "300px" }}
                  />
                </div>
              )}
              {uploadedProductUrls.length > 0 && (
                <div>
                  {uploadedProductUrls.map((url, index) => (
                    <div key={index}>
                      <p>
                        Uploaded Product Image {index + 1} URL: {url}
                      </p>
                      <img
                        src={url}
                        alt={`Uploaded Product ${index + 1}`}
                        style={{ maxWidth: "300px" }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
