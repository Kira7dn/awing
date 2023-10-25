import { Card, CardContent, Typography } from "@mui/material";
import { SubCampaign } from "../../../store/interface";

type Props = {
  subCampaign: SubCampaign;
  isSelected: boolean;
};

const SubCampaignCard = ({ subCampaign, isSelected }: Props) => {
  const adsNumber = subCampaign.ads.reduce((sum, ad) => sum + ad.quantity, 0);
  return (
    <Card
      sx={{
        width: "160px",
        border: "2px solid",
        borderColor: isSelected ? "primary.main" : "grey.200",
        "&:hover": {
          borderColor: "primary.main",
        },
      }}
    >
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {subCampaign.name}
        </Typography>
        <Typography variant="h5" component="div">
          {adsNumber} Quảng cáo
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SubCampaignCard;
