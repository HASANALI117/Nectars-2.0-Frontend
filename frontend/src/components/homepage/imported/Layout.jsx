import { Content } from "./Content.jsx"
import { Box } from "./Box.jsx";

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
    <Content />
  </Box>
);