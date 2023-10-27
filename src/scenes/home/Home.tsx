import { Box, Button, Card, CardActions } from "@mui/material";

import { useStore } from "@/store/hook";
import { SET_IS_VALID } from "@/store/action";
import MainTabs from "./components/MainTabs";

function Home() {
  const { state, dispatch } = useStore();

  const handleSubmit = () => {
    let result = true;
    if (state.information.error) {
      result = false;
    }
    for (const subCampaign of state.subCampaigns) {
      if (subCampaign.error_name || subCampaign.error_ads) {
        result = false;
      }
    }
    if (!result) {
      alert("Vui lòng điền đúng và đầy đủ thông tin");
      dispatch({
        type: SET_IS_VALID,
        payload: result,
      });
    } else {
      alert(`Submit successful with \n ${JSON.stringify(state)}`);
      dispatch({
        type: SET_IS_VALID,
        payload: true,
      });
    }
  };
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
        <MainTabs />
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            size="large"
            color="primary"
            variant="contained"
            onClick={handleSubmit}
          >
            SUBMIT
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default Home;
