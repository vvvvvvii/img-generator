import Typography from "@mui/material/Typography";

const stageTitleStyle = {
  color: "#d4ce41",
};

function StageTitle({ title, subtitle }) {
  return (
    <Typography
      variant="h4"
      component="h2"
      fontWeight="fontWeightBold"
      mb={3}
      style={stageTitleStyle}
    >
      {title} <span>{subtitle}</span>
    </Typography>
  );
}

export default StageTitle;
