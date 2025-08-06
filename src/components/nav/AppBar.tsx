import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Drawer,
  AppBar as MUIAppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Close } from "@mui/icons-material";
import { useNavigate } from "react-router";

export const AppBar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const NavItems = () => (
    <>
      <Button>Links</Button>
    </>
  );

  return (
    <>
      <MUIAppBar
        component="nav"
        position="sticky"
        sx={{
          borderRadius: "4px",
          backgroundColor: "white",
          boxShadow: "none",
        }}
      >
        {/** Desktop NavBar */}
        <Container maxWidth="xl" sx={{ display: { md: "block", xs: "none" } }}>
          <Toolbar disableGutters>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  "&:hover": { cursor: "pointer" },
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
                onClick={() => navigate("/")}
              >
                <img src="/images/Logo.png" width={50} />
                <Typography
                  variant="h2"
                  component={"span"}
                  fontSize={"24px"}
                  color="primary"
                >
                  BitLoft LLC
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                  gap: 4,
                }}
              >
                <NavItems />
              </Box>
            </Box>
          </Toolbar>
        </Container>

        {/** Mobile NavBar */}
        <Container sx={{ display: { xs: "block", md: "none" } }}>
          <Toolbar disableGutters>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Box>Logo</Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button>
                  <MenuIcon onClick={() => setOpen(true)} />
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </MUIAppBar>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box sx={{ display: "flex", justifyContent: "end", width: "100%" }}>
          <Button>
            <Close sx={{ p: 2 }} onClick={() => setOpen(false)} />
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "200px",
            height: "100%",
            gap: 4,
            px: 4,
          }}
        >
          <NavItems />
        </Box>
      </Drawer>
    </>
  );
};

export default AppBar;
