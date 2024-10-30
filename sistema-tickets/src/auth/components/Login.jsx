import { useScreenSize } from "../../hooks/useScreenSize.js";
import { Box, FormControl, TextField,  } from "@mui/material";



export const Login = () => {
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: isMobile ? "80%" : isTablet ? "90%" : "100%",
        maxWidth: "400px",
        margin: "10px auto",
        border: "1px solid black",
        padding: "20px",

      }}
    >
      <FormControl>
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />
      </FormControl>
      <FormControl>
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />
      </FormControl>
    </Box>
  );
};
