import React, { useEffect, useState } from "react";
import { MdViewCarousel } from "react-icons/md";
import { BiInfinite } from "react-icons/bi";
import { GiDuration } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";
import { PiCardsFill } from "react-icons/pi";
import {
  AiOutlineFieldNumber,
  AiOutlineBgColors,
  AiOutlineFontColors,
} from "react-icons/ai";
import { TfiLayoutSlider } from "react-icons/tfi";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import { SketchPicker } from "react-color";

export default function ProductUtilities(props) {
  const [color, setColor] = useState("#0000ff");

  const handleColorChange = (updatedColor) => {
    setColor(updatedColor.hex);
  };

  useEffect(() => {
    console.log(color);
  }, [color]);

  const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      const [value, setValue] = useState("");

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <Form.Control
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      );
    }
  );
  const carouselUtilities = [
    {
      Infinite: {
        icon: <BiInfinite />,
        Dropdownitem: (
          <div>
            <Dropdown.Item>true</Dropdown.Item>
            <Dropdown.Item>false</Dropdown.Item>
          </div>
        ),
      },
    },
    {
      "Show Dots": {
        icon: <BsThreeDots />,
        Dropdownitem: (
          <div>
            <Dropdown.Item>true</Dropdown.Item>
            <Dropdown.Item>false</Dropdown.Item>
          </div>
        ),
      },
    },
    {
      "Transition Duration (ms)": {
        icon: <GiDuration />,
        Dropdownitem: (
          <div>
            <Dropdown.Item>
              <input type="text"></input>
            </Dropdown.Item>
          </div>
        ),
      },
    },
    {
      "No. of Cards": {
        icon: (
          <div>
            <AiOutlineFieldNumber /> <PiCardsFill />
          </div>
        ),
        Dropdownitem: (
          <div>
            <Dropdown.Item>
              <input type="text"></input>
            </Dropdown.Item>
          </div>
        ),
      },
    },
    {
      "No. of Slides To Slide": {
        icon: <TfiLayoutSlider />,
        Dropdownitem: (
          <div>
            <Dropdown.Item>
              <input type="text"></input>
            </Dropdown.Item>
          </div>
        ),
      },
    },
  ];

  const carouselUtilitiesButtons = carouselUtilities.map((utility) => {
    const utilityKey = Object.keys(utility)[0];
    const utilityData = utility[utilityKey];

    return (
      <Dropdown
        style={{ margin: "1rem 0.5rem" }}
        autoClose={false}
        className="d-inline mx-2"
      >
        <Dropdown.Toggle
          variant="dark"
          id="dropdown-autoclose-inside"
          style={{ width: "100%" }}
        >
          <h2>{utilityData.icon}</h2>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Header>{utilityKey}</Dropdown.Header>
          {utilityData.Dropdownitem}
        </Dropdown.Menu>
      </Dropdown>
    );
  });

  const productUtilities = [
    {
      Carousel: {
        icon: <MdViewCarousel />,
        Dropdownitem: (
          <div>
            <Dropdown.Item>True</Dropdown.Item>
            <Dropdown.Item>False</Dropdown.Item>
          </div>
        ),
      },
    },
    {
      "No. of Cards": {
        icon: (
          <div>
            <AiOutlineFieldNumber /> <PiCardsFill />
          </div>
        ),
        Dropdownitem: (
          <div>
            <Dropdown.Item>
              <input type="text"></input>
            </Dropdown.Item>
          </div>
        ),
      },
    },
    {
      "Background Color": {
        icon: <AiOutlineBgColors />,
        Dropdownitem: (
          <div>
            <Dropdown.Item>
              <SketchPicker color={color} onChange={handleColorChange} />
            </Dropdown.Item>
          </div>
        ),
      },
    },
    {
      "Font Color": {
        icon: <AiOutlineFontColors />,
        Dropdownitem: (
          <div>
            <Dropdown.Item>
              <SketchPicker color={color} onChange={handleColorChange} />
            </Dropdown.Item>
          </div>
        ),
      },
    },
  ];

  const productUtilitiesButtons = productUtilities.map((utility) => {
    const utilityKey = Object.keys(utility)[0];
    const utilityData = utility[utilityKey];

    return (
      <Dropdown style={{ margin: "1rem 0.5rem" }} autoClose={false}>
        <Dropdown.Toggle
          variant="dark"
          id="dropdown-autoclose-inside"
          style={{ width: "100%" }}
        >
          <h2>{utilityData.icon}</h2>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Header>{utilityKey}</Dropdown.Header>
          {utilityData.Dropdownitem}
        </Dropdown.Menu>
      </Dropdown>
    );
  });

  return (
    <>
      <h2>Carousel Utilities</h2>
      <div
        style={{
          display: "flex",
          backgroundColor: "#394867",
          borderRadius: "10px",
          margin: "1rem",
        }}
      >
        {carouselUtilitiesButtons}
      </div>
      <h2>Product Utilities</h2>
      <div
        style={{
          display: "flex",
          backgroundColor: "#394867",
          borderRadius: "10px",
          margin: "1rem",
        }}
      >
        {productUtilitiesButtons}
      </div>
    </>
  );
}
