import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import { lightBlue } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { add } from "../cartSlice";

export default function Cards({ data }) {
  console.log(data);
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <img src={data.image} alt={data.title} />
      <div className="wrapperDiv">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <h3>${data.price}</h3>
      </div>
      <Button onClick={() => dispatch(add(data))}>Add to cart</Button>
    </div>

    // <Card
    //   sx={{ maxWidth: 244 }}
    //   style={{ display: "flex", flexDirection: "column" }}
    // >
    //   <CardActionArea>
    //     <CardMedia
    //       component="img"
    //       height="140"
    //       image={data.image}
    //       alt="green iguana"
    //       style={{ objectFit: "cover" }}
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         {data.title}
    //       </Typography>
    //       <Typography variant="body2" color="gold">
    //         Rating : {data.rating.rate}
    //       </Typography>

    //       <Typography variant="h5" style={{ marginTop: 8 }}>
    //         Price: {data.price}$
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <Button>add to cart</Button>
    // </Card>
  );
}
