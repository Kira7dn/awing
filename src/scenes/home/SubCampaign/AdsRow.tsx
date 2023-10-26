import { Checkbox, TableCell, TextField } from "@mui/material";

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
export function AdsRow({
  row,
  isItemSelected,
  handleCheck,
  handleChangeAds,
}: Props) {
  // const [name, setName] = useState(row.name);
  // const [quantity, setQuantity] = useState(row.quantity);
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
          name="name"
          defaultValue={row.name}
          error
          helperText="Vui lòng điền thông tin."
          sx={{
            "& .MuiInputBase-input": { fontSize: 16 },
          }}
          fullWidth
          inputProps={{
            onBlur: (event: React.FocusEvent<HTMLInputElement>) =>
              handleChangeAds(event),
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
          error
          helperText="Vui lòng nhập số lượng."
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
    </>
  );
}
