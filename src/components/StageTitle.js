import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";

function StageTitle({ title, subtitle }) {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Typography
      variant={md ? "h4" : "h5"}
      component="h2"
      color="primary"
      fontWeight="fontWeightBold"
      mb={3}
    >
      {title} <span>{subtitle}</span>
    </Typography>
  );
}

export default StageTitle;
