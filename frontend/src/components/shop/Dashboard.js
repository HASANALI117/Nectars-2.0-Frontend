import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Product from "./dashboardComp/Product";
import Categories from "./dashboardComp/Categories";
import Users from "./dashboardComp/Users";
import Orders from "./dashboardComp/Orders";

export default function Dashboard() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="empty" title="" disabled></Tab>
      <Tab eventKey="products" title="Products">
        <Product />
      </Tab>
      <Tab eventKey="categories" title="Categories">
        <Categories />
      </Tab>
      <Tab eventKey="users" title="Users">
        <Users />
      </Tab>
      <Tab eventKey="orders" title="Orders">
        <Orders />
      </Tab>
    </Tabs>
  );
}
