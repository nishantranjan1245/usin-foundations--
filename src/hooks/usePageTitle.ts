import { useEffect } from "react";

const usePageTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = "USIN Foundation - Nurturing a Greener Future for India";
    };
  }, [title]);
};

export default usePageTitle;
