import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { useState } from "react";

type Props = {
  id?: number;
  nameProps: string;
  statusProps: boolean;
};

const SubInfo = ({ nameProps, statusProps }: Props) => {
  const [name, setName] = useState(nameProps);
  const [status, setStatus] = useState(statusProps);

  return (
    <FormGroup>
      <FormControl
        fullWidth
        sx={{
          m: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 4,
        }}
        variant="filled"
      >
        <TextField
          required
          label="Tên chiến dịch con"
          variant="standard"
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
          fullWidth
          sx={{
            "& .MuiFormLabel-root": { fontSize: 15 },
            "& .MuiInputBase-input": { fontSize: 16 },
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={status}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setStatus(event.target.checked);
              }}
            />
          }
          label="Đang hoạt động"
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 }, width: "30%" }}
        />
      </FormControl>
    </FormGroup>
  );
};

export default SubInfo;
