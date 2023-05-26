import { Box } from "@mui/material";

const innerPageContainerStyle = (theme) => ({
  padding: "2rem 3rem",
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "start",
  },
});

function InnerPageContainer({ children }) {
  return <Box sx={innerPageContainerStyle}>{children}</Box>;
}

export default InnerPageContainer;
