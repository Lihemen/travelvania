import React, { useEffect } from "react";

export const useTitle = (title: string) => {
  useEffect(() => {
    const prevTitle = document.title;
    const newTitle = title + " | " + prevTitle.split("|")[1];
    document.title = newTitle;
  }, [title]);
};
