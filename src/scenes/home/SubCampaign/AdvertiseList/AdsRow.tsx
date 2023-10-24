import { Checkbox, TableCell, TableRow, TextField } from "@mui/material";
import { useState } from "react";

type Props = {
  row: {
    id: number;
    name: string;
    quantity: number;
  };
  handleClick: (_event: React.MouseEvent<unknown>, id: number) => void;
  isItemSelected: boolean;
};
export function AdsRow({ row, handleClick, isItemSelected }: Props) {
  const [adsContent, setAdsContent] = useState(row.name);
  const [adsQuantity, setAdsQuantity] = useState(row.quantity);
  return (
    <TableRow
      key={row.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell padding="checkbox">
        <Checkbox
          color="primary"
          checked={isItemSelected}
          onClick={(event) => handleClick(event, row.id)}
        />
      </TableCell>

      <TableCell align="right" size="small">
        <TextField
          required
          variant="standard"
          sx={{
            "& .MuiInputBase-input": { fontSize: 16 },
          }}
          fullWidth
          value={adsContent}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setAdsContent(event.target.value);
          }}
        />
      </TableCell>
      <TableCell align="center" size="small">
        <TextField
          required
          variant="standard"
          value={adsQuantity}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setAdsQuantity(event.target.value);
          }}
          sx={{
            "& .MuiInputBase-input": { fontSize: 16 },
          }}
          fullWidth
        />
      </TableCell>
    </TableRow>
  );
}
