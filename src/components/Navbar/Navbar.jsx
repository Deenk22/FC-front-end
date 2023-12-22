import {AppBar, List, ListItem, Toolbar, Typography} from "@mui/material";
import {navLinks} from "../../const/navLinks";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <List
          disablePadding
          sx={{display: "flex", justifyContent: "center", alignItems: "center"}}
        >
          {navLinks.map((link) => {
            const {title, path} = link;
            return (
              <Link key={title} to={path}>
                <ListItem>
                  <Typography variant="body2" color={"secondary"}>
                    {title}
                  </Typography>
                </ListItem>
              </Link>
            );
          })}
        </List>
      </Toolbar>
    </AppBar>
  );
}
