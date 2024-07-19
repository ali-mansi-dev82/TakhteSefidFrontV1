import { useMediaQuery } from "@mui/material";

const useResponsive = () => {
  const isMobile = useMediaQuery("(max-width: 1224px)");
  return [isMobile];
};
export default useResponsive;
