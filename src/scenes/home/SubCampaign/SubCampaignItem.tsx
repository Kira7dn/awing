import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import AdvertiseList from "./AdvertiseList";
import { SubCampaign } from "../../../store/reducer";
import { useState } from "react";

export default function SubCampaignItem({ sub }: { sub: SubCampaign }) {
  const [subCampaign, setSubCampaign] = useState(sub);
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
            value={subCampaign.name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSubCampaign({ ...subCampaign, name: event.target.value });
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={subCampaign.status}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setSubCampaign({
                    ...subCampaign,
                    status: event.target.checked,
                  });
                }}
              />
            }
            label="Đang hoạt động"
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 }, width: "30%" }}
          />
        </FormControl>
      </FormGroup>
      <AdvertiseList />
    </>
  );
}
