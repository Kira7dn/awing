import {
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
} from "@mui/material";

import { useStore } from "@/store/hook";
import { UPDATE_SUB_CAMPAIGN } from "@/store/action";

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
      error_name: event.target.value === "" ? "Vui lòng điền thông tin." : null,
    };
    dispatch({
      type: UPDATE_SUB_CAMPAIGN,
      payload: updatedSub,
    });
  };
  return (
    <FormControl
      fullWidth
      sx={{
        padding: "8px",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
      }}
      variant="filled"
    >
      <TextField
        required
        label="Tên chiến dịch con"
        variant="standard"
        value={subCampaign.name}
        name="name"
        error={!state.status.isValid && !!subCampaign.error_name}
        // helperText={subCampaign.error_name}
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
        sx={{
          "& .MuiSvgIcon-root": { fontSize: { xs: 20, md: 28 } },
          "& .MuiTypography-root": { fontSize: { xs: 12, md: 14 } },
          // width: "30%",
          // minWidth: "100px",
          // marginRight: 0,
        }}
      />
    </FormControl>
  );
};

export default SubInfo;
