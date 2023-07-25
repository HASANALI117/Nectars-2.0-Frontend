import { styled } from "@nextui-org/react";
// used as a wrapper for the navbar variants radio buttons
export const SelectorWrapper = styled("div", {
  dflex: "end",
  position: "fixed",
  width: "100%",
  bottom: "71%",

  "& .nextui-radio-group-items": {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "1fr",
    gridColumnGap: "$10",
    gridRowGap: "$2",
  },
});
