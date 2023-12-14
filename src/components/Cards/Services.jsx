import {Box, Paper, Typography, styled} from "@mui/material";
import "./Style.css";

export default function Services({...props}) {
  const {title, description, src} = props.props;

  const Img = styled("img")({
    width: "320px",
    height: "320px",
    objectFit: "cover",
    overflow: "hidden",
  });

  return (
    <Paper elevation={7} className="animation-cards" sx={{mt: 4}}>
      <Img src={src} alt={title} />
      <Box p={2}>
        <Typography variant="h6" color={"primary"}>
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </Box>
    </Paper>
  );
}
