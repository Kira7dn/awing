import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { useStore } from "../../../store/hook";
import { UPDATE_SUB_CAMPAIGN } from "../../../store/action";

const SubInfo = () => {
  const { state, dispatch } = useStore();
  const { subCampaigns, status } = state;
  const subCampaign = subCampaigns.filter((c) => c.id === status.currentSub)[0];
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedSub = {
      ...subCampaign,
      [event.target.name]:
        event.target.name === "status"
          ? !subCampaign.status
          : event.target.value,
    };
    dispatch({
      type: UPDATE_SUB_CAMPAIGN,
      payload: updatedSub,
    });
  };
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
          value={subCampaign.name}
          name="name"
          error
          helperText="Vui lòng điền thông tin."
          onChange={handleChange}
          fullWidth
          sx={{
            "& .MuiFormLabel-root": { fontSize: 15 },
            "& .MuiInputBase-input": { fontSize: 16 },
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={subCampaign.status}
              onChange={handleChange}
              name="status"
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
