import { Navbar, Text, Avatar, Dropdown, Input } from "@nextui-org/react";
import { SearchIcon } from "./Searchicon.js";

export default function App() {
  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Brand css={{ mr: "$4" }}>
        <Text b color="inherit" className="brandName">
          Brand
        </Text>
        <Navbar.Content variant="highlight" className="navContent">
          <Navbar.Link href="#">All</Navbar.Link>
          <Navbar.Link href="#">Categories</Navbar.Link>
          <Navbar.Link href="#">Cart</Navbar.Link>
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
            <Dropdown.Item key="settings">Profile</Dropdown.Item>
            <Dropdown.Item key="team_settings">Cart</Dropdown.Item>
            <Dropdown.Item key="logout" withDivider color="error">
              Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
    </Navbar>
  );
}
