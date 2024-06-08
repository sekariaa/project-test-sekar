import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

interface Idea {
  id: number;
  title: string;
  published_at: string;
}

interface Props {
  idea: Idea;
}

const CardComponent: React.FC<Props> = ({ idea }) => {
  const { title, published_at } = idea;

  const formattedDate = new Date(published_at).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <CardActionArea>
      <Card sx={{ maxWidth: 345, minHeight: 330 }}>
        <CardMedia
          component="img"
          height="140"
          image="/about-bg.jpg"
          alt="image card"
          loading="lazy"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {formattedDate}
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            sx={{
              fontWeight: "bold",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default CardComponent;
