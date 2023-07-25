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
  const [category, setCategory] = useState();

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
        console.log("response.data", response.data);
        setCategory(response.data[0].categoryId);
        setCategories(response.data);
      });
  }, []);

  useEffect(() => {
    console.log("category", category);
  }, [category]);

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
      categoryId: category,
      poster_image_url: posterImageUrl,
      image_urls: productImageUrls,
    };

    console.log(productData);

    axios
      .post(`${BACKEND_URL}/products/create/`, productData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setProducts([...products, productData]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const uploadImageToS3 = async (file) => {
    if (!file) return "";

    // Configure your AWS credentials here
    AWS.config.update({
      accessKeyId: "ASIAZ55AM5YJRAYYBAWN",
      secretAccessKey: "G1uSGtOwRHdWaxd5sunmqhcmiPDyfdNthwdOk4W+",
      sessionToken:
        "IQoJb3JpZ2luX2VjEFcaCm1lLXNvdXRoLTEiRjBEAiBFN6cmU9xJyl8Rsm/Xoif0Nf0DIehGR1aB/d/SmEo2tAIgShLEs1TFg8afHEodJNtF98Z4YHxX6/LtLfzY61VC9dkq6AIIMxAAGgw2ODI2OTkzMjA4NTEiDNvpl4YNba5EG+9gTyrFAmZKM6KasJiXOI2TqgaA7TLqvzpxwRyQjaOH2XZU7rB1x2FZVi4ohXSQZH5n6p7FAePnIL0CjzDgTLgi6cltxTRTgm68xhAYG2iomuGR0wtvecMpgZcXqNdAPjdbW7EGRM3NVi37c9BcTvDDK/P0OIIhwhKLhgLP1cIL3bSEGoEV2SVvj11HGN8B5lUXQ/qL2VX19rEyhD6D208LovzS0D7GPEFxOZKc57o6z39JlgQBIzqKxItNsv6ytrl3owvGUZYwtb+hdDTBCabNeu0Cu84v0qRIrKyPNBi/foYG0WmJ7cnE62FrHVHaURR10sR+JjufyrjK8A5SawAila1C1dnv1jb9ZQWajXPtW/P0kpNlT+g9A9bl+ILuTdZSP1kF9GJHg5Nc6elGQokZdOV37z5FxYCgXALAE89iqxW4DZ7R2/xsrQsw85qApgY6qAHnfqDabD06B0ccdmfB3Ixsx1jCy7QJb531f3JFIDcCLzDnZ2hmR8e3VJGlHYd6jOjdKRqaxBelcdnv8e7DeX0X/vnWhl+VmEId8VLjiGtS04YJAwcAGd1Vye3cz0ZcR0BVxcvEgt+tqZQi94nYhkkV4FZfqZQ/xmCJkOvtLrIC9toS9HqZkbWOi7mHZTVZk4rM1Cn5/+tMaYo58s1E2zUhwg701EM3aKo=",
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
                      <option
                        key={category.categoryId}
                        value={category.categoryId}
                      >
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
