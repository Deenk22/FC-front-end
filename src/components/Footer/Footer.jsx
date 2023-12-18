import {Grid, Typography} from "@mui/material";

export default function Footer() {
  return (
    <Grid
      container
      className="footer-bg"
      direction={"row"}
      justifyContent={"space-evenly"}
      height={256}
    >
      <Grid item>
        <Typography variant="h1" color={"secondary"}>
          Footer
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h1" color={"secondary"}>
          Footer
        </Typography>
      </Grid>
    </Grid>
  );
}
