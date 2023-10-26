import { Box, Button, Card, CardActions } from "@mui/material";
import BasicTabs from "./CampaignTabs";

function Home() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: "800px",
          borderRadius: "8px",
          marginTop: "10px",
          padding: "10px 20px",
        }}
      >
        <BasicTabs />
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button size="large" color="primary" variant="contained">
            SUBMIT
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default Home;
