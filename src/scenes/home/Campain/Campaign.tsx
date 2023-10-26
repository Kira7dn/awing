import { FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useStore } from "../../../store/hook";
import { UPDATE_INFOMATION } from "../../../store/action";

function Campaign() {
  const { state, dispatch } = useStore();
  const { name, describe } = state.information;
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
          value={name}
          error={!state.status.isValid && !!state.information.error}
          // helperText={!state.status.isValid && state.information.error}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch({
              type: UPDATE_INFOMATION,
              payload: {
                name: event.target.value,
                describe,
                error:
                  event.target.value === "" ? "Vui lòng điền thông tin." : null,
              },
            });
          }}
          sx={{
            "& .MuiFormLabel-root": { fontSize: 15 },
            "& .MuiInputBase-input": { fontSize: 16 },
          }}
        />
        <TextField
          label="Mô tả"
          variant="standard"
          fullWidth
          value={describe}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: UPDATE_INFOMATION,
              payload: { name, describe: event.target.value },
            })
          }
          sx={{
            "& .MuiFormLabel-root": { fontSize: 15 },
            "& .MuiInputBase-input": { fontSize: 16 },
          }}
        />
      </FormControl>
    </>
  );
}

export default Campaign;
