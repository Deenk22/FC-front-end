import {Box, Grid, Typography, styled} from "@mui/material";
import Subscriptions from "../../components/Cards/Subscriptions";
import Services from "../../components/Cards/Services";
import IconSection from "../../components/IconSections/IconSections";
import {services} from "../../const/services";
import {subscriptions} from "../../const/subscriptions";
import {headerIcons} from "../../const/headerIcons";
import ButtonDesign from "../../ui/ButtonDesign";

const text = "Empieza Ahora";

export default function HomeView() {
  const Img = styled("img")({
    width: "auto",
  });

  return (
    <>
      <Grid
        className="bg-header"
        container
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
        gap={8}
      >
        <Grid item xl={5}>
          <Box ml={1}>
            <Typography
              variant="h1"
              component={"h1"}
              color={"primary"}
              ml={-0.5}
            >
              Flux Capacity
            </Typography>
            <Typography variant="body1" color={"paragraph.main"} mt={1} mb={2}>
              En <strong className="strong">Flux Capacity</strong>, estamos
              comprometidos para ayudarte a impulsar tu proyecto o negocio,
              guiándote hacia la elección acertada y, ante todo, previniendo
              posibles contratiempos futuros.
            </Typography>
            <ButtonDesign text={text} />
          </Box>
        </Grid>
        <Grid item xl={3}>
          <Box
            bgcolor={"primary.opacity"}
            sx={{
              borderTopLeftRadius: 128,
              borderBottomRightRadius: 128,
              borderBottomLeftRadius: 128,
            }}
            p={2}
          >
            <img
              className="img-design"
              src="/img/consultancy.webp"
              width={"100%"}
              alt="Three people working together"
            />
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={8}
        my={4}
      >
        {services.map((service) => {
          return (
            <Grid item key={service.id} xs={8} sm={4} md={4} lg={2} xl={2}>
              <Services {...service} />
            </Grid>
          );
        })}
      </Grid>
      <Grid
        container
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={8}
        my={8}
      >
        {headerIcons.map((iconInfo) => {
          return (
            <Grid item key={iconInfo.id} xs={8} sm={4} md={4} lg={2} xl={2}>
              <IconSection {...iconInfo} />
            </Grid>
          );
        })}
      </Grid>
      <Grid
        className="bg-section-two"
        container
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
        gap={16}
      >
        <Grid item xl={4}>
          <Box textAlign={"right"}>
            <Img
              src="/img/cards/security.webp"
              alt="A guy having a meeting"
              sx={{height: {xs: 256, sm: 352, md: 416, xl: 480}}}
            />
          </Box>
        </Grid>
        <Grid item xl={4}>
          <Typography variant="h4" component={"h1"} color={"primary"}>
            Atención personalizada
          </Typography>
          <Typography variant="body1" color={"paragraph.main"} mt={1} mb={3}>
            En cada interacción, nos esforzamos por abordar tus necesidades de
            manera integral. Nos comprometemos a resolver tus dudas y
            preocupaciones, asegurándonos de que cada sesión sea una experiencia
            valiosa y esclarecedora.
          </Typography>
          <Box display={"flex"} gap={2}>
            <ButtonDesign text={text} />
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        my={8}
        gap={8}
      >
        {subscriptions.map((subs) => {
          return (
            <Grid item key={subs.id} xs={8} sm={4} md={4} lg={2} xl={2}>
              <Subscriptions {...subs} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
