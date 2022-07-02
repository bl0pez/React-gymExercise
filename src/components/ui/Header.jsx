import {
  AppBar,
  Box,
  Container,
  Grid,
  Icon,
  Link,
  Menu,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";


import { Link as RouterLink } from "react-router-dom";

import { FitnessCenter } from "@mui/icons-material";

export const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              GymApp
            </Typography>
            <Stack
              direction="row"
              gap="40px"
              fontSize="24px"
              alignItems="flex-end"
              color="#fff"
            >
              <RouterLink to="/" style={{ color:"#fff", textDecoration:"none", hover: {borderBottom: '3px solid #FF2625'} }} >Link</RouterLink>
              <Link
                href="#exercises"
                underline="none"
                color="#fff"
              >
                Exercises
              </Link>
            </Stack>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
