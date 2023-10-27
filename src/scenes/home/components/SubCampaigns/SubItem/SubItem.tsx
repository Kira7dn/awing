import SubInfo from "./SubInfo";
import AdsList from "./Ads/AdsList";
import { Card } from "@mui/material";

function SubItem() {
  return (
    <Card sx={{ marginTop: "4px" }}>
      <SubInfo />
      <AdsList />
    </Card>
  );
}

export default SubItem;
