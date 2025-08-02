import { Box, Button, Stack, Typography } from "@mui/material";

export const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        my={5}
        p={{ xs: 1, md: 2 }}
        textAlign={{ xs: "center", md: "left" }}
        sx={{
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        <Box maxWidth={{ xs: "100%", md: "50%" }}>
          <Typography variant="h2" color="primary">
            Crafting Digital Solutions, Elevating Customer Success
          </Typography>
          <Typography variant="body1" my={4} color="primary">
            From local startups to global enterprises, we build handcrafted web
            and mobile applications with an uncompromising focus on usability
            and your business outcomes.
          </Typography>
          <Stack
            direction={"row"}
            gap={2}
            justifyContent={{ xs: "center", md: "left" }}
          >
            <Button variant="contained">Learn More</Button>
            <Button variant="outlined">Let's Discuss</Button>
          </Stack>
        </Box>
        <Box>
          <img src="/public/images/Hero.png" width={"400px"} />
        </Box>
      </Stack>
    </>
  );
};
