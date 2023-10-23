import { FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";

function Campaign() {
  return (
    <>
      <FormControl
        fullWidth
        sx={{ m: 1, display: "flex", gap: 2 }}
        variant="filled"
      >
        <TextField
          required
          label="Tên chiến dịch"
          variant="standard"
          fullWidth
        />
        <TextField label="Mô tả" variant="standard" fullWidth />
      </FormControl>
    </>
  );
}

export default Campaign;
