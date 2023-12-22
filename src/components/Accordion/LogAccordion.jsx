import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {Box} from "@mui/material";

export default function LogAccordion() {
  return (
    <Box mt={4} maxWidth={"320px"}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>¿Tienes dudas?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Una vez introduzcas los datos correctamente, se activará el botón
            para que puedas iniciar sesión.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Contenido Gratis</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Recuerda! Si te registras podrás acceder a contenido exclusivo cada
            semana! Gratis!.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
