import { Checkbox, TableCell, TextField } from "@mui/material";
import { useState } from "react";

type Props = {
  row: {
    id: number;
    name: string;
    quantity: number;
  };
  handleCheck: (_event: React.MouseEvent<unknown>, id: number) => void;
  handleChangeAds: (id: number, name: string, quantity: number) => void;
  isItemSelected: boolean;
};
export function AdsRow({
  row,
  handleCheck,
  handleChangeAds,
  isItemSelected,
}: Props) {
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
          id={row.id.toString()}
          name="ads-content"
          sx={{
            "& .MuiInputBase-input": { fontSize: 16 },
          }}
          fullWidth
          value={adsContent}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setAdsContent(event.target.value);
            handleChangeAds(row.id, event.target.value, adsQuantity);
          }}
        />
      </TableCell>
      <TableCell align="center" size="small">
        <TextField
          required
          variant="standard"
          value={adsQuantity}
          type="number"
          name="ads-quantity"
          id={row.id.toString()}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setAdsQuantity(Number(event.target.value));
            handleChangeAds(row.id, adsContent, Number(event.target.value));
          }}
          sx={{
            "& .MuiInputBase-input": { fontSize: 16 },
          }}
          fullWidth
        />
      </TableCell>
    </>
  );
}
