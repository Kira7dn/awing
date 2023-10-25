import { Box } from "@mui/material";
import { tokens } from "../../theme";

function Header() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "40px",
        backgroundColor: tokens.secondary[500],
        padding: "4px 20px",
      }}
    >
      <Box component="a" href="/">
        <img
          src="https://awing.vn/dist//icons/logo_white_red.png"
          style={{ height: "100%" }}
        />
      </Box>
    </Box>
  );
}

export default Header;
