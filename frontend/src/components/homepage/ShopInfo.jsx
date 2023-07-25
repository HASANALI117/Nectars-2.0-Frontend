import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BACKEND_URL from '../../constants';



const ShopInfo = () => {
  const [shopData, setShopData] = useState({
    shopName: '',
    description: '',
    shopTitle: '',
  });
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setShopData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  const handleSubmit = (event) => {

    event.preventDefault();

    const token = localStorage.getItem('access');
    axios
      .post(`${BACKEND_URL}/shops/create/`, shopData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
      .then((response) => {
        console.log(response.data);
        // window.location.href = "/dashboard";

      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    console.log(shopData);
  }, [shopData]);

  return (
    <div className="form-center">

    <form onSubmit={handleSubmit}>
      <label>
        Shop Name
        <input
          type="text"
          name="shopName"
          value={shopData.shopName}
          onChange={handleChange}
          className='password-input'
        />
      </label>
      <label>
        Shop Title
        <input
          type="text"
          name="shopTitle"
        //   value={shopData.shopTitle}
        //   onChange={handleChange}
            className='password-input'
        />
      </label>
      <label>
        Description
        <textarea
          name="description"
          value={shopData.description}
          onChange={handleChange}
          className='disciption-input'
        />
      </label>
      <button type="submit">Save</button>
    </form>
    </div>
  );
};

export default ShopInfo;