import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SearchBar from "./searchBar";

interface DataItem {
  id: number;
  companyName: string;
  ideas: number;
}

const CardData = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/home")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, [data]);

  return (
    <>
      <Box
        sx={{
          marginY: { xs: "10px", sm: "20px" },
          padding: 0,
          listStyle: "none",
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <SearchBar data={data} />
        <Box
          component="ul"
          sx={{
            padding: 0,
            listStyle: "none",
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {data.map((item) => (
            <li key={item.id}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {item.companyName}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Ideas:</strong> {item.ideas}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">See All Ideas</Button>
                </CardActions>
              </Card>
            </li>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default CardData;
