import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  Paper,
  TableContainer,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { AddCircleOutline, Delete } from "@mui/icons-material";
import { useState } from "react";
import { AdsRow } from "./AdsRow";

type Props = {
  adsProps: {
    id: number;
    name: string;
    quantity: number;
  }[];
  subId: number;
};
function AdvertiseList({ adsProps, subId }: Props) {
  console.log(subId);

  const [ads, setAds] = useState(adsProps);
  const [selected, setSelected] = useState<number[]>([]);
  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = ads.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };
  const handleAdd = () => {
    const newAds = [...ads];
    const index = newAds.length > 0 ? newAds[newAds.length - 1].id : 0;
    newAds.push({
      id: index + 1,
      name: `Quảng cáo ${index + 1}`,
      quantity: 1,
    });
    setAds(newAds);
  };
  const handleDelete = () => {
    const newAds = ads.filter((n) => !selected.includes(n.id));
    setAds(newAds);
    setSelected([]);
  };
  const handleChangeAds = (id: number, name: string, quantity: number) => {
    const newAds = [...ads];
    const index = newAds.findIndex((n) => n.id === id);
    newAds[index].name = name;
    newAds[index].quantity = quantity;
    setAds(newAds);
  };
  const handleCheck = (_event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: number[] = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else {
      newSelected = selected.filter((n) => n !== id);
    }
    setSelected(newSelected);
  };
  function isSelected(id: number) {
    return selected.indexOf(id) !== -1;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", pb: 2, overflow: "hidden" }}>
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
            ...(selected.length > 0 && {
              bgcolor: "rgba(0, 0, 0, 0.08)",
            }),
          }}
        >
          {selected.length > 0 ? (
            <Typography
              sx={{ flex: "1 1 100%", fontSize: "20px" }}
              color="inherit"
              variant="subtitle1"
            >
              {selected.length} selected
            </Typography>
          ) : (
            <Typography sx={{ flex: "1 1 100%" }} variant="h3" id="tableTitle">
              DANH SÁCH QUẢNG CÁO
            </Typography>
          )}
          {selected.length > 0 ? (
            <Tooltip title="Delete">
              <IconButton size="large" onClick={handleDelete}>
                <Delete fontSize="inherit" />
              </IconButton>
            </Tooltip>
          ) : (
            <Button
              variant="outlined"
              size="large"
              sx={{ display: "flex", gap: 1 }}
              onClick={handleAdd}
            >
              <AddCircleOutline />
              <Typography variant="h4">Thêm</Typography>
            </Button>
          )}
        </Toolbar>

        <TableContainer sx={{ maxHeight: 280 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    onChange={handleSelectAllClick}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 24 } }}
                  />
                </TableCell>
                <TableCell>
                  <Typography variant="h4" sx={{ fontSize: "18px" }}>
                    Tên quảng cáo*
                  </Typography>
                </TableCell>
                <TableCell width="20%">
                  <Typography variant="h4" sx={{ fontSize: "18px" }}>
                    Số lượng*
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ads.map((row) => {
                const isItemSelected = isSelected(row.id);
                return (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <AdsRow
                      row={row}
                      isItemSelected={isItemSelected}
                      handleCheck={handleCheck}
                      handleChangeAds={handleChangeAds}
                    />
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

export default AdvertiseList;
