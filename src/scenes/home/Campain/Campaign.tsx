import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";

function Campaign() {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField label="Tên chiến dịch" variant="standard" required />
        <TextField label="Mô tả" variant="standard" />
      </Box>
    </>
  );
}

export default Campaign;
