import { useContext } from "react";
import { ScreenSizeContext } from "../context/screenSizeContext/ScreenSizeContext.jsx";

export const useScreenSize = () => {
   return useContext(ScreenSizeContext);
  
}