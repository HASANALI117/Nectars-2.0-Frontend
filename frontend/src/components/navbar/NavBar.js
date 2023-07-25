import { useState } from "react";
import { Navbar, Text, Avatar, Dropdown, Input } from "@nextui-org/react";
import { SearchIcon } from "./Searchicon.js";
import { Button, Link } from "@nextui-org/react";
import { CSSTransition } from "react-transition-group";
import Cart from "./Cart";

export default function App(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  // console.log(props);
  function handleLogin() {
    setIsAuthenticated(true);
  }

  function handleLogout() {
    setIsAuthenticated(false);
  }

  const handleShowCart = () => {
    console.log("cart");
    setShowCart(!showCart);
    setIsButtonClicked(true);
  };
  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Brand css={{ mr: "$4" }}>
        <Text b color="inherit" className="brandName">
          <a className="brandName" href={props.brnadlink}>
            {props.brand}
          </a>
        </Text>
        <Navbar.Content variant="highlight" className="navContent">
          <Navbar.Link href="#">All</Navbar.Link>
          <Navbar.Link href="#">Categories</Navbar.Link>

          <Button
            auto
            flat
            as={Link}
            color={props.signupColor}
            onPress={handleShowCart}
          >
            Cart
          </Button>
          <CSSTransition in={showCart} timeout={50} unmountOnExit>
            <Cart detailsCustom={props} />
          </CSSTransition>
        </Navbar.Content>
      </Navbar.Brand>
      <Navbar.Content
        css={{
          "@xsMax": {
            w: "100%",
            jc: "space-between",
          },
        }}
      >
        <Navbar.Item
          css={{
            "@xsMax": {
              w: "100%",
              jc: "center",
            },
          }}
        >
          <Input
            className="search"
            clearable
            contentLeft={
              <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
            }
            contentLeftStyling={false}
            css={{
              w: "100%",
              "@xsMax": {
                mw: "300px",
              },
              "& .nextui-input-content--left": {
                h: "100%",
                ml: "$4",
                dflex: "center",
              },
            }}
            placeholder="Search..."
          />
        </Navbar.Item>
        {isAuthenticated ? (
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  size="md"
                  src="https://i.pravatar.cc/150"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item color={props.dropdownColor} key="profile">
                Profile
              </Dropdown.Item>
              <Dropdown.Item color={props.dropdownColor} key="orders">
                Orders
              </Dropdown.Item>
              <Dropdown.Item
                key="logout"
                withDivider
                color="error"
                onClick={handleLogout}
              >
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Navbar.Content>
            <Navbar.Link
              color={props.loginColor}
              href="#"
              onClick={handleLogin}
            >
              Login
            </Navbar.Link>
            <Navbar.Item>
              <Button auto flat as={Link} href="#" color={props.signupColor}>
                Sign Up
              </Button>
            </Navbar.Item>
          </Navbar.Content>
        )}
      </Navbar.Content>
    </Navbar>
  );
}
