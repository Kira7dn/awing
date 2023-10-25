import { FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Information } from "../../../store/reducer";
import React, { useState } from "react";

type Props = {
  information: Information;
};
function InfoTab({ information }: Props) {
  const [info, setInfo] = useState(information);
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
          value={info.name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setInfo({ ...info, name: event.target.value })
          }
        />
        <TextField
          label="Mô tả"
          variant="standard"
          fullWidth
          value={info.describe}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setInfo({ ...info, describe: event.target.value })
          }
        />
      </FormControl>
    </>
  );
}

export default InfoTab;
