import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import AdvertiseList from "./AdvertiseList";

const SubCampaign = () => {
  return (
    <>
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
            defaultValue="Chiến dịch con 1"
            fullWidth
            sx={{
              "& .MuiFormLabel-root": { fontSize: 15 },
              "& .MuiInputBase-input": { fontSize: 16 },
            }}
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Đang hoạt động"
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 }, width: "30%" }}
          />
        </FormControl>
      </FormGroup>
      <AdvertiseList />
    </>
  );
};

export default SubCampaign;
