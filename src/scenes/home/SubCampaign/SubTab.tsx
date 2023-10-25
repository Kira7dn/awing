import { SubCampaign } from "../../../store/reducer";
import { useState } from "react";
import SubCampaignItem from "./SubCampaignItem";
import { Box, IconButton } from "@mui/material";
import SubCampaignCard from "./SubCampaignCard";
import { NoteAdd } from "@mui/icons-material";

const SubTab = ({ subCampaigns }: { subCampaigns: SubCampaign[] }) => {
  const [subCampaignList, setSubCampaignList] = useState(subCampaigns);
  const [currentSub, setCurrentSub] = useState(subCampaigns[0]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: "10px",
          overflowY: "hidden",
          "&::-webkit-scrollbar": { width: 0, height: 0 },
          paddingBottom: "10px",
        }}
      >
        <Box key="add" sx={{ display: "flex", alignItems: "center" }}>
          <IconButton size="large">
            <NoteAdd sx={{ fontSize: 40 }} />
          </IconButton>
        </Box>

        {subCampaignList.map((subCampaign) => {
          return (
            <Box
              key={subCampaign.id}
              sx={{ cursor: "pointer" }}
              onClick={() => setCurrentSub(subCampaign)}
            >
              <SubCampaignCard
                subCampaign={subCampaign}
                isSelected={currentSub.id === subCampaign.id}
              />
            </Box>
          );
        })}
      </Box>
      <SubCampaignItem sub={currentSub} />
    </Box>
  );
};

export default SubTab;
