import { Box, Button, Typography } from "@mui/material"

export const Banner = () => {
  return (
    <Box
    position={"relative"}
    sx={{
        mt: "30px",
        textAlign: "center",
      }}
      >
        <Typography 
          color="#FF2625" 
          fontWeight="600" 
          fontSize="26px" 
          sx={{ fontSize: { lg: "44px", xs: "40px" } }}>
            Fitness Club
        </Typography>
        <Typography fontWeight={700}
          sx={{ fontSize: { lg: "44px", xs: "40px" } }}
          mb="23px" mt="30px"
        >
          Sweat, Smile and Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={3}>
          Check out the most effective exercises
        </Typography>
        <Button 
          variant="contained" 
          color="error" 
          href="#exercises" 
          sx={{ backgroundColor: "#FF2625", padding: "10px"}}
          >
          Explore Exercises
        </Button>
        <Typography
            position={"absolute"}
            top="0"
            left="0"
            right="0"
          fontWeight={600}
          color="#FF2625"
          sx={{ 
            opacity: 0.1, 
            display: { lg: "block", xs: "none" } }}
            fontSize="200px"
        >
          Exercise
        </Typography>
      </Box>
  )
}
