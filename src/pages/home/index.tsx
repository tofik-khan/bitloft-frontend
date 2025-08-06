import { Adjust } from "@mui/icons-material";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        my={{ xs: "64px", md: "160px" }}
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
          <img src="/images/homepage/Hero.png" width={"400px"} />
        </Box>
      </Stack>

      {/* Design Impact Section */}
      <Stack my={{ xs: "64px", md: "160px" }} p={2} textAlign={"center"}>
        <Typography variant="h2" color="primary">
          Designed for Impact
        </Typography>
        <Typography
          variant="body1"
          color="primary"
          my={4}
          maxWidth={{ xs: "400px", md: "600px" }}
          textAlign={"center"}
          mx={"auto"}
        >
          We deliver tailored applications that address your specific challenges
          and workflows. We cater to the needs of your team and company, while
          also prioritizing the experience your users.
        </Typography>
      </Stack>

      {/* Our Focus */}
      <Stack
        direction={{ xs: "column", md: "row-reverse" }}
        alignItems={"center"}
        justifyContent={"center"}
        my={{ xs: "64px", md: "160px" }}
        p={{ xs: 1, md: 2 }}
        textAlign={{ xs: "center", md: "left" }}
        sx={{
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        <Box maxWidth={{ xs: "100%", md: "50%" }}>
          <Typography variant="h2" color="primary">
            Our Craft, Your Advantage
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <Adjust color="primary" />
              </ListItemIcon>
              <ListItemText>
                <strong>Handcrafted Precision</strong> &mdash;Every Project is
                uniquely built, not templated.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Adjust color="primary" />
              </ListItemIcon>
              <ListItemText>
                <strong>Extreme Usability</strong> &mdash; Simplicity, clarity,
                and user feedback drive every interface.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Adjust color="primary" />
              </ListItemIcon>
              <ListItemText>
                <strong>End-to-End Support</strong> &mdash; From discovery to
                launch and beyond, we grow with you.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Adjust color="primary" />
              </ListItemIcon>
              <ListItemText>
                <strong>Customer Success Obsessed</strong> &mdash; Your wins are
                the metric we care about.
              </ListItemText>
            </ListItem>
          </List>
        </Box>
        <Box>
          <img src="/images/homepage/focusImage.png" width={"300px"} />
        </Box>
      </Stack>

      {/* Our Audience */}
      <Stack my={{ xs: "64px", md: "160px" }} p={2} textAlign={"center"}>
        <Typography variant="h2" color="primary">
          Our Audience...You!
        </Typography>
        <Typography variant="body1" my={4} color="primary">
          We partner with everyone from scrappy startups to established
          enterprises.
        </Typography>
      </Stack>

      {/* Contact Section */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        gap={4}
        my={{ xs: "64px", md: "160px" }}
        p={{ xs: 1, md: 2 }}
        textAlign={{ xs: "center", md: "left" }}
        sx={{
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        <Box maxWidth={"300px"}>
          <Typography variant="h2" color="primary">
            Let&apos;s Get In Touch!
          </Typography>
          <Typography variant="body1" my={4} color="primary">
            No sales pressure—just a conversation
          </Typography>
        </Box>
        <Box minWidth={"500px"}>
          <Paper sx={{ padding: 5 }} elevation={3}>
            <Stack gap={3}>
              <Typography color="primary" variant="body1">
                Contact Us
              </Typography>
              <TextField type="text" label="Name" size="small" />
              <TextField type="email" label="Email" size="small" />
              <TextField
                multiline
                minRows={3}
                type="text"
                label="Message"
                size="small"
              />
              <Button variant="contained">Send Message</Button>
            </Stack>
          </Paper>
        </Box>
      </Stack>
    </>
  );
};
