import {Box, Grid, Typography, styled} from "@mui/material";
import Subscriptions from "../../components/Cards/Subscriptions";
import Services from "../../components/Cards/Services";
import IconSection from "../../components/IconSections/IconSections";
import {services} from "../../const/services";
import {iconInfoSection} from "../../const/iconInfoSection";
import {subscriptions} from "../../const/subscriptions";
import ButtonDesign from "../../ui/ButtonDesign";

const text = "Comienza";
const explore = "Información";

export default function HomeView() {
  const Img = styled("img")({
    width: "auto",
  });

  return (
    <>
      <Grid
        className="bg-header"
        container
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
        gap={{lg: 16, xl: 0}}
      >
        <Grid item xs={8} sm={10} md={10} lg={3} xl={4}>
          <Box
            border={2}
            px={2}
            py={4}
            borderRadius={2}
            bgcolor={"secondary.main"}
            borderColor={"primary.main"}
          >
            <Typography variant="h1" color={"primary"}>
              Flux Capacity
            </Typography>
            <Typography variant="body1" color={"paragraph.main"} mt={2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              facilis provident hic aliquid, dignissimos laboriosam? Repellat,
              odio reiciendis? Quidem porro, itaque obcaecati nihil aut libero
              quae optio minus perferendis eligendi.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={10} sm={10} md={10} lg={4} xl={4}>
          <Box textAlign={{xs: "center", lg: "right", xl: "right"}}>
            <Img
              src="/img/consultancy.webp"
              alt="Two girls working together"
              sx={{
                mt: {xs: -8, sm: 0},
                ml: {xs: -2, sm: 0, lg: -8, xl: 4},
                height: {xs: 304, sm: 416, md: 512, xl: 544},
              }}
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
        my={2}
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
        {iconInfoSection.map((iconInfo) => {
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
        gap={8}
      >
        <Grid item xl={4}>
          <Box textAlign={"right"}>
            <Img
              src="/img/cards/security.webp"
              alt="A guy having a meeting"
              sx={{height: {xs: 256, sm: 352, md: 512, xl: 544}}}
            />
          </Box>
        </Grid>
        <Grid item xl={4}>
          <Typography variant="h4" color={"primary"}>
            Atención personalizada
          </Typography>
          <Typography variant="body2" color={"paragraph.main"} mb={2}>
            En cada llamada, haremos todo lo posible para satisfacer tu
            petición. no dejaremos que te vayas con la misma duda, la
            solucionaremos juntos!.
          </Typography>
          <Box display={"flex"} gap={2}>
            <ButtonDesign text={text} />
            <ButtonDesign explore={explore} />
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
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
