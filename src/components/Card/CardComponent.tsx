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

const ActionAreaCard: React.FC<Props> = ({ idea }) => {
  const { title, published_at } = idea;

  const formattedDate = new Date(published_at).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="px-3 md:px-28 mb-5">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/about-bg.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {formattedDate}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ActionAreaCard;
