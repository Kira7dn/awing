import { Checkbox, TableCell, TableRow, TextField } from "@mui/material";

import { useStore } from "@/store/hook";

type Props = {
  row: {
    id: number;
    name: string;
    quantity: number;
  };
  isItemSelected: boolean;
  handleCheck: (_event: React.MouseEvent<unknown>, id: number) => void;
  handleChangeAds: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export function AdsItem({
  row,
  isItemSelected,
  handleCheck,
  handleChangeAds,
}: Props) {
  const { state } = useStore();
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
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
          name="name"
          defaultValue={row.name}
          error={!state.status.isValid && row.name === ""}
          // helperText={
          //   !state.status.isValid &&
          //   row.name === "" &&
          //   "Vui lòng điền thông tin."
          // }
          sx={{
            "& .MuiInputBase-input": { fontSize: 16 },
          }}
          fullWidth
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChangeAds(event);
          }}
        />
      </TableCell>
      <TableCell align="center" size="small">
        <TextField
          required
          variant="standard"
          type="number"
          id={row.id.toString()}
          name="quantity"
          error={!state.status.isValid && row.quantity <= 0}
          // helperText={
          //   !state.status.isValid &&
          //   row.quantity <= 0 &&
          //   "Vui lòng điền số lượng."
          // }
          value={row.quantity}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChangeAds(event);
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
