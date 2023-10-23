import { Box } from "@mui/material";
import Home from "./scenes/home/Home";
import Header from "./scenes/global/Header";

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <Header />
        {/* Body */}
        <Home />
      </Box>
    </div>
  );
}

export default App;
