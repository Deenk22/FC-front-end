import {Button} from "@mui/material";

export default function ButtonDesign(props) {
  return (
    <Button disableElevation variant="contained" size="small">
      {props.text || props.explore}
    </Button>
  );
}
