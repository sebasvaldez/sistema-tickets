import { ScreenSizeContext } from "./ScreenSizeContext.jsx";
import { useMediaQuery, useTheme } from "@mui/material";

export const ScreenSizeContextProvider = ({ children }) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


  return (
    <ScreenSizeContext.Provider value={{ isMobile, isTablet, isDesktop }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};
