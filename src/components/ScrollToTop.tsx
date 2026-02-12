import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Access the current URL path
  const { pathname } = useLocation();

  useEffect(() => {
    // This effect runs every time the path (URL) changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use "smooth" if you prefer a sliding effect
    });
  }, [pathname]);

  // This component doesn't render any UI; it only provides logic
  return null;
};

export default ScrollToTop;