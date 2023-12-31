import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Product from "./dashboardComp/Product";
import Categories from "./dashboardComp/Categories";
import Users from "./dashboardComp/Users";
import Orders from "./dashboardComp/Orders";
import axios from "axios";

import BACKEND_URL from "../../constants";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Dashboard() {
  const { shopName } = useParams();
  const [shopId, setShopId] = useState();
  const [shopOwnerId, setShopOwnerId] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/shops/${shopName}/`)
      .then((res) => {
        console.log(res.data[0].shopId);
        setShopId(res.data[0].shopId);
        setShopOwnerId(res.data[0].shopOwner);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log("shopId", shopId);
    if (shopId) {
      setIsLoading(false);
    }
  }, [shopId]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Tabs
          defaultActiveKey="profile"
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="empty" title="" disabled></Tab>
          <Tab eventKey="products" title="Products">
            <Product shopId={shopId} />
          </Tab>
          <Tab eventKey="categories" title="Categories">
            <Categories shopId={shopId} />
          </Tab>
          <Tab eventKey="users" title="Users">
            <Users shopId={shopId} />
          </Tab>
          <Tab eventKey="orders" title="Orders">
            <Orders shopId={shopId} />
          </Tab>
        </Tabs>
      )}
    </div>
  );
}
