import React from "react";
import { Card, Dropdown, useTheme } from "@nextui-org/react";
import { SelectorWrapper } from "./SelectWrapper";
import { useState, useMemo } from "react";
import Navbar from "../../../comonents/navbar/Navbar";

export default function App() {
  const [variant, setVariant] = useState("default");
  const [activeColor, setActiveColor] = useState("primary");
  const [selectedVariant, setSelectedVariant] = useState(
    new Set(["Select Variant"])
  );
  const [selectedColor, setSelectedColor] = useState(new Set(["Select Color"]));

  const selectedVar = useMemo(
    () => Array.from(selectedVariant).join(", ").replaceAll("_", " "),
    [selectedVariant]
  );

  const selectedCol = useMemo(
    () => Array.from(selectedColor).join(", ").replaceAll("_", " "),
    [selectedColor]
  );

  const { isDark } = useTheme();

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

  return (
    <>
      <SelectorWrapper>
        <Card
          css={{
            px: "$90",
            maxW: "100%",
            backgroundColor: "#161a1d",
          }}
        >
          <Card.Body>
            <Dropdown>
              <Dropdown.Button flat color="info" css={{ tt: "capitalize" }}>
                {selectedVar}
              </Dropdown.Button>
              <Dropdown.Menu
                aria-label="Single selection actions"
                color="default"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedVariant}
                onSelectionChange={setSelectedVariant}
              >
                <Dropdown.Item key="default">Default</Dropdown.Item>
                <Dropdown.Item key="highlight">Highlight</Dropdown.Item>
                <Dropdown.Item key="highlight-solid">
                  Highlight-solid
                </Dropdown.Item>
                <Dropdown.Item key="highlight-rounded">
                  Highlight-rounded
                </Dropdown.Item>
                <Dropdown.Item key="highlight-solid-rounded">
                  Highlight-solid-rounded
                </Dropdown.Item>
                <Dropdown.Item key="underline">Underline</Dropdown.Item>
                <Dropdown.Item key="underline-rounded">
                  Underline-rounded
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <div className="selectcolor"></div>

            <Dropdown>
              <Dropdown.Button flat color="info" css={{ tt: "capitalize" }}>
                {selectedCol}
              </Dropdown.Button>
              <Dropdown.Menu
                aria-label="Single selection actions"
                color="default"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedColor}
                onSelectionChange={setSelectedColor}
              >
                <Dropdown.Item key="primary">primary</Dropdown.Item>
                <Dropdown.Item key="secondary">secondary</Dropdown.Item>
                <Dropdown.Item key="success">success</Dropdown.Item>
                <Dropdown.Item key="warning">warning</Dropdown.Item>
                <Dropdown.Item key="error">error</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
        </Card>
      </SelectorWrapper>
      <Navbar
        variant={selectedVar}
        activeColor={selectedCol}
        dropdownColor={selectedCol}
        signupColor={selectedCol}
        buttonColor={selectedCol}
        brand="ShopName"
      />
    </>
  );
}
