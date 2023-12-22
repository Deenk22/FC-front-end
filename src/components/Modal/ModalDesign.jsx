import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {useState} from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: 2,
  boxShadow: 12,
  bgcolor: "#517198",
  width: 512,
  p: 6,
};

export default function ModalDesign() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        sx={{marginTop: 1}}
        onClick={handleOpen}
      >
        Contenido Gratis
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            color="secondary"
          >
            Nombre del Contenido
          </Typography>
          <Typography
            variant="body1"
            color="secondary"
            id="modal-modal-description"
            mt={1}
            p={0.5}
          >
            Descripción del contenido más enlace de descarga.
          </Typography>
          <Typography variant="body2" color="secondary" mt={4} p={0.5}>
            Proponer al usuario registrarse para recibir más contenido y
            redirigirlo a la vista de registro / Subscribete a la newsletter.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
