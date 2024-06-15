import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useDocumentTitle = (title: string) => {
  const location = useLocation();

  useEffect(() => {
    document.title = `TTPU Questionary | ${title}`;
  }, [location, title]);
};

export default useDocumentTitle;
