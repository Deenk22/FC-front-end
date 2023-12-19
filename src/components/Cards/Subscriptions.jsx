import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  styled,
} from "@mui/material";

export default function Subscriptions({...subs}) {
  const {plan, features, src} = subs;

  const Img = styled("img")({
    width: "100%",
    height: "100%",
  });

  return (
    <Box className="active-plans">
      <Paper elevation={7} className="animation-cards">
        <Img src={src} alt={plan} />
        <Box p={2}>
          <Typography
            variant="h5"
            component={"h1"}
            color={"primary"}
            mb={1}
            p={1}
            sx={{
              borderTop: 2,
              borderLeft: 2,
              borderBottom: 2,
              borderBottomLeftRadius: 16,
              background:
                "linear-gradient(to right,rgba(241, 245, 250, 0.2), 88%,  rgba(81, 113, 152, 0.5))",
            }}
          >
            {subs.plan}
          </Typography>
          <List>
            {features?.map((listItem) => {
              const {title} = listItem;
              return (
                <ListItem key={title} disablePadding>
                  <ListItemText>{title}</ListItemText>
                </ListItem>
              );
            })}
          </List>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            mt={8}
          >
            <Button disabled variant="contained" size="small">
              No disponible
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
