import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

function ErrorMsg() {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box color="white" py={5}>
      <Typography
        variant="h5"
        component="h3"
        mb={1}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        找不到圖片欸
        <Icon sx={{ marginLeft: ".5rem" }}>
          <ErrorOutlineOutlinedIcon />
        </Icon>
      </Typography>
      <Typography
        variant={md ? "subtitle1" : "subtitle2"}
        component="p"
        align="center"
      >
        要不要換一個搜尋詞或使用英文呢？
      </Typography>
    </Box>
  );
}

export default ErrorMsg;
