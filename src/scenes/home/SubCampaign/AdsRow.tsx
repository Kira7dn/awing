import { Checkbox, TableCell, TextField } from "@mui/material";
import React, { useState } from "react";

type Props = {
  row: {
    id: number;
    name: string;
    quantity: number;
  };
  handleCheck: (_event: React.MouseEvent<unknown>, id: number) => void;
  isItemSelected: boolean;
};
export function AdsRow({ row, handleCheck, isItemSelected }: Props) {
  const [adsContent, setAdsContent] = useState(row.name);
  const [adsQuantity, setAdsQuantity] = useState(row.quantity);

  return (
    <>
      <TableCell padding="checkbox">
        <Checkbox
          color="primary"
          checked={isItemSelected}
          onClick={(event) => handleCheck(event, row.id)}
        />
      </TableCell>

      <TableCell align="right" size="small">
        <TextField
          required
          variant="standard"
          fullWidth
          sx={{
            "& .MuiInputBase-input": { fontSize: 16 },
          }}
          value={adsContent}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setAdsContent(event.target.value);
          }}
          inputProps={{
            onBlur: (event: React.FocusEvent<HTMLInputElement>) =>
              console.log(event.target.value),
          }}
        />
      </TableCell>
      <TableCell align="center" size="small">
        <TextField
          required
          variant="standard"
          type="number"
          fullWidth
          sx={{
            "& .MuiInputBase-input": { fontSize: 16 },
          }}
          value={adsQuantity}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setAdsQuantity(Number(event.target.value));
          }}
          inputProps={{
            onBlur: (event: React.FocusEvent<HTMLInputElement>) =>
              console.log(event.target.value),
          }}
        />
      </TableCell>
    </>
  );
}
