

import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import BACKEND_URL from '../../constants';

const SignUpPage = () => {
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        username: "",
        userType: "shop_owner",

      });
      const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
      };
      useEffect(() => {
        console.log(data);
      }, [data]);
    
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    axios.post(`${BACKEND_URL}/api/auth/users/`, data)
      .then((response) => {
    console.log(response.data);
   
        axios.post(`${BACKEND_URL}/api/token/`, {

            username: data.username,
            password: data.password,

        })
            .then((response) => {
                console.log(response.data);
               
                    console.log(response.data);
                    localStorage.setItem('access', response.data.access);
                    localStorage.setItem('refresh', response.data.refresh);
                    // window.location.href = "/";
                
            }
            )
            .catch((error) => {
                console.error(error);
            }
            );



    
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="form-center">
   <form onSubmit={handleSubmit}>
      <label>
    Username 
    <input
      type="text"
      name="username"
      value={data.username}
      onChange={handleChange}
      className="username-input"
    />
  </label>
  <label>
    Password 
    <input
      type="password"
      name="password"
      value={data.password}
      onChange={handleChange}
      className="password-input"
    />
  </label>

  <label>
    First Name 
    <input
      type="text"
      name="first_name"
      value={data.first_name}
      onChange={handleChange}
      className="first-name-input"
    />
  </label>
  <label>
    Last Name 
    <input
      type="text"
      name="last_name"
      value={data.last_name}
      onChange={handleChange}
      className="last-name-input"
    />
  </label>
  <label>
    Email 
    <input
      type="email"
      name="email"
      value={data.email}
      onChange={handleChange}
      className="email-input"
    />
  </label>
  <button type="submit">Sign Up</button>
</form>
</div>
  );
};

export default SignUpPage;