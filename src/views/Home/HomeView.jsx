import {Box, Grid, Typography, styled} from "@mui/material";
import {services} from "../../const/services";
import Services from "../../components/Cards/Services";

export default function HomeView() {
  const Img = styled("img")({
    width: "auto",
  });

  return (
    <Box>
      <Grid
        container
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
        className="bg-header"
      >
        <Grid item xs={10} sm={10} md={10} lg={3} xl={5}>
          <Box>
            <Typography variant="h1" color={"primary"}>
              Flux Capacity
            </Typography>
            <Typography
              variant="body1"
              color={"paragraph.main"}
              mt={2}
              width={"88%"}
            >
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
              sx={{height: {xs: 256, sm: 352, md: 512, xl: 544}}}
            />
          </Box>
        </Grid>
      </Grid>
      <main>
        <section>
          <Grid
            container
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={8}
            my={4}
          >
            {services.map((service) => {
              const {id, ...props} = service;
              return (
                <Grid item key={id} xs={8} sm={4} md={4} lg={2} xl={2}>
                  <Services props={props} />
                </Grid>
              );
            })}
          </Grid>
        </section>
      </main>
    </Box>
  );
}
