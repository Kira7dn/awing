import { Box, Card, CardContent, Typography } from "@mui/material";
import { ISubCampaign } from "../../../store/interface";
import { CheckCircle } from "@mui/icons-material";
import { useStore } from "../../../store/hook";

type Props = {
  subCampaign: ISubCampaign;
  isSelected: boolean;
};

const SubCampaignCard = ({ subCampaign, isSelected }: Props) => {
  const { state } = useStore();
  const adsNumber = subCampaign.ads.reduce(
    (sum, ad) => sum + Number(ad.quantity),
    0
  );
  return (
    <Card
      sx={{
        width: "180px",
        border: "2px solid",
        borderColor: isSelected ? "primary.main" : "grey.200",
        "&:hover": {
          borderColor: "primary.main",
        },
      }}
    >
      <CardContent
        sx={{
          padding: "10px",
        }}
      >
        <Box sx={{ display: "flex", gap: 2, justifyContent: "start" }}>
          <Typography
            variant="h3"
            gutterBottom
            color={
              (subCampaign.error_ads || subCampaign.error_name) &&
              !state.status.isValid
                ? "error"
                : "text.primary"
            }
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: "1",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              fontSize: { xs: "14px" },
              fontWeight: "bold",
            }}
          >
            {subCampaign.name}
          </Typography>
          <CheckCircle color={subCampaign.status ? "success" : "disabled"} />
        </Box>
        <Typography variant="h5" component="div">
          {adsNumber} Quảng cáo
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SubCampaignCard;
